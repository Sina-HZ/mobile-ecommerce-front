import React from 'react';
import {Container,Row,Col} from 'reactstrap';
import '../../assets/styles/footer.css';



export default function Footer() {

  return (
    <div className="mt-5 py-5" style={{backgroundColor : '#3f51b5'}}>
        <Container>
            <Row>
                <Col md={3} sm={12}>
                    <h3 className="text-light">Mobilee</h3>
                    <p className="text-light">buy mobile easily</p>
                    <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                </Col>
                <Col md={3} sm={12}>
                    <h3 className="text-light">Features</h3>
                    <p className="text-light">Waranty</p>
                    <p className="text-light">Free shiping</p>
                    <p className="text-light">Qualify</p>
                </Col>
                <Col md={3} sm={12}>
                    <h3 className="text-light">Links</h3>
                    <p className="text-light">Home</p>
                    <p className="text-light">About</p>
                </Col>
                <Col md={3} sm={12}>
                    <h4 className="text-light">Contact</h4>
                    <p className="text-light">+98 (021) 2244 24 34</p>
                    <i className="fab fa-telegram"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-facebook-square"></i>
                </Col>
            </Row>
        </Container>
    </div>
  );
}