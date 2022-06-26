import React from 'react'
import Image from 'next/image'
import intersection from '../public/assets/AIsignal.jpeg'
import realestste from '../public/assets/realstate.jpeg'
import google from '../public/assets/google.webp'
import resume from '../public/assets/resume.webp'
import maldive from '../public/assets/maldive.jpeg'
import todo from '../public/assets/todo.webp'
import party from '../public/assets/party.jpeg'
import blog from '../public/assets/blog.jpeg'
import book from '../public/assets/bookshop.webp'
import hash from '../public/assets/hash.jpeg'

const Projects = () => {
  return (
    <div className='w-full h-screen ' id='Projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-24'>
            <h2 className=' text-[#5651e5]'>What I Have Built </h2>
            <p className='p-4 text-xl'>Full Projects</p>
            <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  <Image src={intersection} height='900' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">AI Traffic System</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Based on real data from GAM.</p>
                      <p>Technology:  Python ,Pygame for simulation , numpy ,pandas ,matplotlib and sklearn for model building, and joblib and pickle to save the model. 
                      </p>
                      
                    
                    <div className='items-center pt-6 space-x-6'>
                    <a href="https://www.youtube.com/watch?v=fwO9oT7EuJY" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deploy</button>
                    </a>
                    <a href="https://github.com/ayat93a/AI_Traffic_system" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>


                  
                </div>


                <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                <Image src={realestste} height='800' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900"> Price Prediction</h5>
                    <p className="mb-4 text-base text-gray-700">
                      
                      For Real-Estate.</p>
                      <p>Technology: Python ,Numpy and Pandas for data cleaning ,Matplotlib for data visualization ,Sklearn for model building and joblib to save the model.
                      
                    </p>
                    <div className='pt-1 space-x-6 justify-right hover:scale-105'>
                    
                    <a href="https://github.com/ayat93a/Real-Estate-Price-Prediction-Project" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div> 
                    
                  </div>

                </div>


                <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={google} height='805' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Google momentum clone</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Technology: React, responsive design by CSS, fetching data from Axios in React JS and Styled-Components In React.
                    </p>
                    <div className='items-center pt-20 space-x-6'>
                    <a href="https://google-momentum-clone.vercel.app/" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deploy</button>
                    </a>
                    <a href="https://github.com/ayat93a/google-momentum-clone" target="_blank">
                    <button type="button" className="hover:scale-105 px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>

                  
                </div>


                <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={resume} height='810' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">My Portfolio</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Technology: Nextjs ,responsive design by Tailwind
                    </p>
                    <div className='items-center pt-32 space-x-6'>
                    <a href="https://github.com/ayat93a/AI_Traffic_system" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deploy</button>
                    </a>
                    <a href="https://github.com/ayat93a/portfolio-nextjs" target="_blank">
                    <button type="button" className="hover:scale-105 px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>
                    
                </div>

                <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                <Image src={todo} height='400' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900"> To Do App</h5>
                    <p className="mb-4 text-base text-gray-700">
                      
                      Technology : Django Framework and Bootstrap.
                    </p>
                     
                    <div className='pt-1 space-x-6 justify-right hover:scale-105'>
                    
                    <a href="https://github.com/ayat93a/crud-snacks" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div> 
                    
                  </div>

                </div>


              </div>
              <p className='p-4 text-xl'>Practicing Back end by Projects </p>
              <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={party} height='750' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Party App</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Technology: Django Rest Framework
                      </p>
                    <div className='items-center pt-6 space-x-6'>
                    <a href="https://github.com/ayat93a/party" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>
                  </div>

                  <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={blog} height='930' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Blog App</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Technology: Django, Django Rest Framework, Permissions
                      </p>
                    <div className='items-center pt-6 space-x-6'>
                    <a href="https://github.com/ayat93a/blog" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>
                  </div>

                  <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={book} height='670' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Bookshop App</h5>
                    <p className="mb-4 text-base text-gray-700">
                      Technology: Django Framework
                      </p>
                    <div className='items-center pt-12 space-x-6'>
                    <a href="https://github.com/ayat93a/blog" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>
                  </div>


            </div>
              <p className='p-4 text-xl'>Practicing Front end by Projects </p>
              <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={maldive} height='900' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">Travel App</h5>
                    <p className="mb-4 text-base text-gray-700">

                      Technology: Nextjs ,responsive design by Tailwind
                      </p>
                      
                    
                    <div className='items-center pt-6 space-x-6'>
                    <a href="https://www.youtube.com/watch?v=fwO9oT7EuJY" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deploy</button>
                    </a>
                    <a href="https://github.com/ayat93a/AI_Traffic_system" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">GitHub</button>
                    </a>
                    </div>
                    
                  </div>
                  </div>

                </div>
                <p className='p-4 text-xl'>My Blog </p>
              <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="max-w-sm bg-white rounded-lg shadow-lg ">
                  
                  <Image src={hash} height='900' className='rounded-lg' />
                 
                  <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium text-gray-900">My Blog</h5>
                    <p className="mb-4 text-base text-gray-700">

                      I share my knowledge when I am free here.
                      </p>
                      
                    
                    <div className='items-center pt-6 space-x-6'>
                    
                    <a href="https://ayat.hashnode.dev/" target="_blank">
                    <button type="button" className=" px-7 py-2.5 bg-blue-600 text-white hover:scale-105 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Discover</button>
                    </a>
                    </div>
                    </div>
                  
                  </div>
        </div>
        <p className='pt-16 text-3xl text-center'>You Can Find More in my <a href='https://github.com/ayat93a' target="_blank" className='underline'>GitHub </a></p>
        </div>
        
    </div>
  )
}

export default Projects