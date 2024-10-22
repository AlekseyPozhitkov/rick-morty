import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 230 }}>
            <CardMedia
                sx={{ height: 144 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Rick
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Human
                </Typography>
            </CardContent>
        </Card>
    );
}