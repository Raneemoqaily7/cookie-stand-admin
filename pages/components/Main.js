
function Main ({questionAskHandler}) {
    

    return (
        
        
        <div className="grid grid-cols-1  justify-items-center  ">
        
        <form onSubmit = {questionAskHandler} className="p-5 bg-[#6ee7b7] font-bold w-3/4 m-6 grid gap-3 md:grid-cols-1  rounded shadow-lg justify-center ">
            
            <h2 className="text-4xl text-white font-[poppins] text-center" > Create Cookie Stand </h2>
            <div className="items-start">
            <label> 
                Location
                <input type="text" name="location"  className="w-full h-10 "/>
            </label>
            </div>
           <br/>
           <div className ="grid grid-cols-4 ">
            <label  > 
                Minimum Customers Per Hour
                <input type="text" name="minimum" className="text-xl" />
            </label>

            <label> 
                Maximum Customers Per Hour
                <input type="text" name="maximum" className="text-xl" />
            </label>

            <label> 
               Average Cookies Per Sale
                <input type="text" name="avg"  className="text-xl"/>
            </label>



             <input type="submit" value="Create" className="box-content h-10 w-25 p-6 border-2 bg-[#059669] rounded-lg cursor-pointer text-xl font-serif"/>
             </div>
             <br/>
        </form>
        
        </div>
        
    
    )
}


export default Main