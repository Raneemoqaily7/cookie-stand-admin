
function ReportTable(props){
   
   

    

    return (
       
        <>
         <div className="grid grid-cols-1  justify-items-center ">
      <table  className="table-auto border-collapse border border-slate-400 justify-center bg-[#6ee7b7] font-bold w-3/4 "  >
        <thead  className="bg-[#059669]">
          <th>Location</th>
          
                {
                    ["6am","7am","8am","9am","10am","11am","12am","1pm", 
                    "2pm","3pm","4pm","5pm","6pm","7pm"].map(hour => {
                        return (<th >{hour}</th>);
                    })}
            <th>Total</th>
          
        </thead>
        <tbody >
              {
                
                props.rows.map(row => {
                    return(
                        <tr>
                            <td  className="border border-slate-300 ...">
                            {row.location}</td>

                            {
                                row.values.map(num => {
                                    return (<td class="border border-slate-300 ..." >{num}</td>);
                                })
                            }

                            <td class="border border-slate-300 ..." >
                            {row.values.reduce((total, curr) => total += curr, 0)}
                            </td>
                        </tr>
                    );
                })
            }
            
            </tbody>

            <tfoot className="font-bold bg-[#059669]">
                <td className="border border-slate-300 ...">Totals</td>

                {
                    props.totals.map(num => {
                        
                        return (<td className="border border-slate-300">{num}</td>);
                    })
                }

                <td className="border border-slate-300">
                    {props.totals.reduce((total, curr) => total += curr, 0)}
                </td>

            </tfoot>
            
        </table>
        </div>
        </>
    )
  
  
    
}

export default ReportTable