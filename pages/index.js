
import Header from "./components/Header" ;
import Main from "./components/Main" ;
import Footer from "./components/Footer";
import Head from "next/head" ;
import { useState } from "react" ;


function Home () 
{
  
  const [data ,setQuestion] =useState()
  const questionAskHandler = (e) =>{
    e.preventDefault();
    
    const question ={
      location :e.target.location.value,
      minCustomers :e.target.minimum.value,
      maxCustomers :e.target.maximum.value,
      avgCookies :e.target.avg.value,

     }
    setQuestion(question);
    
  }

  
  return (
    <>
    <Head>
      <title> Cookie Stand Admin</title>
    </Head>

    <Header/>
    
    
    <Main questionAskHandler={questionAskHandler}   />
    <br/>
    <div className="font-[poppins] text-center">
    <p>Report Table Coming Soon...</p>
    <br/>
    <p >{JSON.stringify(data)}</p>
    </div>
    <Footer/>




    </>
  )
  
}


export default Home 