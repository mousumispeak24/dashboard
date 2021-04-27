import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import "./style.css";

const Donut: React.SFC<> = () => {
  return (
    <Box>
      <CircularProgress
        size={`${70}%`}
        value={-70}
        thickness={5}
        variant="static"
        color="primary"
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        marginTop="-54%"
        marginLeft="30%"
        display="flex"
        alignItems="center"
        flexDirection="coloum"
      >
        <Typography variant="caption" 
        className="peiValue"
        component="div" color="textSecondary">{`${Math.round(
         89,
        )}%`}
        <Typography className="paichartText" component="div">Posts Went Viral</Typography>
        </Typography>
      </Box>
    </Box>
  );
};
export default Donut;