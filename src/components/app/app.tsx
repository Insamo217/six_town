import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/main/main";
import Login from "../../pages/login/login";
import Favorites from "../../pages/favorites/favorites";
import Property from "../../pages/property/property";
import NotFound from "../../pages/not-found/not-found";
import PrivateRoute from "../private-route/private-route";
import { AuthorizationStatus } from "../private-route/private-route";

function App({ countPlaces }: { countPlaces: number }): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main countPlaces={countPlaces} />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route
            path="favorites"
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <Favorites />
              </PrivateRoute>
            }
          ></Route>
          <Route path="offer/:id" element={<Property />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
