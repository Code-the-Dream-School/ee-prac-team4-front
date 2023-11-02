import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
function LandingPage() {
  const [search, setSearch] = useState('');

  return (
    <>
      <div className='topBar'>
        <div className='logo'>
          <img src='' alt='logo' />
          <p>Flashcards</p>
        </div>

        <div className='navigation'>
          <ul className='menu'>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Topics</a>
            </li>
            <li>
              <a href=''>Solutions</a>
            </li>
          </ul>
        </div>
        <div>
          <input type='search' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
          <Link to=''>
            <button>Sign In</button>
          </Link>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
      </div>
      <div className='banner'>
        <img src='' alt='' />
      </div>
      <div className='content'>
        <div>
          <h2>Flashcards</h2>
        </div>
        <div>
          <h2>Resources</h2>
        </div>
        <div>
          <h2>Quiz</h2>
        </div>
      </div>
      <div className='footer'></div>
    </>
  );
}

export default LandingPage;
