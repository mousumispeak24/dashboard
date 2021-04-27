import React, { useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import settingsLogo from "../../assets/icons/setting.png";
import notification from "../../assets/icons/notificationBell.png";


const Header = () => {
  //set hooks....
  const [shouldShowAddRuleMenu, setShouldShowAddRuleMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenAddRuleMenu = (event) => {
    setShouldShowAddRuleMenu(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAddRuleMenu = () => {
    setShouldShowAddRuleMenu(false);
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="header">
          <p className="subHeader">Hello Dave, Welecome back</p>
          <h4 className="page-heading">Your Dashboard is updated</h4>
          <div className="float-right margin-left-15 cursor-pointer" style={{marginTop:'-2%'}}>
            <Grid
              container
              justify="center"
              alignItems="center"
              onClick={handleOpenAddRuleMenu}
            >
              <div className="headerIcons margin-right-15">
              <a href="#" class="notification">
                <span><img className="iconbellImage"  src={notification} alt="close-icon" />
                </span>
              <span class="badge">3</span>
            </a>
              <img className="iconsquImage"  src={settingsLogo} alt="close-icon" />
                <AccountCircleIcon />
              </div>
            </Grid>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={shouldShowAddRuleMenu}
              onClose={handleCloseAddRuleMenu}
              PaperProps={{
                style: {
                  width: 250,
                },
              }}
            >
              <MenuItem onClick={() => {}}>Change Password</MenuItem>
              <MenuItem >Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
