import { useRef, useState, useEffect } from 'react';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const icons = ['html', 'css', 'js', 'mongodb', 'nodejs', 'express', 'react'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        { ref: homeRef, id: 'home' },
        { ref: aboutRef, id: 'about' },
        { ref: projectsRef, id: 'projects' },
        { ref: contactRef, id: 'contact' }
      ];

      const current = sections.find(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-2xl py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="text-3xl font-bold tracking-tight">
            <span className="text-cyan-500 hover:text-cyan-400 transition-colors">Hidan</span>
            <span className="text-rose-600 hover:text-rose-500 transition-colors">.Dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(eval(`${item}Ref`))}
                className={`text-lg font-semibold capitalize transition-all duration-300 hover:text-cyan-500 relative group ${
                  activeSection === item ? 'text-cyan-500' : 'text-gray-700'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ${
                  activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none hover:text-cyan-500 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="glass-effect mt-2 mx-4 rounded-2xl shadow-xl">
            <div className="flex flex-col p-6 space-y-4">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(eval(`${item}Ref`))}
                  className={`text-left text-lg font-semibold capitalize transition-colors py-2 ${
                    activeSection === item ? 'text-cyan-500' : 'text-gray-700 hover:text-cyan-500'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Here I am,
                <br />
                <span className="gradient-text">
                  Yogesh Saini
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                A passionate <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Front-end React Developer</span>
              </p>
              <p className="text-lg text-gray-500 flex items-center gap-3">
                <svg className="w-6 h-6 text-cyan-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Deeg, Rajasthan, India</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="icon-float hover:scale-125 transition-all duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={`${icon} icon`}
                    className="w-14 h-14 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-5 pt-6">
              <a
                href="https://www.instagram.com/yogeshsaini_616/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.threads.net/@yogeshsaini_616"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="glow-effect"></div>
            <div className="relative flex items-center justify-center h-[500px]">
              <div className="code-circle">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-bold text-white opacity-90">YS</div>
                    <div className="text-xl text-white/80 font-semibold">Developer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group fade-in-left">
              <div className="card-3d-effect"></div>
              <div className="relative h-[450px] rounded-3xl overflow-hidden glass-card">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                  alt="Coding workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="text-5xl font-bold mb-2">3+</div>
                    <div className="text-xl">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 fade-in-right">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold">
                  About Me
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Crafting Digital
                  <br />
                  <span className="gradient-text">Experiences</span>
                </h2>
              </div>
              
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hello! I'm <span className="font-bold text-gray-900">Yogesh Saini</span>, a web developer based in Deeg, Rajasthan, India. I specialize in building modern web applications using <span className="font-semibold text-cyan-600">HTML, CSS, JavaScript, and React</span>.
                </p>
                <p>
                  I transform innovative ideas into seamless digital experiences. With a strong problem-solving mindset and meticulous attention to detail, I create dynamic, responsive interfaces that users love to interact with.
                </p>
                <p>
                  Constantly evolving with the tech landscape, I'm passionate about clean code, user experience, and bringing creative visions to life. Currently seeking opportunities to kickstart my web development career.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="stat-card">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-gray-600 text-sm">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="text-3xl font-bold gradient-text">7+</div>
                  <div className="text-gray-600 text-sm">Technologies</div>
                </div>
                <div className="stat-card">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-gray-600 text-sm">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4 fade-in-up">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each project represents a unique milestone in my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Ripple', 
                desc: 'A modern social media platform with real-time interactions and sleek UI', 
                link: 'https://ripple-steel.vercel.app/', 
                gradient: 'from-blue-500 via-blue-600 to-cyan-500',
                icon: '💬'
              },
              { 
                name: 'IntelliChat', 
                desc: 'Intelligent web scraping tool with advanced data extraction capabilities', 
                link: 'https://intelli-chat-two.vercel.app/', 
                gradient: 'from-purple-500 via-pink-500 to-red-500',
                icon: '🤖'
              },
              { 
                name: 'Syncy', 
                desc: 'Feature-rich music streaming application with smooth playback', 
                link: 'https://syncy.vercel.app/', 
                gradient: 'from-orange-500 via-red-500 to-pink-500',
                icon: '🎵'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="project-card fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}></div>
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-7xl">{project.icon}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.desc}</p>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
                >
                  View Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4 fade-in-up">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Get In Touch
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 fade-in-up">
            <a
              href="mailto:Ys30371@gmail.com"
              className="contact-card group"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-gray-500 font-medium mb-1">Email</div>
                  <div className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-1">
                    Ys30371@gmail.com
                  </div>
                  <div className="text-sm text-gray-500">Send me an email anytime</div>
                </div>
              </div>
            </a>

            <div className="contact-card">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-gray-500 font-medium mb-1">Location</div>
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    Deeg, Rajasthan
                  </div>
                  <div className="text-sm text-gray-500">India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="inline-flex items-center gap-6 p-6 glass-card rounded-2xl">
              <span className="text-gray-600 font-medium">Find me on:</span>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/yogeshsaini_616/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon-large">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.threads.net/@yogeshsaini_616" target="_blank" rel="noopener noreferrer" className="social-icon-large">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 192 192">
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center space-y-2">
          <p className="text-gray-400">© 2025 Yogesh Saini. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;