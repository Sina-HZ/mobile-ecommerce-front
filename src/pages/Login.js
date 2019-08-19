import React from 'react';
import { Row, Col } from 'reactstrap';
import SignIn from '../components/signIn/signIn';
import SignUp from '../components/signIn/signUp';


export default class Login extends React.Component {

    render() {
        const redirect = this.props.history;
        console.log('match',this.props.match.path)
        return (
            <div>

                <Row style={{ height: '100vh', width: '100%' }}>
                    <Col sm="12" md={6} style={{ backgroundColor: '#007bff' }} className="d-flex align-items-center">
                        <div style={{ marginLeft: '50px', marginRight: '50px' }}>
                            <h2 style={{ color: '#f7f7f7' }}>
                                Welcome to Mobileee
                            </h2>
                            <div style={{ borderBottom: '4px solid rgba(255,255,255)', width: '40px', display: 'block', marginTop: '15px' }}></div>
                            <h4 style={{ marginTop: '20px', color: '#f7f7f7' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </h4>
                        </div>
                    </Col>

                    <Col id="login-form" sm="12" md={6} className="Center-items" style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                        {(this.props.match.path === "/login") && <SignIn redirect={redirect}/>}
                        {(this.props.match.path === "/register") && <SignUp redirect={redirect}/>}
                    </Col>
                </Row>

            </div>
        )
    }
}