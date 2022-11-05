import React from "react";
import { HomepagePage } from "../modules/homepage/pages/homepage.page";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return <HomepagePage />;
};
