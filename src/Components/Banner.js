import React,{useState} from 'react'
import{Container,Row} from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collection from './Collection';
import Nav from 'react-bootstrap/Nav';


const Banner = () => {
  const [show, setShow] = useState(false);
  return (
      <section>
        <Container fluid>
          <Row>
            <Image style={{position:'relative',height:'100vh'}} src={require('../assets/car.png')} fluid/>
            <Card.ImgOverlay className='d-flex justify-content-center align-items-center'style={{top:'0%',left:'0%',right:'0%',bottom:'0%'}}>
              <div className='text-center'>
              <h5>The smart way to</h5>
              <h1>OWN A CAR</h1>
              <p>All - inclusive Car Subscription</p>
              <Nav.Link href="#" className='bg-dark p-2' style={{borderRadius:'36px',color:'white'}} onClick={()=>setShow(!show)}>Browse cars</Nav.Link>
              <Offcanvas show={show}  onHide={()=>setShow(!show)} placement={'start'}>
              <Offcanvas.Header closeButton>
              <Offcanvas.Title><h1>Pro Gear</h1></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Collection/>
              </Offcanvas.Body>
              </Offcanvas>
              </div>
            </Card.ImgOverlay>
          </Row>
        </Container>
        
        
        
        
      </section>
         
  )
}

export default Banner
