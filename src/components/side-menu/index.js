import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./sideMenu.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import phone from "../../assets/icons/phone.png";
import message from "../../assets/icons/message.png";
import adminis from "../../assets/icons/adminis.png";
import sheet from "../../assets/icons/sheet.png";
import squ from "../../assets/icons/squareBase.png";
import arrow from "../../assets/icons/arrow.png";
import sales from "../../assets/icons/sales.png";
import calender from "../../assets/icons/calender.png";
import more from "../../assets/icons/more.png";
import barChatIcon from "../../assets/icons/barChatIcon.png";
import Badge from '@material-ui/core/Badge';
import { Button } from "@material-ui/core";


const SideMenu = () => {
  const { sideMenuList, sideMenuTeamList } = useSelector((state) => state.dash);
  //hooks......
  const [selectedSideNav, setSelectedSideNav] = useState("Patient");
  const [imagesForSideNav,setImagesForSideNav] = useState([more,barChatIcon,adminis,sheet,sales,calender])
  const routeTo = (displayName) => {
    switch (displayName) {
      case "Overview":
        return "/dashboard";
      case "Leaderboard":
        return "/dashboardsub";
      case "Spreadsheets":
        return "/dashboardsub";
      case "Administration":
        return "/dashboardsub";
      case "Sales":
        return "/dashboardsub";
      case "Schedule":
        return "/dashboardsub";
      case "Message":
        return "/dashboardsub";
      case "Support":
        return "/dashboardsub";
      default:
        return "/dashboard";
    }
  };

  return (
    <nav className="root-slide-bar">
      <div className="sidemenu-top-logo-holder">
      socializer™
      </div>
      {sideMenuList.map((sidemenu, index) => {
        return (
          <ListItem
            key={index}
            onClick={() => {
              console.log(sidemenu.displayName);
              setSelectedSideNav(sidemenu.displayName);
            }}
            activeClassName="active-list-item"
            className="list-item"
            component={NavLink}
            to={routeTo(sidemenu.displayName)}
          ><div className="sideNaveImages">
          <img
            className="iconImage"
            src={ imagesForSideNav[index]}
            alt="close-icon"
            />
            <ListItemText primary={sidemenu.displayName} />
            </div>
          </ListItem>
        );
      })}
      <div className="teamDiv">Team</div>
      {sideMenuTeamList.map((sidemenu, index) => {
        return (
          <ListItem
            key={index}
            onClick={() => {
              console.log(sidemenu.displayName);
              setSelectedSideNav(sidemenu.displayName);
            }}
            activeClassName="active-list-item"
            className="list-item"
            component={NavLink}
            to={routeTo(sidemenu.displayName)}
          >
            <div className="sideNaveImages">
            <img
            className="iconImage"
                src={ index=== 0 ?  message : phone }
                alt="close-icon"
              />
            <ListItemText primary={sidemenu.displayName} />
           {index=== 0 && <Badge badgeContent={6} color="secondary" className="messageBadge"></Badge> }

            </div>
          </ListItem>
        );
      })}
      <div className="afterSideItemDiv">
      <img className="iconsquImage"  src={squ} alt="close-icon" />
      <img className="iconarrowImage"  src={arrow} alt="close-icon" />
      </div>
      <div className="upgradeText">
      Upgrade to Pro for more resources
      </div>
      <div  className="updateButtondiv" >
      <Button className="updateButton"> Upgrade </Button>
      </div>
    </nav>
  );
};

export default SideMenu;
