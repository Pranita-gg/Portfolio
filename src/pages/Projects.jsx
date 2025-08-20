import React, { use, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { projects } from '../data/Projectdata';
import { useEffect } from 'react';

const Projects = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        Aos.init({ duration: 1000 });
        return () => clearTimeout(timer);
    }
    );

    return (
        <div className='py-10 px-5 bg-gray-50 mt-8'>
            <h2 data-aos="fade-up" className='text-3xl font-bold text-center mb-8 '>My Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    loading ? Array(3).fill(0).map((_, index) => (
                        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                            <Skeleton height={120} /> {/* image skeleton */}
                            <Skeleton height={20} style={{ marginTop: 10 }} /> {/* title */}
                            <Skeleton count={2} style={{ marginTop: 10 }} /> {/* description */}
                        </div>
                    ))
                        :
                        projects.map((project) => (
                            <div data-aos="zoom-in" key={project.id}
                                className='bg-white rounded-xl shadow-md overflow:hidden transform transition hover:scale-105 hover:shadow-xl'>
                                <img src={project.image}
                                    className='w-full h-48 object-cover' />
                                <div className='p-5 '>
                                    <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                                    <p className='text-gray-600 mb-3 '>{project.description}</p>
                                    <p className='text-sm text-gray-500 mb-3 '>
                                        <strong>Tech : </strong>
                                        {
                                            project.techStack.join(",")
                                        }
                                    </p>
                                    <a href={project.link}
                                        className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>View Project</a>
                                </div>





                            </div>

                        ))
                }
            </div>
        </div>
    )
}

export default Projects;
