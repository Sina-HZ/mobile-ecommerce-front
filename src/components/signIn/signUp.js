import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Axios from 'axios';

const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
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


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignContent: 'center'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 280,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
        borderRadius: 30,
        marginTop: 60,

    },
    buttonColor: {
        backgroundColor: '#0080ff',
    }
}));


export default function SignUp(props) {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        family: '',
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleSubmit = e =>{
        Axios({
            url : 'http://localhost:3030/api/v1/register',
            method : 'post',
            data : {
                name : values.name,
                family : values.family,
                email : values.email,
                password : values.password
            }
        }).then(res => {
            localStorage.setItem('token',res.data.token);
            props.redirect.push("/");
            console.log('res register',res.data);
            console.log('signup props',props)

        })
    }

    return (
        <div className={classes.container}>
            <h1 style={{ textAlign: 'center', color: '#444444' }}>Sign up</h1>
            <div style={{ borderBottom: '4px solid rgba(0,123,255)', width: '40px', display: 'block', marginRight: 'auto', marginLeft: 'auto', marginTop: '15px' }}></div>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="family"
                    label="family"
                    className={classes.textField}
                    value={values.family}
                    onChange={handleChange('family')}
                    margin="normal"
                />
                <TextField
                    required
                    id="email"
                    label="email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange('email')}
                    margin="normal"
                />
                <TextField
                    required
                    id="password"
                    label="password"
                    type="password"
                    className={classes.textField}
                    value={values.password}
                    onChange={handleChange('password')}
                    margin="normal"
                />
                <BootstrapButton variant="contained" onClick={handleSubmit} color="primary" className={classes.button}>
                    Register
      </BootstrapButton>
            </form>
        </div>
    );
}