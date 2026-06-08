import React, { useState } from 'react'

export default function Contact() {

const [formdata, setFormData] = useState({
  userName: "",
  userAge: "",
  userEmail: "",
  userPassword: ""
})

  return <>
  <div className="contact mb-4">
    <div className="contact-content pt-3 container">
      <div className="top-content text-center pt-4">
        <h2 className='text-uppercase fs-1 fw-bold'>contact section</h2>
      </div>
      <div className="mid-content text-center d-flex justify-content-center align-items-center mb-3">
        <div className="line me-3"></div>
        <i className="fa-solid fa-star me-3"></i>
        <div className="line"></div>
      </div>
      <div className="contact-inputs mx-lg-auto mt-5 p-3">
        <form></form>
        <div className="username">
          <label className={formdata.userName ? 'position-relative top-0 show' : ""} htmlFor="userName">userName :</label>
        <input value={formdata.userName} onChange={(e)=> setFormData({...formdata ,userName: e.target.value})} className='form-control border-0 border-bottom py-3' id='userName' placeholder='userName' name='userName' type="text" />
        </div>
        <div className="userage">
          <label className={formdata.userAge ? 'position-relative top-0 show' : ""} htmlFor="userAge">userAge :</label>
        <input value={formdata.userAge} onChange={(e)=> setFormData({...formdata, userAge: e.target.value})} className='form-control border-0 border-bottom py-3' id='userAge' placeholder='userAge' name='userAge' type="text" />
        </div>
        <div className="useremail">
          <label className={formdata.userEmail ? 'position-relative top-0 show' : ""} htmlFor="userEmail">userEmail :</label>
        <input value={formdata.userEmail} onChange={(e)=> setFormData({...formdata, userEmail: e.target.value})} className='form-control border-0 border-bottom py-3' id='userEmail' placeholder='userEmail' name='userEmail' type="email" />
        </div>
        <div className="userpassword">
          <label className={formdata.userPassword ? 'position-relative top-0 show' : ""} htmlFor="userPassword">userPassword :</label>
        <input value={formdata.userPassword} onChange={(e)=> setFormData({...formdata, userPassword: e.target.value})} className='form-control border-0 border-bottom py-3' id='userPassword' placeholder='userPassword' name='userPassword' type="password" />
        </div>
        <button className='btn text-white mt-4'>send Message</button>
      </div>
    </div>
  </div>
  
  </>
}
