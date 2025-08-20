import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { MdOutlineScience, MdWork, MdSchool, MdCode, MdDownload } from "react-icons/md";
import { SiRedux, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiGit, SiFigma } from "react-icons/si";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-6xl mx-auto'>
          {/* Hero Section */}
          <div className='text-center mb-16 mt-10' data-aos="fade-down">
            <div className='flex justify-center mb-6'>
              <div data-aos="fade-right" data-aos-delay="300" className='relative'>
                <div className="relative overflow-hidden rounded-full">
                  <img 
                    src="Profile.jpg"
                    className='w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-xl transition-all duration-500 hover:scale-105'
                    alt="Pranita Tamang"
                  />
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse'></div>
                </div>
                <div className='absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-full shadow-lg'>
                  <MdCode className='text-xl' />
                </div>
              </div>
            </div>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-4' data-aos="fade-up" data-aos-delay="400">
              Hi, I'm <span className='text-blue-600'>Pranita Tamang</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-700 mb-6' data-aos="fade-up" data-aos-delay="500">Frontend Developer & UI/UX Designer</p>
            <p className='text-lg max-w-2xl mx-auto text-gray-600 leading-relaxed' data-aos="fade-up" data-aos-delay="600">
              I build beautiful, responsive, and accessible web applications with modern technologies. Passionate about creating exceptional user experiences and clean, maintainable code.
            </p>
          </div>

          {/* About Section */}
          <div className='mb-16 bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500' data-aos="fade-up" data-aos-delay="200">
            <h2 className='relative text-3xl font-bold text-gray-800 mb-8 text-center'>
              <span className='relative z-10 px-4 bg-white inline-block'>About Me</span>
              <span className='absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent -z-0'></span>
            </h2>
            <div className="space-y-8">
              {/* Profession */}
              <div className="flex items-start space-x-6" data-aos="fade-right" data-aos-delay="100">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg flex-shrink-0 mt-1">
                  <MdWork className="text-2xl" />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow w-full hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-800">Senior Frontend Developer</h3>
                  <p className="text-gray-700 font-medium">TechCorp Inc.</p>
                  <p className="text-sm text-gray-500 italic">2021 – Present • 3 years</p>
                  <p className="text-gray-600 mt-3">Leading React development for enterprise applications with 500k+ users. Implemented performance optimizations that reduced load times by 40%.</p>
                </div>
              </div>

              {/* Study */}
              <div className="flex items-start space-x-6" data-aos="fade-left" data-aos-delay="200">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg flex-shrink-0 mt-1">
                  <MdSchool className="text-2xl" />
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow w-full hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-800">BSc Computer Science</h3>
                  <p className="text-gray-700 font-medium">State University</p>
                  <p className="text-sm text-gray-500 italic">2017 – 2021 • Graduated with Honors</p>
                  <p className="text-gray-600 mt-3">Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on "Optimizing React Component Architecture for Large-Scale Applications".</p>
                </div>
              </div>
              
              {/* Contributor */}
              <div className='flex items-start space-x-6' data-aos="fade-right" data-aos-delay="300">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg flex-shrink-0 mt-1">
                  <MdOutlineScience className='text-2xl' />
                </div>
                <div className='bg-gray-50 p-6 rounded-xl shadow w-full hover:shadow-md transition-all duration-300'>
                  <h3 className='text-xl font-semibold text-gray-800'>Open Source Contributor</h3>
                  <p className='text-gray-700 font-medium'>Various Projects</p>
                  <p className='text-sm text-gray-500 italic'>2020 - Present</p>
                  <p className='text-gray-600 mt-3'>Contributed to React libraries with 10k+ weekly downloads. Maintained popular UI component library with 2.5k stars on GitHub.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resume Section */}
          <div className='flex justify-center mb-16' data-aos="zoom-in" data-aos-delay="400">
            <a
              href="/My Cv (1) (5).pdf"
              className='px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
            >
              <MdDownload className="text-xl" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Skills Section */}
          <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <h2 className='text-3xl font-bold text-gray-800 text-center mb-10'>Skills & Technologies</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {[
                { icon: <SiJavascript className='text-yellow-500 text-5xl' />, name: 'JavaScript', delay: 100 },
                { icon: <SiTypescript className='text-blue-600 text-5xl' />, name: 'TypeScript', delay: 200 },
                { icon: <SiReact className='text-blue-400 text-5xl' />, name: 'React.js', delay: 300 },
                { icon: <SiRedux className='text-purple-500 text-5xl' />, name: 'Redux', delay: 400 },
                { icon: <SiNodedotjs className='text-green-600 text-5xl' />, name: 'Node.js', delay: 500 },
                { icon: <SiTailwindcss className='text-cyan-500 text-5xl' />, name: 'Tailwind CSS', delay: 600 },
                { icon: <SiGit className='text-orange-600 text-5xl' />, name: 'Git', delay: 700 },
                { icon: <SiFigma className='text-purple-600 text-5xl' />, name: 'Figma', delay: 800 },
              ].map((skill, index) => (
                <div 
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group'
                  data-aos="zoom-in"
                  data-aos-delay={skill.delay}
                >
                  <div className='mb-4 transform group-hover:scale-110 transition-transform duration-300'>{skill.icon}</div>
                  <h4 className='text-lg font-semibold text-gray-800'>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;