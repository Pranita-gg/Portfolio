import React from 'react';
import { projects } from '../data/Projectdata';

const Projects = () => {
    return (
        <div className='py-10 px-5 bg-gray-50 mt-8'>
            <h2 className='text-3xl font-bold text-center mb-8 '>My Projects</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    projects.map((project)=>(
                        <div key={project.id}
                        className='bg-white rounded-xl shadow-md overflow:hidden transform transition hover:scale-105 hover:shadow-xl'>
                        <img src="project.image"
                        className='w-full h-48 object-cover'/>
                        <div className='p-5 '>
                        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-gray-600 mb-3 '>{project.description}</p>
                        <p className='text-sm text-gray-500 mb-3 '>
                            <strong>Tech:</strong>
                            {
                                project.techStack.join(",")
                            }
                        </p>
                        <a href={project.link} 
                        className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition'>View Project</a>
                        </div>


                    
                

            </div>
            
                     ) )
                    }
                    </div>
                    </div>
    )}

export default Projects;
