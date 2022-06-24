import Image from "next/image"

const Skills = () => {
  return (
    <div className="w-full p-2 lg:h-screen" id='Skills'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest text-gray-600 uppercase">Skills</p>
            <h2 className="text-[#5651e5] p-4"> What I Can Do</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 ">
            

            
            
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/html.png' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase">HTML</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/css.png' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase">css</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/javascript.png' width='64px' height='64px' className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="uppercase md:ml-16">javascript</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto ">
                  <Image src='/../public/skills/python.jpg' width='70px' height='70px' className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 >Python</h3>
                </div> 
              </div>
            </div>
            
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/Django.jpg' width='100px' height='100px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Django</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/rest.png' width='150px' height='150px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="md:ml-16">Rest Framework</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/react.png' width='80px' height='80px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/tailwind.png' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/next.png' width='64px' height='64px'  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Next </h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/postgres.png' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Postgres</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/github.png' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/docker.jpg' width='64px' height='64px' />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Docker</h3>
                </div> 
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105 sm:shadow-md ">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="m-auto">
                  <Image src='/../public/skills/wordpress.jpg' width='64px' height='64px' className="rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>WordPress</h3>
                </div> 
              </div>
            </div>

            
        








        
            </div>
        </div>
    </div>
  )
}

export default Skills