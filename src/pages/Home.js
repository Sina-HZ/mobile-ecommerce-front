import React from 'react';
import { Container, Row, } from 'reactstrap';
import SlideShow from '../components/SlideShow/slideShow'
import Axios from 'axios';
import MobileCard from '../components/card/cards';
import Header from '../components/header/navbar';
import Footer from '../components/footer/footer';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileList: []
        }
    }


    componentDidMount() {
        Axios({
            url: 'http://localhost:3030/api/v1/mobile',
            method: 'get'
        }).then(res => {
            console.log('mobileList res', res.data);
            this.setState({
                mobileList: res.data
            })
        }
        );
    }
    render() {
        console.log('mobileList', this.state.mobileList);
        return (
            <React.Fragment>
                <Header route={this.props.history}/>
                <SlideShow />
                <Container>
                    <Row style={{ width: '100%' , marginTop : '45px'}}>
                        <div className="d-flex flex-wrap">
                            {this.state.mobileList.map(mobile => (

                                <MobileCard key={mobile._id} mobile={mobile} />
                            ))}
                        </div>
                    </Row>
                </Container>
                <Footer />
            </React.Fragment>
        )
    }
}