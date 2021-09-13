import React from "react";

import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';

import MemoryGamePic from "../../Images/MemoryGame.jpg";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        marginRight: "1rem"
    },
    // card: {
    //     height: 360
    // },
    media: {
        height: 480
    },
    
}))

function Projects ({match}) {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={MemoryGamePic}
                    title="Memory Game"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Memory Game
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Test your memory by selecting each Pokémon once! Be careful though, every selection shuffles them around. Good Luck!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link to={{pathname: "https://github.com/MAIMBRAIN/Clicky-Game"}} target="_blank"> View Source Code on GitHub! </Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link to={match.url + "/memory_game"} target="_blank"> See More in a New Tab! </Link>
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default Projects;