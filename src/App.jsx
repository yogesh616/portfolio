import { useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ys from './Images/ys.jpg';
import ast from './Images/3d.jpg'
import logoPng from './Images/logo.png'
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const icons = ['html', 'css', 'js', 'mongodb', 'nodejs', 'express', 'react'];

  const handleHome = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAbout = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjects = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <nav className="fix navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between px-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">
            <span style={{ color: '#17F7D5' }}>Hidan</span>
            <span style={{ color: '#B90028' }}>.Dev</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <div className="links d-flex justify-content-center align-items-center gap-5 fs-2">
              <button className="btn nav-link" onClick={handleHome}>Home</button>
              <button className="btn nav-link" onClick={handleAbout}>About</button>
              <button className="btn nav-link" onClick={handleProjects}>Projects</button>
              <button className="btn nav-link" onClick={handleContact}>Contact</button>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            </div>
          </div>
        </div>
      </nav>


      <div className='gear text-center '><i className="fa-solid fa-gear st"></i>
      </div>

      <div ref={homeRef} className="container-fluid m-auto wide media">
        <div className="d-flex justify-content-between align-items-center px-5  same">
          <div className="d-flex flex-column text">
            <h1 className="fs-1 my-4 header">Here I am, Yogesh Saini</h1>
            <p className="fs-3 text-secondary-emphasis ">A passionate Front-end React Developer based in</p>
            <p className="fs-3">Deeg, Rajasthan, India</p>
            <div className="buttons d-flex gap-3 pe-auto mt-3 text-center">
              {icons.length > 0 ? (
                icons.map((icon, index) => (
                  <img
                    key={index}
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={`${icon} icon`}
                  />
                ))
              ) : (
                <span>No icons available</span>
              )}
            </div>
          </div>
          <div className='splash'>
          <div className="img ">
            {/* <img src='https://zoyothemes.com/queue/layout/images/home/home.png'/> */}
          </div>
          </div>
        </div>
      </div>


      {/* About */}
      <div ref={aboutRef} className="wide ">
        <div className=" d-flex justify-content-center align-items-center gap-5">
          <img
            className="about-img same"
            src={ast}
            alt="About"
          />
          <div className="d-flex flex-column justify-content-center align-items-center gap-3 same">
            <h2 className='test'>About Me</h2>
            <p className="about-text">Web Developer with a Passion for Crafting Digital Experiences.</p>
            <div className="desc">
              <p>
                Hello! I'm Yogesh Saini, a web developer in Deeg, Rajasthan, India, specializing in HTML, CSS, JavaScript, and React.
                I love turning ideas into seamless digital experiences.
                With a problem-solving mindset, attention to detail, and expertise in React, I create dynamic and responsive interfaces.
                Passionate about staying updated in the ever-evolving tech landscape, I'm currently seeking opportunities to launch my web development career.
                Explore my portfolio, and let's connect to discuss how I can contribute to your projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div ref={projectsRef} className="wide" style={{ background: '#f8f9fa' }}>
        <div className="container same">
          <div className="project d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className='same test'>Projects</h1>
            <p className="mb-5">Each Project Uniquely Defines My Development Journey</p>
            <div className="projects d-flex gap-3">
              <div className="pr">
                <img
                  className="mb-3 hover"
                  src={logoPng} style={{width: '110px', height: '110px'}}
                  alt="project1"
                />
                <a  href='https://ripple-steel.vercel.app/' className="blue">Ripple</a>
                <p  className="gray">SocialMedia Platform.</p>
              </div>
              <div className="pr">
                <img
                  className="mb-3 hover"
                  src="https://cdn4.iconfinder.com/data/icons/wonderful-christmas-3d-1/128/4._Santa_1024.png"
                  alt="project2"
                />
                <p className="blue">Web Development</p>
                <p className="gray">With lots of unique blocks, you can easily build a page without coding.</p>
              </div>
              <div className="pr">
                <img
                  className="mb-3 hover"
                  src="https://cdn4.iconfinder.com/data/icons/wonderful-christmas-3d-1/128/4._Santa_1024.png"
                  alt="project3"
                />
                <p className="blue">Web Development</p>
                <p className="gray">With lots of unique blocks, you can easily build a page without coding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Contact*/}
      <div className='wide ' ref={contactRef}>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
            <h1 className='same test'>Contact Me</h1>
            <p className='mb-5 fs-4 text-secondary-emphasis'>I'd love to connect! Send me a message, and let's talk!</p>
           <div className='d-flex flex-row gap-4'>

            <div className='d-flex justify-content-center align-items-center gap-3 contact-detail p-4'>
              <img className='gmail' src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-256.png' />
              <a className='mail' href="mailto:ys30371@gmail.com">Ys30371@gmail.com</a>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3'>
              <img className='gmail' src='https://cdn4.iconfinder.com/data/icons/miu-flat-social/60/location-512.png' />
              <span className='fs-4' style={{color:'rgb(147, 82, 208)'}}>Deeg, Rajasthan, India</span>
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
