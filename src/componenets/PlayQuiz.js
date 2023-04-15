import React,{useState} from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Card from "./common/Card"
import {database} from "../firebase-config";
import {addDoc,collection} from "firebase/firestore"
import { yellow } from '@mui/material/colors';


export default function PlayQuiz({timer}) {
    const {state}=useLocation();
    const navigate=useNavigate();
    const [questionCounter,setQuestionCounter]=useState(1)
    const [totalQuiz,setTotalQuiz]=useState(1);
    const [questionArray,setQuestionsArray]=useState([])
    const [quizType,setQuizType]=useState('')
    // const [quizDifficulty,setQuizDifficulty]=useState('')
    const [result,setResult]=useState(0)
    const [playerName,setPlayerName]=useState('')
    const databaseRef=collection(database,'Leader Board')

    

    

    React.useEffect(() => {
      const { quizData,quizCount,quizType, }=state;
      setQuestionsArray(quizData)
      setTotalQuiz(quizCount)
      // setQuizDifficulty(quizDifficulty)
      setQuizType(quizType)
      setPlayerName(localStorage.getItem('Playername'))
    },[])

    // const prevQuestion = () => {
    //   if(questionCounter > 1){
    //     setQuestionCounter(questionCounter-1)
    //   }
    // }

    const nextQuestion = () => {
      if(questionCounter<totalQuiz){
        setQuestionCounter(questionCounter+1)
        
      }  
    }


    

    const submitQuiz=()=>{
      addDoc(databaseRef,{
        playerName:playerName,
        // difficulty:quizDifficulty,
        category:questionArray[0].category,
        finalScore:result
      })
      .then(() => {
        navigate('/results', {
            state: {
                finalResults: result,
          }
        })
      })   
    }

    

  return (
    <div>
        <h1>Play Quiz</h1>

        <h2>Question Number : {questionCounter}</h2>
        {/* <h3>Difficulty Level :{quizDifficulty}</h3> */}
        
        

        <Card 
        questionArray={questionArray} 
        questionCounter={questionCounter}
        nextQuestion={nextQuestion} 
        setResult={setResult}
        result={result}
        />
        {questionCounter === Number(totalQuiz) ? (
            <Button
            onClick={submitQuiz}
            variant="contained" 
            style={{marginLeft:10}}>
          SUBMIT
      </Button>
        ):(
           ""
        )}
        

    </div>
  )
}
