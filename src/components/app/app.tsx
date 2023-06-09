import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/main/main";
import Login from "../../pages/login/login";
import Favorites from "../../pages/favorites/favorites";
import Property from "../../pages/property/property";
import NotFound from "../../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import { AuthorizationStatus } from "../private-route/private-route";
import { appTypes } from "../../types/types";

function App({ countPlaces, offers }: appTypes): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main countPlaces={countPlaces} offers={offers} />}
          ></Route>
          <Route path="login" element={<Login />}></Route>
          <Route
            path="favorites"
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites countPlaces={countPlaces} offers={offers} />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="offer/:id"
            element={<Property countPlaces={countPlaces} offers={offers} />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
