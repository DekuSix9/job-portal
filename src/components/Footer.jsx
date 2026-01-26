import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { RxInstagramLogo } from "react-icons/rx";
import { RiLinkedinLine } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className=" max-w-11/12 mx-auto my-12">
            <div className=" flex flex-col md:flex-row justify-between items-center">
                <div className=" flex flex-col md:flex-row gap-1 md:gap-6 items-center">
                   <h1 className='text-xl font-bold text-[#84BD00]'>CareerHub</h1>
                   <p className=" text-gray-500 text-sm">© 2025 CareerHub. All Right Reserved.</p>
                </div>

                 <div className=" flex gap-2 md:gap-4 items-center text-2xl mt-2 md:mt-0 text-gray-500">
                   <BiLogoFacebook className="hover:text-[#84BD00] cursor-pointer" />
                   <RiTwitterXFill className="hover:text-[#84BD00] cursor-pointer" />
                   <RxInstagramLogo className="hover:text-[#84BD00] cursor-pointer" />
                   <RiLinkedinLine className="hover:text-[#84BD00] cursor-pointer" />

 
                </div>

            </div>
        </footer>
    );
};

export default Footer;