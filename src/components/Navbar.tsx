import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#525252] p-4 text-white pl-20">
      <ul className="flex space-x-4">
        <li className='hover:bg-blue-400 px-4 py-2 rounded-xl'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:bg-blue-400 px-4 py-2 rounded-xl'>
          <Link to="/users">Users</Link>
        </li>
        <li className='hover:bg-blue-400 px-4 py-2 rounded-xl'>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
