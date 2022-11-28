import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import "./tailwind.css";

const BasicMap = React.lazy(() => import("./basic"));


const Leaflet = () => {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/Basicmap`} component={BasicMap} />  
    </Switch>
  );
};

export default Leaflet;