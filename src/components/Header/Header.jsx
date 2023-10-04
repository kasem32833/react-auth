
import { NavLink } from 'react-router-dom';

const Header = () => {

    logOut()
    .then(()=>{
        console.log('User loged out successfully')
    })
    .catch((error)=>{
        console.log(error)
    })
    return (
        <div>
          <div className="container mx-atuo">
              <div className="flex justify-between items-center">
                  <div className='text-3xl fort-bold'>Logo</div>
                  <div className="flex gap-4">
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'/register'}>Register</NavLink>
                  <NavLink to={'/orders'}>Oreders</NavLink>
                  {
                   user &&  <>
                        <NavLink to={'/orders'}>Profile</NavLink>
                        <NavLink to={'/orders'}>Dashboard</NavLink>
                    </>
                   }
                  </div>
                  <div>
                    <NavLink to={'/login'}>Login</NavLink>
                    <NavLink>Sign Out</NavLink>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Header;