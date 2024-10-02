import { useRef } from 'react';
import reactLogo from './assets/react.svg';
import Lottie from 'react-lottie';
import viteLogo from '/vite.svg';
import './App.css';
import ys from './Images/ys.jpg';
import ast from './Images/3d.jpg'
import logoPng from './Images/logo.png'
import IntelliChatLogo from './Images/lottie.json'
import syncyLogo from './Images/syncy.png'
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const instaRef = useRef(null);
  const threadsRef = useRef(null);
  const icons = ['html', 'css', 'js', 'mongodb', 'nodejs', 'express', 'react'];
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: IntelliChatLogo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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

const handleInsta = () => {
  if (instaRef.current) {
    instaRef.current.style.cursor = 'pointer';
    const path = instaRef.current.querySelector('path');
    if (path) {
       path.style.transition = '0.4s'
      path.style.fill = '#c856af';
    }
  }
}

  const handleInstaOut = () => {
    if (instaRef.current) {
      
      const path = instaRef.current.querySelector('path');
      if (path) {
        path.style.fill = '#000';
      }
    }
  }
const handleThreads = () => {
  if (threadsRef.current) {
    threadsRef.current.style.cursor = 'pointer';
    const path = threadsRef.current.querySelector('path');
    if (path) {
      path.style.transition = '0.4s'
      path.style.fill = '#c856af';
    }
  }
}

  const handleThreadsOut = () => {
    if (threadsRef.current) {
      const path = threadsRef.current.querySelector('path');
      if (path) {
        path.style.fill = '#000';
      }
    }
  }

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
            <div className='socialIcons d-flex'>
            
            <a href='https://www.instagram.com/yogeshsaini_616/?hl=en' target='_blank'><svg onMouseEnter={handleInsta} onMouseLeave={handleInstaOut} ref={instaRef} width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7.90001C11.1891 7.90001 10.3964 8.14048 9.72218 8.59099C9.04794 9.0415 8.52243 9.68184 8.21211 10.431C7.90179 11.1802 7.8206 12.0046 7.9788 12.7999C8.13699 13.5952 8.52748 14.3258 9.10088 14.8992C9.67427 15.4725 10.4048 15.863 11.2001 16.0212C11.9955 16.1794 12.8198 16.0982 13.569 15.7879C14.3182 15.4776 14.9585 14.9521 15.409 14.2779C15.8596 13.6036 16.1 12.8109 16.1 12C16.1013 11.4612 15.9962 10.9275 15.7906 10.4295C15.585 9.93142 15.2831 9.47892 14.9021 9.09794C14.5211 8.71695 14.0686 8.415 13.5706 8.20942C13.0725 8.00385 12.5388 7.8987 12 7.90001ZM12 14.67C11.4719 14.67 10.9557 14.5134 10.5166 14.22C10.0776 13.9267 9.73534 13.5097 9.53326 13.0218C9.33117 12.5339 9.2783 11.9971 9.38132 11.4791C9.48434 10.9612 9.73863 10.4854 10.112 10.112C10.4854 9.73863 10.9612 9.48434 11.4791 9.38132C11.9971 9.2783 12.5339 9.33117 13.0218 9.53326C13.5097 9.73534 13.9267 10.0776 14.22 10.5166C14.5134 10.9557 14.67 11.4719 14.67 12C14.67 12.7081 14.3887 13.3873 13.888 13.888C13.3873 14.3887 12.7081 14.67 12 14.67ZM17.23 7.73001C17.23 7.9278 17.1714 8.12114 17.0615 8.28558C16.9516 8.45003 16.7954 8.57821 16.6127 8.65389C16.43 8.72958 16.2289 8.74938 16.0349 8.7108C15.8409 8.67221 15.6628 8.57697 15.5229 8.43712C15.3831 8.29727 15.2878 8.11909 15.2492 7.92511C15.2106 7.73112 15.2304 7.53006 15.3061 7.34733C15.3818 7.16461 15.51 7.00843 15.6744 6.89855C15.8389 6.78866 16.0322 6.73001 16.23 6.73001C16.4952 6.73001 16.7496 6.83537 16.9371 7.02291C17.1247 7.21044 17.23 7.4648 17.23 7.73001ZM19.94 8.73001C19.9691 7.48684 19.5054 6.28261 18.65 5.38001C17.7522 4.5137 16.5474 4.03897 15.3 4.06001C14 4.00001 10 4.00001 8.70001 4.06001C7.45722 4.0331 6.25379 4.49652 5.35001 5.35001C4.49465 6.25261 4.03093 7.45684 4.06001 8.70001C4.00001 10 4.00001 14 4.06001 15.3C4.03093 16.5432 4.49465 17.7474 5.35001 18.65C6.25379 19.5035 7.45722 19.9669 8.70001 19.94C10.02 20.02 13.98 20.02 15.3 19.94C16.5432 19.9691 17.7474 19.5054 18.65 18.65C19.5054 17.7474 19.9691 16.5432 19.94 15.3C20 14 20 10 19.94 8.70001V8.73001ZM18.24 16.73C18.1042 17.074 17.8993 17.3863 17.6378 17.6478C17.3763 17.9093 17.064 18.1142 16.72 18.25C15.1676 18.5639 13.5806 18.6715 12 18.57C10.4228 18.6716 8.83902 18.564 7.29001 18.25C6.94608 18.1142 6.63369 17.9093 6.37223 17.6478C6.11076 17.3863 5.90579 17.074 5.77001 16.73C5.35001 15.67 5.44001 13.17 5.44001 12.01C5.44001 10.85 5.35001 8.34001 5.77001 7.29001C5.90196 6.94268 6.10547 6.62698 6.36733 6.36339C6.62919 6.09981 6.94355 5.89423 7.29001 5.76001C8.83902 5.44599 10.4228 5.33839 12 5.44001C13.5806 5.33856 15.1676 5.44616 16.72 5.76001C17.064 5.89579 17.3763 6.10076 17.6378 6.36223C17.8993 6.62369 18.1042 6.93608 18.24 7.28001C18.66 8.34001 18.56 10.84 18.56 12C18.56 13.16 18.66 15.67 18.24 16.72V16.73Z" fill="#000"></path> </g></svg>
            </a>
            <a href='https://www.threads.net/@yogeshsaini_616' target='_blank'><svg onMouseEnter={handleThreads} onMouseLeave={handleThreadsOut} ref={threadsRef} aria-label=""  fill="#000" height="34" role="img" viewBox="0 0 192 192" width="35"><title></title><path  d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg></a>
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
              {/* Ripple */}
              <div className="pr">
                <img
                  className="mb-3 hover"
                  src={logoPng} style={{width: '110px', height: '110px'}}
                  alt="project1"
                />
                <a style={{textDecoration: 'none', display: 'block'}} href='https://ripple-steel.vercel.app/' target='_blank' className="blue">Ripple</a>
                <p  className="gray">SocialMedia Platform.</p>
              </div>
              {/* IntelliChat */}
              <div className="pr">
              <Lottie style={{margin: '0.5rem'}}  options={defaultOptions} width={110} height={110} />
                <a style={{textDecoration: 'none', display: 'block'}} href='https://intelli-chat-two.vercel.app/' target='_blank' className="blue">IntelliChat</a>
                <p  className="gray">Web Scrapper</p>
              </div>
              <div className="pr">
                <img
                  className="mb-3 hover"
                  src={syncyLogo} style={{width: '110px', height: '110px'}}
                  alt="project1"
                />
                <a style={{textDecoration: 'none', display: 'block'}} href='https://syncy.vercel.app/' target='_blank' className="blue">Syncy</a>
                <p  className="gray">Music Streaming App.</p>
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
