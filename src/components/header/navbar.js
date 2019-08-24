import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  link: {
    textDecoration : 'none',
    color: 'inherit',
    '& :hover':{
      textDecoration : 'none',
      color: 'inherit',
    }
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const login = localStorage.getItem('token');
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  
  function handleClose() {
    setAnchorEl(null);
  }

  
  const handleLogout = e =>{
    const token = localStorage.getItem('token');
    Axios({
      url : 'http://localhost:3030/api/v1/logout',
      method : 'post',
      data : token
    }).then(res => {
      localStorage.removeItem('token');
      props.route.push("/");
    })
  }

  return (
    <div className={classes.grow} data-uk-sticky="top: 100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
      <AppBar position="static">
        <Toolbar className="flex-row-reverse container justify-content-between">
            <div>
                <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </MenuIcon>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem className={classes.link} onClick={handleClose}>{ login ? <Link to="/dashbord">My profile</Link> : <Link className={classes.link} to="/login">Sign in</Link> }</MenuItem>
                    <MenuItem className={classes.link}>{ login ? <p onClick={handleLogout}>logout</p> : <Link className={classes.link} to="/register">Sign up</Link> }</MenuItem>
                </Menu>
            </div>
            <h3 ><Link to="/" style={{color : 'white', textDecoration : 'none'}}>Mobilee</Link></h3>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}