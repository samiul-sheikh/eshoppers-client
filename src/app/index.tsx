import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "../routes/app.route";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};
