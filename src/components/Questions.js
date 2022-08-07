import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Answer from './Answer';
import './index.css';

export default function Questions() {
    const [question, setQuestion] = useState('');
    const [result, setResult] = useState('');
    const [answerClass, setAnswerClass] = useState('');
    const formRef = useRef();

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=1")
            .then(res => res.json())
            .then(data => {
                setQuestion(data.results[0])
                console.log(data)
            })
    }, [result]);

    const handleSubmitAnswer = (e) => {
        e.preventDefault();

        const answerFromUser = e.target.answer.value;
        const { correct_answer } = question;
        console.log(typeof correct_answer);

        if (answerFromUser.toUpperCase() === correct_answer.toUpperCase()) {
            setResult("Correct");
            setAnswerClass('correctAnswer');
        } else {
            setResult("Incorrect answer! Please try again...")
            setAnswerClass('IncorrectAnswer');
        }

        formRef.current.reset();

    }
    return (
        <div className='container'>
            <h1 className='title'>Let's Play Trivia</h1>
            <h4 className={`result ${answerClass}`}>{result}</h4>
            <h3 className='question'>{question?.question}</h3>

            <Answer handleSubmitAnswer={handleSubmitAnswer} formRef={formRef}></Answer>
        </div>
    )
}
