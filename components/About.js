import Image from 'next/image'

const About = () => {
  return (
    <div className="flex w-full p-2 py-16 items-right md:h-screen" id='About'>
        <div className="max-w-[1024px] m-auto md:grid grid-cols-3 gap-8">
       
            <div className="col-span-2 text-gray-600">
            <h3 className="text-xl uppercase -tracking-widest " > About </h3>
            <h2 className="mb-4 p-4 text-[#5651e5] tracking-widest " >How I Am</h2>
            <p>I am not a normal developer. </p>
            <p> I spent the five years after graduation as a civil engineer, 
                I worked as a site engineer for two different companies, and also I got my Master's Degree
                 while working full-time. My master's degree was about how we can utilize AI in civil engineering
                  designs instead of the ordinary way. I always had a knack for technology, searching for new things and learn it .
            </p>
            <p>After these five years, I decided to encourage myself to be brave and follow my childhood dreams of being a programmer.</p>
            <p>I have a funny story about that dream. </p>
            <p>I started my journey at ASAC. During six months of camp, I learned good enough languages, libraries, and frameworks to be
                 a joiner full-stack web developer such as  HTML, CSS, vanilla JS, python, Django,  dealing with a database, React, 
                 and Next js.</p>
                 <p className="py-2 pt-4 underline cursor-pointer"> <a href="https://github.com/ayat93a" target="_blank">
                  Check out some of my projects </a></p>
            </div>
            {/* <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105'>
                <Image src='/../public/assets/personalpic.jpg'  width='400' height='400' className='rounded-xl '/>
            </div> */}
           
          
        </div>
       
        
    </div>
  )
}

export default About