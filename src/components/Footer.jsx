import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook,FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-8'>
            <div className='container mx-auto px-4 '>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* About */}
                    <div className='space-y-4 '>
                        <h3 className='text-lg font-semibold '>About us</h3>
                        <p className='text-gray-300 text-sm '>We create innovative web solutions to help business grow in the digital world.</p>
                        <div className='flex space-x-4 '>
                            <a className="text-gray-300 hover:text-white transition flex space-x-2">
                                <FaGithub className='text-xl ' />
                                <FaLinkedin className='text-xl' />
                                <FaTwitter className='text-xl' />
                                <FaFacebook className='text-xl' />
                            </a>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className='space-y-4 text-lg font-semibold'><h3>Quick Links</h3>
                    <ul className='space-y-2 '>
                        <li><Link className= "text-gray-300 hover:text-white text-sm "to="/">Home</Link></li>
                        <li><Link className= "text-gray-300 hover:text-white text-sm "to="/about">About</Link></li>
                        <li><Link className= "text-gray-300 hover:text-white text-sm "to="/contact">Contact</Link></li>
                        <li><Link className= "text-gray-300 hover:text-white text-sm "to="/projects">Projects</Link></li>
                    </ul>
                        
                    </div>
                    {/* Contact */}
                    <div className='space-y-4 font-semibold text-lg'>
                        <h3>Contact us</h3>
                    <div className='space-y-2 text-sm text-gray-300 '>
                  <div className='flex items-start'>
                <FaEnvelope className='mt-1 mr-2 flex-shrink-0'/> 
               <span>ghisingpranita051@gmail</span>

            </div>
            <p>Location: Imadol</p>
            <p>Phone: 9828810944</p>
                    </div>
                    </div>
                    {/* Newsletter */}
                     <div className='space-y-4 font-semibold text-lg'>
                        <h3>News Letter</h3>
                        <p className='text-gray-300 text-sm'>Subscribe to our newsletter for the latest updates.</p>
                        <form className='flex '>
                            <input type="email" placeholder='Your Email' className='px-3 py-2 text-sm text-gray-800 rounded-md focus:outline-none w-full'/>
                            <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transitions'>Subscribe</button>
                        </form>
                        </div>

                </div>
                {/* button bar */}
                <div className='border-t border-gray-700 mt-8 pt-6 text-sm '>
                    <div className='flex md:flex-row justify-between items-center '>
                        <p className='text-gray-400 mb-4 md:mb-0 '>&copy; {new Date().getFullYear()} Pranita.All Rights Reserverd</p>
<div className='flex space-x-4 '>
    <Link to='/' className='text-gray-400 hover:text-white transitions'>Privacy Policy</Link>
    <span className='text-gray-400'> |</span>
     <Link to='/' className='text-gray-400 hover:text-white transitions'>Terms of Service</Link>
    <span className='text-gray-400'> |</span>
     <Link to='/' className='text-gray-400 hover:text-white transitions'>Contact us</Link>
  
    
    
</div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
