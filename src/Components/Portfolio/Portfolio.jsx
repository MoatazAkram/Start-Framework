import React, { useEffect, useState } from "react";
import port1 from "../../assets/poert1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";

export default function Portfolio() {
  const [selectedimage, setSelectedImage] = useState(null);
  const images = [port1,port2,port3,port1,port2,port3]

  useEffect(()=>{
    const handleEsc = (e)=>{
      if(e.key == 'Escape'){
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)

    return ()=>
      window.removeEventListener("keydown",handleEsc)
    
  }, [])

  return (
    <>
      <div className="portfolio mb-4">
        <div className="portfolio-content text-center pt-4">
          <div className="top-content">
            <h2 className="text-uppercase pt-4 fs-1 fw-bold">
              portfolio component
            </h2>
          </div>
          <div className="mid-content d-flex justify-content-center align-items-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star me-3"></i>
            <div className="line me-3"></div>
          </div>
          <div className="bottom-content">
            <div className="container">
              <div className="row g-md-5 g-sm-2">
               {images.map((img, index)=>{
                 return <div className="col-lg-4 col-md-6">
                  <div
                    onClick={() => {
                      setSelectedImage(img)
                    }}
                    className="inner position-relative rounded-3 overflow-hidden"
                  >
                    <img className="w-100 rounded-3" src={img} alt="port1" />
                    <div className="layer position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">
                      <i className="text-white fa-solid fa-plus fa-6x"></i>
                    </div>
                  </div>
                </div>
               })}
              </div>
            </div>
          </div>
        {selectedimage ?  <div onClick={()=>{
          setSelectedImage(null)
        }} className="overlay bg-primary  bg-opacity-25 position-fixed w-100 h-100  start-0 top-0 d-flex align-items-center justify-content-center">
              <div onClick={(e)=> e.stopPropagation()} className="image-box">
                <img src={selectedimage} alt="" />
              </div>
            </div> : null}
        </div>
      </div>
    </>
  );
}
