import React from 'react'

const Projects = () => {
  return (
    <div className='w-full' id='Projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest text-gray-600 uppercase'>Projects</p>
            <h2 className='py-4 text-[#5651e5]'>What I Have Built </h2>
            <div className='grid gap-8 md:grid-cols-2'>
                <div className='relative flex items-center justify-center w-full h-auto p-4 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                <div class="aspect-w-16 aspect-h-9">
                  <p className='p-4'></p>
                    {/* <iframe src="https://www.youtube.com/embed/fwO9oT7EuJY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fwO9oT7EuJY" title="AI Traffic System" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects