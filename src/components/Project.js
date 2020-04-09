import React from "react";
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia, CardActions, Button } from "@material-ui/core"

function Project(props) {
    return (
          <Grid item lg={4} md={5} sm={7}>
            <Card className="card project">
              <a href={props.appLink} target="_blank" rel="noopener noreferrer">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={props.name}
                    image={props.image}
                    title={props.name}
                    className="cardMedia"
                  />
                  <CardContent className="text-center">
                    <Typography gutterBottom variant="h5" component="h2" className="cardTitle">
                      {props.name}
                </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{ minHeight: "40px" }}>
                      {props.description}
                </Typography>
                  </CardContent>
                </CardActionArea></a>
              <CardActions style={{ justifyContent: 'center' }}>
                <a href={props.gitHubLink} target="_blank" rel="noopener noreferrer"><Button size="small" color="primary">
                  GitHub Repository
              </Button></a>
              </CardActions>
            </Card>
          </Grid>
    )
}

export default Project;