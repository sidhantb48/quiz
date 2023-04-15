import React from 'react';
import Select from "./common/Select";
import Input from "./common/Input";
// import QuizDifficulty from "./common/DifficultySelect"
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from '@mui/material';

export default function Quiz() {
  const navigate=useNavigate();
  const [quizCount, setQuizCount] = React.useState('');
  const [quiztype, setQuizType] = React.useState('');
  // const [quizDifficulty, setQuizDifficulty] = React.useState('');
  const [playerName,setPlayerName]=React.useState('')
  const [quizTime,setQuizTime]=React.useState();


  
  
  

  const handleChange = (event) => {
    setQuizType(event.target.value);
  };
 
  // const handleDifficulty = (event) => {
  //   setQuizDifficulty(event.target.value);
  // };

  const getPlayerName=(value)=>{
    
      setPlayerName(value)
    localStorage.setItem('Playername',value)
    
  }

  const getQuizTime=(value)=>{
    
    setQuizTime(value)
  localStorage.setItem('QuizTime',value)
  
}

  const getQuiz=()=>{
    
    if(playerName){
      axios.get(`https://opentdb.com/api.php?amount=${quizCount}&category=${quiztype}`)
    .then((response)=>{
      
      navigate('/play',
      {
        state:{
          quizData:response.data.results,
          quizCount:quizCount,
          quiztype:quiztype,
          // quizDifficulty: quizDifficulty
        }
      })
    })
    }
    else{
      toast.error("Please enter Player Name")
    }
    
  }

  return (
    <div className='quiz-main'>
      <ToastContainer />
        <h1>React Quiz</h1>

        <TextField 
          style={{marginBottom:20}}
          fullWidth  
          id="outlined-basic" 
          label="Player Name" 
          variant="outlined"
          onChange={(e)=>getPlayerName(e.target.value) }
          value={playerName}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
          
      />

        <TextField 
          style={{marginBottom:20}}
          fullWidth  
          id="outlined-basic" 
          label="Description" 
          variant="outlined"
          onChange={(e)=>getQuizTime(e.target.value) }
          value={quizTime}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
      />    
        

        <Input 
        setQuizCount={setQuizCount}
        quizCount={quizCount} 
        
        />
        <Select 
        quiztype={quiztype} 
        handleChange={handleChange}
        InputProps={{
          style: { color: 'white' },
        }}
         />


          

        {/* <QuizDifficulty
        quizDifficulty={quizDifficulty}
        handleDifficulty={handleDifficulty}
         /> */}

        <Button 
        onClick={getQuiz}
        variant="contained" 
        style={{marginTop:10 , marginRight:5}}>
          GET QUIZ
        </Button>

        <Button 
        onClick={()=>navigate('/results')}
        variant="contained" 
        style={{marginTop:10 , marginLeft:5}}>
          CHECK LEADERBOARD
        </Button>
    </div>
  )
}
