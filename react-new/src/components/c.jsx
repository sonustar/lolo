import React from 'react'

const C = ({post}) => {
  return (
    <>
            
    <h1>Post</h1>
    
    {
        post.map((e)=>(
            <div className='mb-5' key={e.id}>
                <h2 className='text-3xl'>{e.title}</h2>
                <p>{e.body}</p>
            </div>
        ))
    }
    
    </>
  )
}

export default C