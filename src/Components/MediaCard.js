import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import ImageCard from "./ImageCard"

const contentful = require("contentful");
const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "pswo94mknuin",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "4aNCbkAhlMxIboRs-rB6e0w5MgkS2H4h-D7WMffuns4",
});

export default function MediaCard() {
    const [data, setData] = useState([]);
    const fetchData = () => {
        client
            .getEntries() //right function which takes the object - look documentation.
            .then((entries) => {
                setData(entries.items);
                // console.log(entries);
            })
            .catch(console.error); //????? to Martin why we need it here
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>{data && data.map((entry) => { // data ? data.map : <spinner /> -> (for that useState(false))
            console.log(entry)
            return <>
                <div>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="300"
                            img src={entry.fields.image.fields.file.url}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {entry.fields.header}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {entry.fields.mainImageText}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                </div>
            </>
        })}

        </div>
    );
}