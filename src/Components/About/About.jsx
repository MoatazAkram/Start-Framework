import React from "react";

export default function About() {
  return (
    <>
      <div className="about">
        <div className="about-content d-flex justify-content-center align-items-center flex-column text-white">
          <div className="top-content pt-4">
            <h2 className="text-uppercase fw-bold fs-1 mb-3">about component</h2>
          </div>
          <div className="mid-content d-flex align-items-center justify-content-center mb-3">
            <div className="line me-3"></div>
            <i className="fa-solid fa-star me-3"></i>
            <div className="line me-3"></div>
          </div>
          <div className="bottom-content">
            <div className="container">
              <div className="row px-5">
                <div className="col-md-6 ps-md-5 mb-3">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
                <div className="col-md-6 pe-5">
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
