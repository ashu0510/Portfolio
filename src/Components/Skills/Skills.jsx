// import React from 'react'
import logo from "../../assets/me.png";

const Contact = () => {
  return (
    <div className="text-white mt-5 min-h-[72.8vh] w-screen h-full p-10 flex items-center ">
      <img className="h-[50vh]" src={logo} alt="Logo" />
      <div>
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          veniam?
        </p>
        <div className="skill">
          <h4>Excel</h4>
          <h4>70%</h4>
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <h4>70%</h4>
          <h4>Power BI</h4>
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: "60%" }}></div>
          </div>
          <h4>70%</h4>
          <h4>SQL</h4>
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
          <h4>50%</h4>
          <h4>Python</h4>
          <div className="progress-bar-background">
            <div className="progress-bar" style={{ width: "60%" }}></div>
          </div>
          <h4>60%</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;



