import React, { } from "react";
import "./style.css";
import HomeContainer from "../../../../components";
import Header from "../../../../components/header"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import steam from "../../../../assets/icons/steam.png";
import cup from "../../../../assets/icons/cup.png";
import dish from "../../../../assets/icons/dish.png";
import linkdin from "../../../../assets/icons/linkdin.png";
import printstr from "../../../../assets/icons/printstr.png";
import twiter from "../../../../assets/icons/twiter.png";
import orangeChart from "../../../../assets/icons/orangeChart.png";
import blueChart from "../../../../assets/icons/blueChart.png";
import circle from "../../../../assets/icons/circle.png";
import playButton from "../../../../assets/icons/playButton.png";
import playButtonback from "../../../../assets/icons/playButtonback.png";
import barChat from "../../../../assets/icons/barChat.png";
import Donut from "../paiChart";
import RectangleImage from "../../../../assets/icons/RectangleImage.png";
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";


const DahboardMainContainer = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 225,
      width: 240,
    },
   
  }));
  const classes = useStyles();
  return (
    <HomeContainer>
      <div className="main-container">
        <Header/>
        <div className="insidesubDiv">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <React.Fragment>
                {/* //LATEST UPDATE.............. */}
                <Grid item xs={4}>
                <Paper className={[classes.paper,"latestUpdateMain"]} style={{background:'#FFF4F2'}}>
                  <div className="afterSideItemDivForLatestUpdare">
                    <img className="iconsquImage"  src={steam} alt="close-icon" />
                    <img className="iconCupPlateImage"  src={cup} alt="close-icon" />
                    <img className="iconCupPlateImage"  src={dish} alt="close-icon" />
                  </div>
                  <div className="latestUpdateSubTeaxt">
                    <h4 className="subText">Latest Updates</h4>
                    <div  className="addIcon">
                    <AddIcon style={{ color:"#FFFFFF",marginTop:"23%"}}  />
                    </div>
                  </div >
                </Paper>
                </Grid>
                
                {/* //GRAPH.................. */}
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                  <div className="afterSideItemDivForGraph">
                    <img className="iconblueChartImage"  src={blueChart} alt="close-icon" />
                    <img className="iconorangeChartImage"  src={orangeChart} alt="close-icon" />
                  <div className="graphText">
                    <div style={{marginLeft: "4%"}}>
                      <p className="graphAmmount graphAmmountcommon">$21.2K</p>
                      <p className="graphAmmountText graphAmmountcommon">Visitors this year</p>
                    </div>
                    <div style={{marginLeft: "40%"}}>
                      <p className="graphAmmountColor graphAmmountcommon">105.23 %</p>
                      <p className="graphAmmountText graphAmmountcommon">Since last year</p>
                    </div>
                  </div>
                  </div>
                  <div className="graphSecondRow">
                  <div className="afterSideItemDivForGraph2">
                    <img className="iconplayButtonbackImage"  src={playButtonback} alt="close-icon" />
                    <img className="iconplayButtonImage"  src={playButton} alt="close-icon" />
                    <p className="playbuttontext playbuttontextCommon">40k</p>
                    <p className="playbuttontext2 playbuttontextCommon">Videos Played</p>
                  </div>
                  <div className="afterSideItemDivForGraph3">
                    <div>
                      <img className="iconbarChatImage"  src={barChat} alt="close-icon" />
                    </div>
                    <p className="barCharttext playbuttontextCommon">130</p>
                    <p  className="barCharttext2 playbuttontextCommon">Scheduled Posts</p>
                  </div>
                  </div>
                  </Paper>
                </Grid>
                
                {/* //WHATS YOUR PLAN?.................... */}
                <Grid item xs={4}>
                  <Paper className={[classes.paper,"imageBackground"]} >
                    <p className="yourPlanText1 yourPlanCommon">What’s your plan?</p>
                    <p className="yourPlanText2 yourPlanCommon">Looks like a shady day</p>
                    <p className="yourPlanText3 yourPlanCommon">36°</p>
                    <div className="yourPlanebuttoneImage">
                    <img className="rectangleImage"  src={RectangleImage} alt="close-icon" />
                    <div  className="addIconForYours">
                    <AddIcon style={{ color:"#FFFFFF",marginTop:"23%"}}  />
                    </div>
                    </div>
                  </Paper>
                </Grid>
              
              </React.Fragment>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <React.Fragment>
                  
                  {/* //UPDATE SOCIAL SITES......... */}
                <Grid item xs={4}>
                  <Paper className={[classes.paper,"socialsiteMain"]}>
                  <div className="midesection"> Latest updates</div>
                    <div className="socialSitesHeader">
                      <div  className="brandAdditionsdiv" >
                        <Button className="brandAdditions socialSiteCommon"> Brand additions </Button>
                      </div>
                      <p className="socialSiteCommon upcomingtasks">Upcoming tasks</p>
                    </div>
                    <div className="commonForSocial">
                      <img className=""  src={twiter} alt="close-icon" />
                      <div className="mediadiv">
                        <p className="socialMediaName">Twitter</p>
                        <p className="socialMediacompany">F&B Industry</p>
                      </div>
                      <p className="commonMediaIs twiterNumber"> +987.00 </p>
                  </div>
                  <div className="commonForSocial">
                    <img className=""  src={printstr} alt="close-icon" />
                    <div className="mediadiv">
                      <p className="socialMediaName">Pinterest</p>
                      <p className="socialMediacompany">F&B Industry</p>
                    </div>
                    <p className="commonMediaIs tprintstrNumber"> +35.00</p>
                  </div>
                  <div className="commonForSocial">
                    <img className=""  src={linkdin} alt="close-icon" />
                    <div className="mediadiv">
                      <p className="socialMediaName">LinkedIn</p>
                      <p className="socialMediacompany">F&B Industry</p>
                    </div>
                    <p className="commonMediaIs linkdinNumber"> +126.00 </p>
                  </div>
                  </Paper>
                </Grid>
                
                {/* // BAR GRAPH................. */}
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    <div className="circularDiv">
                    <Donut/>
                    </div>
                  </Paper>
                </Grid>
                
                {/* //YOU SAVED THIS YEAR....................... */}
                <Grid item xs={4}>
                  <Paper className={[classes.paper,"lastCard"]}>
                  <div className="lastCardDiv">
                      <p className="lastCardtext1 common">Great Job, You Saved</p>
                      <p className="lastCardtext2 common">270K</p>
                      <p className="lastCardtext3 common">Post Reach This Year</p>
                      <p className="lastCardtext4 common">2020</p>
                  </div>
                  </Paper>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
        </div>
      </div>
    </HomeContainer>
  );
};
export default DahboardMainContainer;
