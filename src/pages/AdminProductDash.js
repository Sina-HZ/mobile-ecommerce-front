import React from 'react';
import '../assets/styles/App.css';
import CustomizedTables from '../components/materialTable/materialTable';
import { Container, Row, Col } from 'reactstrap';
import TextFields from '../components/materialForm/materialForm';
import { connect } from 'react-redux';
import { firstLoad} from '../redux/actions';
import Header from '../components/header/navbar';
import Axios from 'axios';


class AdminProducts extends React.Component{
 
  componentDidMount(){
    const token = localStorage.getItem('token');
    if(token){
      Axios({
        url : 'http://localhost:3030/api/v1/mobile',
      })
      .then(res => {
        this.props.dispatch(
          firstLoad(res.data)
        );
      })
      .catch(err => {
        console.log(err)
      })
    }else{
      this.props.history.push("/login")
    }
    
  }


  render(){
    const {mobiles} = this.props;
    const {currentMobile} = this.props;
    const {flags} = this.props;
    console.log('current',currentMobile);
    return(
      <React.Fragment>

        <Header route={this.props.history}/>
        <Container>
          <Row className="container" style={{marginTop: '50px',minHeight : '450px'}}>
            <Col sm="12" md={6} id="Admin-Form-Col">
              <TextFields mobiles={mobiles} adminState={this.state} />
            </Col>
            <Col sm="12" md={6} className="Center-items">
              <div className="Image-Container">
              <i className="fas fa-image Img-icon"></i>
              <img className="Image-display" src={currentMobile.ImgPreview} alt="" />
              </div>
            </Col>
          </Row>
              <CustomizedTables 
              mobiles={mobiles} 
              currentMobile={currentMobile} 
              flags={flags}
              handleEdit={this.handleOfEdit}/> 
        </Container>
      </React.Fragment>
      
    );
  }
  
}

const mapStateToProps = state => {
  return {
    mobiles : state.mobiles,
    currentMobile : state.currentMobile,
    flags : state.flags
  }
}

export default connect(mapStateToProps)(AdminProducts);
