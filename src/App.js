import React from 'react';
import Quiz from './componenets/Quiz';
import PlayQuiz from './componenets/PlayQuiz';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Result from './componenets/common/Result';
import { app } from './firebase-config';

function App() {
  
  return (
    <div className='app-main'>
      <Routes>
        <Route exact path='/' element={<Quiz />} />
        <Route exact path='/play' element={<PlayQuiz />} />
        <Route exact path='/results' element={<Result />} />
        
      </Routes>

    </div>
  );
}

export default App;
