import React from "react";
import "./Homepage.css"

const Homepage = ({setLoginUser}) => {
    return(
    <div style={{width:"100%",height:"100vh",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundImage:"url('https://1.bp.blogspot.com/-euThSXotUks/YK6OtpyO0DI/AAAAAAAAAZ0/z45EQHNIX1IritqFHQTEvShYADqwH1oWQCLcBGAsYHQ/s1920/dac.png')"}}>

    
        <div className="homepage">
            <h1>Book a Cylinder </h1>
            <div>-----------------------------------------</div>
            {/* <h4><i>Will be delievered in next 2 days</i></h4> */}
            
            <div className="button" onClick={()=>alert("Booked, Will be delievered in next 2 days \nThank You for Booking!")}>Confirm Booking</div>
        </div>
        </div>
    )
}

export default Homepage