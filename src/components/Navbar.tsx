import { AiFillFileText, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="py-2.5 bg-[#1f2c47]">
    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
            <img src="/public/output-onlinepngtools.png" className="ml-3" width={100} height={100} alt="Landwind Logo" />
        </a>
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                        aria-current="page">    <Link to="/"><span className='flex gap-2'><AiOutlineHome className='mt-1' />Home</span></Link></a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">    <Link to="/users"><span className='flex gap-2'><AiOutlineUser className='mt-1' />Users</span></Link></a>
                </li>
                <li>
                    <a href="#"
                        className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"><Link to="/posts"><span className='flex gap-2'><AiFillFileText className='mt-1' />Posts</span></Link></a>
                </li>
               
            </ul>
        </div>
    </div>
</nav>

<script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>
    </div>
  );
};

export default Navbar;



