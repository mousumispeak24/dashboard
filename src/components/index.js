import React, { Fragment } from "react";
import { useDispatch} from "react-redux";
import "./style.css";
import Drawer from "@material-ui/core/Drawer";
import SideMenu from "./side-menu";
import Header from "./header"

const HomeContainer = (props) => {
  const { children } = props;

  return (
    <Fragment>
      {/* <Header/> */}
      <Drawer className="drawer" variant="permanent" anchor="left">
        <SideMenu />
      </Drawer>
      {children}
    </Fragment>
  );
};
export default HomeContainer;
