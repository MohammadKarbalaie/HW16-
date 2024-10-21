import { Link } from 'react-router-dom';
import { IUser } from '../types';

interface UserCardProps {
  user: IUser;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <div className="w-80 h-60 flex mt-8 bg-white items-center justify-center text-center p-8 border rounded-lg shadow-sm hover:bg-gray-300">
          <div className='w-16 absolute -mt-60 bg-gray-200 rounded-full'>
            <img src={user.image} alt={user.lastName} className='h-16'/>
          </div>
          <div className='w-full ml-3'>
            <p className='font-semibold text-xl py-1 capitalize'>{user.username}</p>
            <p className='font-medium text-lg py-1'>{user.firstName} {user.lastName}</p>
            <p className='font-medium text-md py-1'>{user.phone}</p>
            <p className='font-medium text-md py-1'>{user.email}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
