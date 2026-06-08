import React from 'react'
import avatar from "../../assets/avataaars (1).svg"

export default function Home() {
  return <>
  <div className="home">
    <div className="home-content  d-flex flex-column justify-content-center align-items-center text-white">
        <div className="top-content">
            <img src={avatar} alt="avatar" />
        </div>
        <div className="mid-content">
            <h2 className='text-uppercase fs-1 mb-3 fw-bold'>start framework</h2>
            <div className="mid-style text-center d-flex align-items-center justify-content-center mb-3">
                <div className="line me-3"></div>
                <i className='fa-solid fa-star me-3'></i>
                <div className="line me-3"></div>
            </div>
        </div>
        <div className="bottom-content">
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
  </div>
  </>
    
  
}
