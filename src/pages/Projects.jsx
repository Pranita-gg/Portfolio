
import {useState,useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const[projects, setProjects ]=useState([])
      const[loading,setLoading]=useState(true);
      useEffect(()=>{
        async function fetchproject(){
            try{
                const response= await axios.get("https://jsonplaceholder.typicode.com/posts");
                setProjects(response.data.slice(0,5));
            }
            catch(err){
            console.log(err);

        }
        finally{
            setLoading(false);
        }
    }
    fetchproject();
      }, []);
      if(loading){
        return(
            <div className='flex justify-center items-center min-h-screen '>
                <div className='w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
            </div>
        )
      }
    
    

    return (
        <>
        </>
      
    );
}

export default Projects;
