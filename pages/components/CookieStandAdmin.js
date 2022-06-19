import Head from "next/head" ;
import Header  from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CreateForm from "./CreateForm";
import ReportTable from "./ReportTable";
import { useState } from "react";





function CookieStandAdmin () {
    const [counter , setcounter] =   useState (0);
    const [rows, setRows] = useState([]);
    const [totals, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
    const TableHandler = (e)=> {
      e.preventDefault () ;
      setcounter(counter+1)
      
    var randomArray = (length, max, min) => { return Array(length).fill().map(() => 
        Math.round(Math.random() * (max - min) + min))}

      
     var values = randomArray(14, e.target.max.value, e.target.min.value)
     let newRow = {
      location: e.target.loc.value,
      min: e.target.min.value,
      max: e.target.max.value,
      avg: e.target.avg.value,
      values: values
  };

  let newTotals = []
    for (let i = 0; i < values.length; i++) {
        newTotals.push(values[i] + totals[i])
    }
    setRows([...rows, newRow]);
    setTotals(newTotals);
  }

    




    return (
    <>

      <Head>
      <title> Cookie Stand Admin</title>
      </Head>
      <Header/>
      <Main   />
      <CreateForm TableHandler ={TableHandler}/>
      {
        rows.length == 0 ? 
        (<h2 className="grid grid-cols-1  justify-items-center py-10 text-2xl font-bold text-black">No Cookie Stands Available</h2>) : 
        (<ReportTable rows={rows} totals={totals}/>) 
      } 
      <Footer counter = {counter}/>
    </>
    )

}
export default CookieStandAdmin