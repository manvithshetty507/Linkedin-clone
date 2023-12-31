import React from 'react'
import { Avatar } from '@material-ui/core';
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return <div className='sidebar__recentItem'>
                    <span className='sidebar__hash'>#</span>
                    <p>{topic}</p>
                </div>
    }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img 
                src='https://wallpapers.com/images/hd/mix-color-2850-x-1825-background-6casb5xaevqhmg7h.jpg'
            />
            <Avatar className='sidebar__avatar' src={user.photoURL}>
                {user.email[0].toUpperCase()}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2343</p>
            </div>

            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2123</p>
            </div>
        </div>

        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("soft dev")}
            {recentItem("programming")}
            {recentItem("springboot")}
        </div>
    </div>
  )
}

export default Sidebar;

// 3 parts in Sidebar top, mid, footer