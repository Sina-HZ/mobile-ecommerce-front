import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AdminProducts from './pages/AdminProductDash';

class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/login' component={Login} exact/>
                <Route path='/dashbord' component={AdminProducts} exact/>
                <Route path='/register' component={Login} exact/>
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default App;