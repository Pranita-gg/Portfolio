import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { MdOutlineScience, MdWork, MdSchool, MdCode, MdDesignServices } from "react-icons/md";


const About = () => {
    return (
         <div data-aos="fade-in" data-aos-duration="1000"className='mt-10 bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition'>
                    <h2 className='relative text-3xl font-bold text-gray-800 mb-8 text-center'>
                      <span className='relative z-10 px-4 bg-white'>About me</span>
                      <span className='absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent -z-0'></span>
                    </h2>
                    <div className="space-y-6">
                    
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
        
    );
}

export default About;
