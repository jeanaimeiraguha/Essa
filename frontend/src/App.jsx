import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav';
import Addusr from './Addusr';
import Addtr from './Addtr';
import Selecttr from './Selecttr';
import Updtr from './Updtr';
import Insrttrain from './Insrttrain';
// import Selecttrain from './Selecttrain';
import Udttrainee from './Udttrainee';
import Minsert from './Minsert';
import Mselect from './Mselect';
import Mupdate from './Mupdate';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Nav />} />
                <Route path='/addusr' element={<Addusr />} />
                <Route path='/insrttrain' element={<Insrttrain />} />
                <Route path='/minserted' element={<Minsert />} />
                <Route path='/addtr' element={<Addtr />} />
                <Route path='/selecttr' element={<Selecttr />} />
                {/* <Route path='/selecttrain' element={<Selecttrain />} /> */}
                <Route path='/mselect' element={<Mselect />} />
                <Route path='/mupdate/:tid' element={<Mupdate />} />
                <Route path='/updtr/:id' element={<Updtr />} />
                <Route path='/udttrainee/:tid' element={<Udttrainee />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
