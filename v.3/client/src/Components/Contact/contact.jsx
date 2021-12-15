import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import React from "react";
import GitHub from './github.svg';
import LinkedIn from './linkedin.svg';
import Mail from './mail.svg';
import Phone from './phone.svg';


const useStyles = makeStyles(theme => ({
    Grid: {
        // Tablets+
        [theme.breakpoints.up('md')]: {
        
        },
        // Phones
        [theme.breakpoints.down("sm")]: {
            margin:"2rem"
        },
        spacing:2,
        columns:2,
        justifyContent:"center",
        alignContent:"center"
    },
    Icon:{
        // Tablets+
        [theme.breakpoints.up('md')]: {
            marginLeft: "auto",
            marginRight: "auto",
            width:"18rem",
            margin:'2rem'
        },
        // Phones
        [theme.breakpoints.down("sm")]: {
            margin:"2rem"
        }
    }
  }))

function Contact () {

    const classes = useStyles();

    return(
        <div>
            <Box sx={{ mx: "auto", width:"55rem" }}>
                <Grid container className={classes.Grid}>
                    <Grid item md={6}>
                        <a href="https://www.github.com/maimbrain" rel="noopener">
                            <img src={GitHub} alt="github.com/maimbrain" className={classes.Icon} />
                        </a>
                    </Grid>
                    <Grid item md={6}>
                        <a href="https://www.linkedin.com/in/avery-stahl-916373143/" >
                            <img src={LinkedIn} alt="https://www.linkedin.com/in/avery-stahl-916373143/" className={classes.Icon} />
                        </a>
                    </Grid>
                    <Grid item md={6}>
                        <a href="mailto:averystahl@hotmail.com">
                            <img src={Mail} alt="averystahl@hotmail.com" className={classes.Icon}/>
                        </a>
                    </Grid>
                    <Grid item md={6}>
                        <a href="tel:321-693-3994">
                            <img src={Phone} alt="(321)693-3994" className={classes.Icon}/>
                        </a>
                        
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Contact;