import React from 'react'
import { Avatar } from '@material-ui/core';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './Post.css'
import InputOption from './InputOption';

/*
post will have 3 parts 
header
body
bottom part like comment etc
*/

function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__bottom'>
            <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
            <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
}

export default Post