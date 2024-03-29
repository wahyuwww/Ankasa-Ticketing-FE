import React, { useEffect } from "react";
import Navbar from "../../../components/Module/navbar";
import Sidebar from "../../../components/Module/sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  setCountry,
  deleteCountry,
} from "../../../configs/redux/actions/countryActions";
import Swal from "sweetalert2";

const Country = () => {
  const country = useSelector((state) => state.allCountry.country);
  const dispatch = useDispatch();
  console.log(country);
  const fetchData = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_BACKEND}/country/getcountry`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response);
    dispatch(setCountry(response.data.data));
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const deleteCountrys = async (id) => {
    Swal.fire({
      title: "Are you sure to delete this country?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (ress) => {
      if (ress.isConfirmed) {
        await axios
          .delete(
            `${process.env.REACT_APP_API_BACKEND}/country/deletecountry/${id}`
          )
          .then((res) => {
            fetchData();
            dispatch(deleteCountry(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Your message has been deleted.", "success");
            console.log(res);
          });
      }
    });
  };

  return (
    <div id="wrapper">
      <Sidebar activecountry="active"/>
      <div id="content-wrapper" className="d-flex flex-column">
        <Navbar />
        <div>
          <div className="container-fluid">
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Kelola Country</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data Country
                </h6>
              </div>
              <Link to="/country/create">
                <button className="btn btn-warning ml-3 mt-2">
                  <span className="text"> + Create</span>
                </button>
              </Link>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>name</th>
                        <th>Alias</th>
                        <th>city_name</th>
                        <th>image</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>name</th>
                        <th>No</th>
                        <th>Alias</th>
                        <th>city_name</th>
                        <th>image</th>
                        <th>Actions</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      {country.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.alias}</td>
                          <td>{item.city_name}</td>
                          <td>
                            {" "}
                            <img
                              width="150px"
                              src={item.city_image}
                              alt="img"
                            />
                          </td>
                          <td>
                            <Link to={`/detailCountry/${item.id}`}>
                              <button className="btn btn-success">
                                <span className="text">Detail</span>
                              </button>
                            </Link>
                            <Link to={`/editCountry/${item.id}`}>
                              <button className="mr-2 ml-2 btn btn-primary">
                                <span className="text">Edit</span>
                              </button>
                            </Link>
                            <button
                              onClick={() => deleteCountrys(item.id)}
                              className=" btn btn-danger"
                            >
                              <span className="text">Delete</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content"></div>
      </div>
    </div>
  );
};

export default Country;
