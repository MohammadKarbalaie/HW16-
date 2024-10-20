import { Link } from 'react-router-dom';
import { IUser } from '../types';

interface UserCardProps {
  user: IUser;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <li>
      <Link to={`/users/${user.id}`}>
        <div className="w-96 flex mt-4 bg-white items-center justify-center p-4 border rounded-lg shadow-sm hover:bg-gray-300">
          <div className='w-10'>
            <img src={user.image} alt={user.lastName} />
          </div>
          <div className='w-full ml-3'>
            <p className='font-semibold text-xl'>{user.firstName} {user.lastName}</p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserCard;
