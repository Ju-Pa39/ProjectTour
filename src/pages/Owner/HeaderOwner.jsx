import React from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../Store/userStore'


function HeaderOwner() {
    const user = useUserStore(state => state.user)
    const resetUser = useUserStore(state => state.resetUser)
    const navigate = useNavigate()

    const handleLogout = () => {
        resetUser();
         navigate('/login');
     };

    return (
        <nav>
           <div className="navbar bg-base-100 flex justify-end ">
           
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a onClick={() => navigate('/Owner')} className="justify-between">Dashboard</a>
                        </li>
                        <li> 
                            <a onClick={() => navigate('/Customer')} className="justify-between">Profile</a>
                        </li>
                        {user
                            ? <li><button onClick={handleLogout}>Logout</button></li>
                            : <li><button onClick={() => navigate('/login')}>Login</button></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
        </nav>
    )
}

export default HeaderOwner