import './App.css';
import React ,{useState,useEffect, Fragment} from 'react'
import Spinner from 'react-bootstrap/Spinner';
import AppBar from './Components/AppBar';
import Asked from './Components/Asked';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Save from './Components/Save';
import SmartCar from './Components/SmartCar';
import Trusted from './Components/Trusted';
import Works from './Components/Works';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  return (
    <section>
    {
        loading?
        <div className='d-flex justify-content-center align-items-center' style={{margin:'20rem'}}>
          <Spinner  animation="grow" role="status"></Spinner>
        </div>
        
      :
      <div>
        <AppBar/>
        <Banner/>
        <SmartCar/>
        <Works/>
        <Save/>
        <Trusted/>
        <Asked/>
        <Footer/>
        <div className='text-center p-2' style={{backgroundColor:'  rgb(245, 240, 240)'}}>©2024 ProGear.com</div>
      </div>
    }  
    
    
    </section>
    
  );
}

export default App;
