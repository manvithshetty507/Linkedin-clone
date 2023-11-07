import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { getDocs, collection, addDoc } from 'firebase/firestore';

import { db } from './firebase';


function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
      
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await getDocs(collection(db, 'posts'));
            setPosts(response.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
        };
    
        fetchPosts();
    }, []);
    

    const sendPost = async (e) => {
        e.preventDefault();
    
        // Create a new post object
        const newPost = {
            name: 'Messi Andreas',
            description: 'This is via the db',
            message: input,
            photoUrl: '',
        };
    
        try {
            // Add the new post to the Firestore "posts" collection
            await addDoc(collection(db, 'posts'), newPost);
    
            // Clear the input field after the post is added
            setInput('');
        } catch (error) {
            console.error('Error adding post: ', error);
        }
    };

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input 
                        type='text'
                        onChange={e => setInput(e.target.value)}
                        onClick={sendPost}
                    />
                    <button type='submit'>Send</button>
                </form>
            </div>

            <div className='feed__inputOptions'>
                <InputOption  Icon={ImageIcon} title="Photo"  color="#70B5F9"/>
                <InputOption  Icon={SubscriptionsIcon} title="Video"  color="#E7A33E"/>
                <InputOption  Icon={EventNoteIcon} title="Event"  color="#C0CBCD"/>
                <InputOption  Icon={CalendarViewDayIcon} title="Write Article"  color="#7FC15E"/>
            </div>
        </div>

        {/* Posts */}

        {posts.map((post) => {
            <Post />
        })}

        <Post name="messi andreas" description="this is a test" message="nice this is working" />
    </div>
  )
}

export default Feed