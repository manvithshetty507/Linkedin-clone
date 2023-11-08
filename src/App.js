import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Login'; // Import the Login component

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login /> 
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;

