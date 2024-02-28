import React from 'react'


const Browers = () => {
  return (
    <section>
    <div className="d-flex justify-content-center align-items-center pb-3">
        <img src={require('../assets/Footer.png')}/>
        <h2> ProGear</h2>   
    </div>
    <div className="d-flex justify-content-center align-items-center pb-4">
        <img src={require('../assets/car3.jpg')} width={400}/>  
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{color:'red'}}>
        <h4>SUBSCRIPTION a CAR and</h4>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <h4>SAVE 2 LAKH</h4>   
    </div>
    <div className="d-flex justify-content-center align-items-center" style={{color:'red'}}>
        <h6>0% Down Payment</h6>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Tax Benefits - Flexible security desposit & tenure</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Insurance coverage - Hassie free maintenance</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center">
        <p>Depreciation escaped & more</p>   
    </div>
    <div className="d-flex justify-content-center align-items-center pt-5">
        <h5>For more info: +91 9500707437</h5>   
    </div> 
    </section>
  )
}

export default Browers
