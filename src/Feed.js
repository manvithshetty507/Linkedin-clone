import React, {useEffect, useState} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import { getDocs, collection, addDoc, serverTimestamp } from 'firebase/firestore';

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
    }, [posts]);
    

    const sendPost = async (e) => {
        e.preventDefault();
    
        // Create a new post object with the input value
        const newPost = {
            name: 'Messi Andreas',
            description: 'This is via the db',
            message: input, // Set the message field to the input value
            photoUrl: '',
            timestamp: serverTimestamp(), // Add a timestamp
        };
    
        try {
            // Add the new post to the Firestore "posts" collection
            await addDoc(collection(db, 'posts'), newPost);
            // Clear the input field after the post is added
        } catch (error) {
            console.error('Error adding post: ', error);
        }finally{
            setInput('');
        }
    };
    


  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form onSubmit={sendPost}>
                    <input 
                        type='text'
                        onChange={e => setInput(e.target.value)}
                        value={input}
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

        {posts
            .sort((a, b) => b.data.timestamp - a.data.timestamp) // Sort posts by timestamp in descending order
            .map((post) => (
                <Post
                key={post.id}
                name={post.data.name}
                description={post.data.description}
                message={post.data.message}
                photoUrl={post.data.photoUrl}
                />
            ))}

    </div>
  )
}

export default Feed