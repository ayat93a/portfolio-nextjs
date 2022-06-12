import Image from 'next/image'

const About = () => {
  return (
    <div className="flex items-center w-full p-2 py-16 md:h-screen">
        <div className="max-w-[1024px] m-auto md:grid grid-cols-3 gap-8">
       
            <div className="col-span-2 text-gray-600">
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
                 <p className="pt-4">Check out some of my projects</p>
            </div>
            
           
          
        </div>
    </div>
  )
}

export default About