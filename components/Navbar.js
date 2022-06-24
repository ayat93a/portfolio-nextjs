import React , {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
// for lazy image
import {AiOutlineMenu , AiOutlineClose , AiOutlineGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {MdOutlineMail} from 'react-icons/md'
import {RiContactsFill} from 'react-icons/ri'
import {SiHashnode} from 'react-icons/si'


const Navbar = () => {
    const [nav , setNav] = useState(false)
    
    const handelNav = () => {
        setNav(!nav);
    }

    
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] '>
        <div className='flex items-center justify-between h-full px-2 x-full 2xl:px-16 '>
            {/*  2xl:px-16 media query*/}
            <Image src='/../public/assets/ayat.png'  width='125' height='80' className='h-auto max-w-full rounded-full' />
        <div>
            <ul className='hidden md:flex'>
                <Link href = '/'>
                    <li className='ml-10 text-sm uppercase hover:border-b '> home </li>
                </Link>
                <Link href = '/#About'>
                    <li className='ml-10 text-sm uppercase hover:border-b '> About </li>
                </Link>
                <Link href = '/#Skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b '> Skills </li>
                </Link>
                <Link href = '/#Projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b '> Projects </li>
                </Link>
                <Link href = '/'> 
                    <li className='ml-10 text-sm uppercase hover:border-b '> Contact </li>
                </Link>
            </ul>
            <div onClick={handelNav} className='cursor-pointer md:hidden'>
                <AiOutlineMenu size={25}/>
            </div>
        </div>
        </div>
    <div className={nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''}>
        {/* the background when the menu mode is active  */}
        <div className={nav 
        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'}>
            <div>
                <div className='flex items-center justify-between w-full '>
                    <Link href='/' >
                <Image src='/../public/assets/ayat.png'  width='87' height='35' className='h-auto max-w-full rounded-full' />
                    </Link>
                <div onClick={handelNav} className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400 '>
                    <AiOutlineClose />
                </div>
                </div>
                <div className='my-4 border-b border-gray-300'>
                    <p className='w-[85%] md:w-[90%] p-4'>Full Stack Web Developer</p>
                </div>
            </div>
            <div className='flex flex-col p-4'>
                <ul className='uppercase'>
                 <Link href='/'>
                 <li className='py-4 text-sm'>Home</li>
                 </Link>
                 <Link href='/'>
                 <li className='py-4 text-sm'>About</li>
                 </Link>
                 <Link href='/'>
                 <li className='py-4 text-sm'>Skills</li>
                 </Link>
                 <Link href='/'>
                 <li className='py-4 text-sm'>Projects</li>
                 </Link>
                 <Link href='/'>
                 <li className='py-4 text-sm'>Contact</li>
                 </Link>
                </ul>
                <div className='pt=40'>
                    <p className='uppercase tracking-widest text-[#5651e5] pt-10'>Lets Connect</p>
                    <div  className='flex items-left justify-between my-4  w-full sm:w-[80%]'>
                    <div className='duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 '>
                        <FaLinkedinIn size={25} />
                    </div>
                    <div className='duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 '>
                    <AiOutlineGithub size={25}/>
                    </div>
                    <div className='duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 '>
                    <SiHashnode size={25}/> 
                    </div>
                    <div className='duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 '>
                    <MdOutlineMail size={25}/> 
                    </div>
                    <div className='duration-150 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-500 hover:scale-150 '>
                    <RiContactsFill size={25}/> 
                    </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
    </div>
  )
}

export default Navbar