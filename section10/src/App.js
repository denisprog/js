import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const IS_LOGGED_KEY = 'isLoggedIn';

function App () {


  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem(IS_LOGGED_KEY);
    if(storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  }, []);
  

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem(IS_LOGGED_KEY, '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_LOGGED_KEY);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
