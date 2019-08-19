import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles({
    card: {
        maxWidth: 255,
        margin: 8
    },
    media: {
        height: 200,
        width: 200
    },
});

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '4px 6px',
        border: '1px solid',
        borderRadius: '4px',
        lineHeight: 1.5,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

export default function MobileCard(props) {
    const classes = useStyles();
    const { mobile } = props;
    return (
        <Grow in={true}>

        <Card className={classes.card} key={mobile._id}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={mobile.image}
                    title={mobile.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {mobile.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                     </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <BootstrapButton size="small" variant="contained" color="primary">
                    Buy
                 </BootstrapButton>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </Grow>
    );
}