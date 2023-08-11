import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let d = () => <Dialogs/>
let p = () => <Profile/>
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Navbar />
        <Header />
        <div className='app-content'>
          <Routes>
            {/* <Route  path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} /> */}

            <Route path='/profile' Component={p} />
            <Route path='/dialogs' Component={d} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;