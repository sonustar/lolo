import React, { useEffect, useState } from 'react';
import C from './c';


const Counter = () => {
    const [post, setPost] = useState([]); // Changed to single post object instead of array
    const [enter,setenter] = useState(false)
    const [search,setsearch]= useState(0)


    useEffect(() => {
        const fetchData = async () => {
           
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${search}`);
                
                const data = await response.json();
                setPost(data);
            
        };

        fetchData();
        console.log(enter)
    }, [enter]);

    return (
        <div>

            {(enter)?<>
            
           
           <C post={post} />
            
            </>:<>
            
            <h1> please  hit enter </h1>

            <div className='flex flex-col'>
            <textarea 
            onChange={(e)=>{
               setsearch(e.target.value)
            }}
            className='border-black' name="id" id="" placeholder='Enter the id '></textarea>
            </div>
            </>
            
             }

            



            <button

            className='bg-blue-500 rounded w-1/2 mt-4'
            
            onClick={()=>{
                setenter(!enter)
            }}

            > Enter </button>
            

        </div>

    );
};

export default Counter;
