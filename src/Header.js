import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch ,useSelector} from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

  return (
    <div className='header'>
        <div className='header__left'>

            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/linkedin-2752135-2284952.png?f=webp&w=512"
                alt='linkedin-logo'
            />

            <div className='header__search'>
                {/* search-icon */}
                <SearchIcon />
                <input 
                type='text'
                placeholder='Search'
                />
            </div>

        </div> 

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={GroupIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption 
                avatar={true}
                title={user.displayName}
                onClick={logOutOfApp}
            />
        </div>
    </div>
  )
}

export default Header