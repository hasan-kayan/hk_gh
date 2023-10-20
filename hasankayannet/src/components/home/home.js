import React from 'react';
import './home.css'; // Import your CSS file for styling
import myImage from './MySpace.png'

function Home() {
    return (
      <div className="home">
        <div className="hero">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I am Hasan. I am a Fullstack Developer. In this page you can see my latest projects, working topics, contact and more.</p>
        </div>
        <div className='explain'>
          <h2>What I do?</h2>
          <img src={myImage} alt="My Space" className="circular-image" /> {/* Add className */}
          <p>I am a Fullstack Developer. I can develop web sites and web applications. I can use React, Nodejs, Express, MongoDB, HTML, CSS, Javascript, Bootstrap, Material UI, Git, Github, Golang, Python, Django, Flask, Firebase, Postman, AWS Management, Google Cloud and more.</p>
        </div>
        <div className='container'>
            <div className='box box1'>
                <p>Box 1</p>
            </div>
            <div className='box box2'>
                <p>Box 2</p>
            </div>
            <div className='box box3'>
                <p>Box 3</p>
            </div>
        </div>
      </div>

    );
}

export default Home;
