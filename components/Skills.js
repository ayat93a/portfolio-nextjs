import Image from "next/image"
import html from "../public/skills/html.png"
import css from "../public/skills/css.png"
import js from "../public/skills/javascript.png"
import python from "../public/skills/python.jpg"
import django from "../public/skills/Django.jpg"
import rest from "../public/skills/rest.png"
import react from "../public/skills/react.png"
import tailwind from "../public/skills/tailwind.png"
import next from "../public/skills/next.png"
import postgress from "../public/skills/postgres.png"
import github from "../public/skills/github.png"
import docker from "../public/skills/docker.jpg"
import wordpress from "../public/skills/wordpress.jpg"
import node from '../public/assets/nodejs.jpg'
import aws from '../public/assets/aws.png'

const Skills = () => {
  return (
    <div className="w-full p-2 lg:h-screen" id="Skills">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="pt-8 text-xl tracking-widest text-gray-600 uppercase">Skills</p>
            <h2 className="text-[#5651e5] p-4"> What I Can Do</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            

            
            
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={html} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase">HTML</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={css} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase">css</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={js} alt="/" width="64px" height="64px" className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase md:ml-16">javascript</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto ">
                  <Image src={python} alt="/" width="70px" height="70px" className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 >Python</h3>
                </div> 
              </div>
            </div>
            
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={django} alt="/" width="100px" height="100px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Django</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={rest} alt="/" width="150px" height="150px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="md:ml-16">Rest Framework</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={react} alt="/" width="80px" height="80px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={tailwind} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={next} alt="/" width="64px" height="64px"  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next</h3>
                </div> 
              </div>
            </div>


            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={node} alt="/" width="64px" height="64px"  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Node </h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={postgress} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Postgres</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={github} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={docker} alt="/" width="64px" height="64px" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Docker</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src={wordpress} alt="/" width="64px" height="64px" className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>WordPress</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="pt-1 m-auto">
                  <Image src={aws} alt="/" width="64px" height="64px" className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>AWS</h3>
                </div> 
              </div>
            </div>




            
        








        
            </div>
        </div>
    </div>
  )
}

export default Skills