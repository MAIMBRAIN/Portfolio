import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Grid, Box } from '@material-ui/core';

import MemoryGamePic from "./images/MemoryGame.jpg";
import WeatherAppPic from "./images/WeatherApp.png"
import V1_Pic from './images/V1.png';
import V2_Pic from './images/V2.png';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent:'center',
        marginTop: '2.4rem'
    },
    grid:{
        justifyContent:'center',
    },
    gridItem: {
        marginRight: '2rem'
    },
    card: {
        marginBottom: '2rem',
        backgroundColor: '#303030',
        
        [theme.breakpoints.up('lg')]:{
            maxWidth: '30rem',
        },
        [theme.breakpoints.down('lg')]:{
            maxWidth: '24rem',
            marginBottom:'10rem'
        }
    },
    cardPic: {
        [theme.breakpoints.up('lg')]:{
            height: "20rem",
        },
        [theme.breakpoints.down('lg')]:{
            height: "14rem",
        }
        
    },
    cardText: {
        color: "#ECF4F9"
    }
    
}))

function Projects ({match}) {
    const classes = useStyles();


    const projectList = [
        {
            title:"Memory Game",
            image: MemoryGamePic,
            description: "Test your memory by selecting each Pokémon once! Be careful though, every selection shuffles them around. Good Luck!",
            gitURL: "https://github.com/MAIMBRAIN/Clicky-Game",
            viewURL: `${match.url + "/memory_game"}`
        },
        {
            title:"Weather App",
            image: WeatherAppPic,
            description: "Gee, I wonder what the weather is like. Gotta dress correctly today. Don't wanna walk out with shorts on in a blizzard. Get your local forecast!",
            gitURL: "https://github.com/MAIMBRAIN/Weather-App",
            viewURL: `${match.url + "/weather_app"}`
        },
        {
            title:"RedeFinance",
            image: "",
            description: "Having trouble keeping up on your monthly subscriptions and how much you owe? Try out this finance calculator!",
            gitURL: "https://github.com/MAIMBRAIN/RedeFinance",
            viewURL: `${match.url + "/redefinance"}`
        },
        {
            title:"Portfolio V2",
            image: V2_Pic,
            description: "This is the first version I created to display on this domain. I wish I finished it but I'll explain later... Go back in time ->",
            gitURL: "https://github.com/MAIMBRAIN/Clicky-Game",
            viewURL: `${match.url + "/V2"}`
        },
        {
            title:"Portfolio V1",
            image: V1_Pic,
            description: "A very basic layout of what could be a portfolio. This doesn't actually contain any real projects and are just placeholders",
            gitURL: "https://github.com/MAIMBRAIN/RedeFinance",
            viewURL: `${match.url + "/V1"}`
        }
    ];

    const projects = (
        <div>
            <Box>
                <Grid container className={classes.grid}>
                {projectList.map((item, index) => {
                    const {title, image, description, gitURL, viewURL} = item;
                    return(
                        <Grid item className={classes.gridItem} id={index}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                    className={classes.cardPic}
                                    image={image}
                                    title={title}
                                    />
                                    <CardContent className={classes.cardText}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {description}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions className={classes.cardText}>
                                    <Button size="small">
                                        <Link to={{pathname: gitURL}} target="_blank" rel="noreferrer noopener" className={classes.cardText}> View Source Code on GitHub! </Link>
                                    </Button>
                                    <Button size="small">
                                        <Link to={viewURL} target="_blank" rel="noreferrer noopener" className={classes.cardText}> See More in a New Tab! </Link>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
                </Grid>
            </Box>
        </div>
    );

    return(
        <div className={classes.root}>
            {projects}
        </div>
    );
};

export default Projects;