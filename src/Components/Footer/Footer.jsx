import React from 'react'

export default function Footer() {
  return <>
 <div className="app-footer">
     <div className="footer">
    <div className="footer-content m-4">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4 text-white">
                   <div className="inner">
                     <h3 className='text-uppercase'>location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                   </div>
                </div>
                <div className="col-md-4 text-white">
                   <div className="inner">
                     <h3 className='text-uppercase'>around the web</h3>
                    <div className="icons d-flex justify-content-center gap-2 text-center">
                        <div className="icon">
                            <i className='fa-brands fa-facebook mx-1'></i>
                        </div>
                        <div className="icon">
                            <i className='fa-brands fa-twitter mx-1'></i>
                        </div>
                        <div className="icon">
                            <i className='fa-brands fa-linkedin-in mx-1'></i>
                        </div>
                        <div className="icon">
                            <i className='fa-solid fa-globe mx-1'></i>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-md-4 text-white">
                  <div className="inner">
                      <h3 className='text-uppercase'>about freelancer</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div className="footer-right text-center text-white">
    <p>Copyright © Your Website 2021</p>
  </div>
 </div>
  </>
    
}
