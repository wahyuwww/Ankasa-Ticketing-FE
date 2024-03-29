import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FlightsAdmin from "../../pages/admin/flights";
import Airlanes from "../../pages/admin/airlanes";
import Country from "../../pages/admin/country";
import FlightsDetail from "../../pages/admin/flights/detail";
import FlightsCreate from "../../pages/admin/flights/create";
import FlightsEdit from "../../pages/admin/flights/edit";
import BookingDetail from "../../pages/admin/booking/detail";
import Booking from "../../pages/admin/booking/index";
import BookingEdit from "../../pages/admin/booking/edit";
import CountryDetail from "../../pages/admin/country/detail";
import CountryCreate from "../../pages/admin/country/create";
import CountryEdit from "../../pages/admin/country/edit";
import AirlanesDetail from "../../pages/admin/airlanes/detail";
import AirlanesCreate from "../../pages/admin/airlanes/create";
import AirlanesEdit from "../../pages/admin/airlanes/edit";
import Users from "../../pages/admin/users";
import UsersDetail from "../../pages/admin/users/detail";
import Login from "../../pages/admin/auth/login";
import RequireAuth from "../../components/Base/RequireAuth";
import Page404 from "../../pages/Page404/Page404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/login" element={<Login />} />
        {/* airlanes */}
        <Route
          path="/airlanes"
          element={
            <RequireAuth>
              {" "}
              <Airlanes />
            </RequireAuth>
          }
        />
        <Route
          path="/detailAirlanes/:id"
          element={
            <RequireAuth>
              {" "}
              <AirlanesDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/airlanes/create"
          element={
            <RequireAuth>
              {" "}
              <AirlanesCreate />
            </RequireAuth>
          }
        />
        <Route
          path="/editAirlanes/:id"
          element={
            <RequireAuth>
              {" "}
              <AirlanesEdit />
            </RequireAuth>
          }
        />

        {/* country */}
        <Route
          path="/country"
          element={
            <RequireAuth>
              {" "}
              <Country />
            </RequireAuth>
          }
        />
        <Route
          path="/detailCountry/:id"
          element={
            <RequireAuth>
              {" "}
              <CountryDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/country/create"
          element={
            <RequireAuth>
              {" "}
              <CountryCreate />
            </RequireAuth>
          }
        />
        <Route
          path="/editCountry/:id"
          element={
            <RequireAuth>
              {" "}
              <CountryEdit />
            </RequireAuth>
          }
        />

        {/* flights */}
        <Route
          path="/flights"
          element={
            <RequireAuth>
              {" "}
              <FlightsAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="/detailFlights/:id"
          element={
            <RequireAuth>
              {" "}
              <FlightsDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/flights/create"
          element={
            <RequireAuth>
              {" "}
              <FlightsCreate />
            </RequireAuth>
          }
        />
        <Route
          path="/editFlights/:id"
          element={
            <RequireAuth>
              {" "}
              <FlightsEdit />
            </RequireAuth>
          }
        />
        {/* booking */}

        <Route
          path="/booking"
          element={
            <RequireAuth>
              {" "}
              <Booking />
            </RequireAuth>
          }
        />
        <Route
          path="/detailBooking/:id"
          element={
            <RequireAuth>
              {" "}
              <BookingDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/editBooking/:id"
          element={
            <RequireAuth>
              {" "}
              <BookingEdit />
            </RequireAuth>
          }
        />

        {/* users */}
        <Route
          path="/users"
          element={
            <RequireAuth>
              {" "}
              <Users />
            </RequireAuth>
          }
        />
        <Route
          path="/detailUsers/:id"
          element={
            <RequireAuth>
              {" "}
              <UsersDetail />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
