import React from "react";
import { Routes, Route } from "react-router-dom";
import PlayLayout from "../Layouts/PlayLayout";

const PlayHoc = ({ component: Component, ...rest }) => {
  return (
    <Routes>
      <Route
        {...rest}
        element={
          <PlayLayout>
            <Component />
          </PlayLayout>
        }
      />
    </Routes>
  );
};

export default PlayHoc;