
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <div className="container mx-atuo">
              <div className="flex justify-between items-center">
                  <div className='text-3xl fort-bold'>Logo</div>
                  <div className="flex gap-4">
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'/login'}>Login</NavLink>
                  <NavLink to={'/register'}>Register</NavLink>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Header;