import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
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
                avatar="https://pbs.twimg.com/profile_images/1604746350587150336/Tfn3-4n1_400x400.jpg"
                title="me"
            />
        </div>
    </div>
  )
}

export default Header