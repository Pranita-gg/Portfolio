import React from 'react';
import { Link } from "react-router-dom";
import { MdOutlineScience, MdWork, MdSchool, MdCode, MdDesignServices } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiJavascript, SiTypescript, SiReact, SiNodedotjs,SiGit, SiFigma} from "react-icons/si";


const Home = () => {
  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto'>
          {/* Hero Section */}
          <div className='text-center mb-16 mt-10'>
            <div className='flex justify-center mb-6'>
              <div className='relative'>
                <img
                  src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                  className='w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg'
                />
                <div className='absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full'>
                  <MdCode className='text-xl' />
                </div>
              </div>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Hi, I'm <span className='text-blue-600'>Pranita Tamang</span>
            </h1>
            <p className='text-xl text-gray-600 mb-6'>Frontend Developer | UI UX</p>
            <p className='text-md mx-auto text-gray-500'>
              I build beautiful, responsive, and accessible web applications with modern technologies. Passionate about creating user experiences and clean code.
            </p>
          </div>

          {/* About Section */}
          <div className='mb-12 bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition'>
            <h2 className='relative text-3xl font-bold text-gray-800 mb-8 text-center'>
              <span className='relative z-10 px-4 bg-white'>About me</span>
              <span className='absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent -z-0'></span>
            </h2>
            <div className="space-y-6">
              {/* Profession */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-blue-600 text-white">
                  <MdWork className="text-xl" />
                </div>
                <div className="bg-white p-4 rounded-xl shadow w-full hover:bg-gray-100 transitions">
                  <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
                  <p className="text-gray-700">TechCorp Inc.</p>
                  <p className="text-sm text-gray-500 italic">2021 – Present • 3 years</p>
                  <p className="text-gray-600 mt-1">Leading React development for enterprise applications with 500k+ users.</p>
                </div>
              </div>

              {/* Study */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-green-500 text-white hover:bg-gray-100 transitions">
                  <MdSchool className="text-xl" />
                </div>
                <div className="bg-white p-4 rounded-xl shadow w-full hover:bg-gray-100 transitions">
                  <h3 className="text-lg font-semibold">BSc Computer Science</h3>
                  <p className="text-gray-700">State University</p>
                  <p className="text-sm text-gray-500 italic">2017 – 2021 • Graduated with Honors</p>
                  <p className="text-gray-600 mt-1">Specialized in Human-Computer Interaction and Web Technologies.</p>
                </div>
              </div>
              {/* Contributor */}
              <div className='flex items-start space-x-4'>
                <div className="p-3 rounded-full bg-purple-400 text-white">
                  <MdOutlineScience className='text-xl' />
                </div>

                <div className='bg-white p-4 rounded-xl shadow w-full hover:bg-gray-100 '>
                  <h3 className='text-lg font-semibold'>Open Source Contributor</h3>
                  <p className='text-gray-700'>Various Projects</p>
                  <p className='text-sm text-gray-500 italic'>2020 - Present</p>
                  <p className='text-gray-600 mt-1 '>Contributed to React libraries with 10k + weelky downloads.</p>

                </div>
              </div>
            </div>
          </div>



          {/* Skills */}
          <section className='mx-auto py-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
              <SiJavascript className='text-yellow-500 text-4xl mx-auto mb-2' />
              <h4 className='text-lg font-semibold'>JavaScript</h4>
            </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiTypescript className='text-blue-600 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>TypeScript</h4>
    </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiReact className='text-blue-300 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>React.js</h4>
    </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiRedux className='text-purple-400 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>Redux</h4>
    </div>

    <div className='bg-white p-4 rounded-lg shadow hover:shadow:lg transition hover:scale-105 text-center'>
      <SiNodedotjs className='text-green-400 text-4xl mx-auto mb-2'/>
      <h4 className='text=lg font-semibold'>Node.js</h4>
    </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiTailwindcss className='text-blue-300 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>Tailwind CSS</h4>
    </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiGit className='text-orange-400 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>Git</h4>
    </div>
    <div className='bg-white p-4 rounded-lg shadow hover:shadow-lg transition hover:scale-105 text-center'>
      <SiFigma className='text-purple-400 text-4xl mx-auto mb-2'/>
      <h4 className='text-lg font-semibold'>Figma</h4>
    </div>


          </section>

        </div>
      </div>
    </>
  );
};

export default Home;
