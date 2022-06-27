
import {AiOutlineGithub} from "react-icons/ai"
import {FaLinkedinIn} from "react-icons/fa"
import {MdOutlineMail} from "react-icons/md"
import {RiContactsFill} from "react-icons/ri"
import {SiHashnode} from "react-icons/si"


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
        <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center ">
            <div>
                <p className="text-sm tracking-widest text-gray-600 "> HEY THERE!, I&apos;m </p>
            <h1 className="text-[#5651e5] mb-3"> Ayat AlBqour</h1>
            <h1 className="text-sm tracking-widest text-gray-600 uppercase"> full stack web developer </h1>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto"> I am a junior full-stack web developer who graduated recently from ASAC. I am passionate 
                about building interactive web applications and reflecting my knowledge to others by 
                writing a technical blog. If you&apos;re interested in hiring me check
                  out my skills, blogs and projects and contact me. I am currently looking for a job...</p>
            
           
                    <div  className="flex items-center justify-between my-4  max-w-[330px] m-auto ">
                    <div className="duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 ">
                    <a href="https://www.linkedin.com/in/ayat-albqoor/" target="_blank" rel="noreferrer">
                        <FaLinkedinIn size={25} />
                        </a>
                    </div>
                    <div className="duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 ">
                    <a href="https://github.com/ayat93a" target="_blank" rel="noreferrer">
                    <AiOutlineGithub size={25}/>
                    </a>
                    </div>
                    <div className="duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 ">
                    <a href="https://ayat.hashnode.dev/" target="_blank" rel="noreferrer">
                    <SiHashnode size={25}/> 
                    </a>
                    </div>
                    <div className="duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 ">
                    <a href="mailto:alkayedayat93@gmail.com" target="_blank" rel="noreferrer">
                    <MdOutlineMail size={25}/> 
                    </a>
                    </div>
                    <div className="duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 ">
                      <a href="https://wa.link/uxuma0" target="_blank" rel="noreferrer">
                    <RiContactsFill size={25}/> 
                    </a>
                    </div>

                    
                    </div>
               
                </div>
                
            </div>
        
    </div>
  )
}

export default Main