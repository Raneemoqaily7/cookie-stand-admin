import { useState } from "react" ;



function CreateForm ({TableHandler}) {

    // const [data ,setQuestion] =useState()
    // function placeHolder (e) {
    //     e.preventDefault();
        
    //     const question ={
    //     location :e.target.location.value,
    //     minCustomers :e.target.minimum.value,
    //     maxCustomers :e.target.maximum.value,
    //     avgCookies :e.target.avg.value,

    //     }
    //     setQuestion(question);
        
    // }

    return(
        <>
        <div className="grid grid-cols-1  justify-items-center  ">
        
        <form onSubmit = {TableHandler}className="p-5 bg-[#6ee7b7] font-bold w-3/4 m-3 grid gap-0 md:grid-cols-1  rounded shadow-lg justify-center ">
            
            <h2 className="text-4xl text-white font-[poppins] text-center" > Create Cookie Stand </h2>
            <div className="items-start">
            <label> 
                Location
            <input type="text" name="loc"  className="w-full h-10 "/>
            </label>
            </div>
           <br/>
           <div className ="grid grid-cols-4 ">
            <label  > 
                Minimum Customers Per Hour
                <input type="text" name ="min" className="text-xl" />
            </label>

            <label> 
                Maximum Customers Per Hour
                <input type="text" name="max"  className="text-xl" />
            </label>

            <label> 
               Average Cookies Per Sale
                <input type="text" name="avg"   className="text-xl"/>
            </label>



             <input type="submit" value="Create" className="box-content h-10 w-25 p-6 border-2 bg-[#059669] rounded-lg cursor-pointer text-xl font-serif"/>
             </div>
             <br/>
        </form>
        <div className="font-[poppins] text-center">
        {/* <p>Report Table Coming Soon...</p> */}
        <br/>
        {/* <p >{JSON.stringify(data)}</p> */}
        </div>
            
        </div>
        </>
    )
}

export default CreateForm