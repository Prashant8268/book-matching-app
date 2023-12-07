"use client"
import NavBar from '../components/NavBar';
import InputForm from '../components/InputForm';
import ResultsFrame from '../components/ResultFrame';
import { useState } from 'react';
export default function Home() {

  const [result ,setResult] = useState([]);


  const [isResultAvailable, setIsResultAvailable] = useState(false);


  return (
    <div className="container mx-auto">
      <NavBar />
      <main className="my-8">
        <h1 className="text-3xl font-bold text-center mb-8">Book Matching App</h1>
        <InputForm 
          result= {result}
          setResult={setResult}
          isResultAvailable ={isResultAvailable}
          setIsResultAvailable = {setIsResultAvailable} />
        {isResultAvailable? <ResultsFrame  result = {result}
        /> : null}
      </main>
    </div>
  );
}

