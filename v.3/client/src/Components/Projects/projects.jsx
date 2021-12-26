import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, makeStyles, Typography, Grid } from '@material-ui/core';

import MemoryGamePic from "./MemoryGame.jpg";


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        marginRight: "1rem"
    },
    card: {
        maxWidth: '30rem',
        marginBottom: '2rem',
        backgroundColor: '#303030',
    },
    cardPic: {
        height: "20rem",
        // width: "200px",
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
            description: "Test your memory by selecting each Pokémon once! Be careful though, every selection shuffles them around. Good Luck",
            gitURL: "https://github.com/MAIMBRAIN/Clicky-Game",
            viewURL: `${match.url + "/memory_game"}`
        },
        {
            title:"RedeFinance",
            image: "",
            description: "Having trouble keeping up on your monthly subscriptions and how much you owe? Try out this finance calculator!",
            gitURL: "https://github.com/MAIMBRAIN/RedeFinance",
            viewURL: `${match.url + "/redefinance"}`
        }
    ];

    const projects = (
        <div>
            <Grid container>
            {projectList.map((item, index) => {
                const {title, image, description, gitURL, viewURL} = item;
                return(
                    <Grid item xs={12}>
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
        </div>
    );

    return(
        <div className={classes.root}>
            {projects}
        </div>
    );
};

export default Projects;