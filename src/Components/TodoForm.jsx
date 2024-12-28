import { useState } from "react"
import Todoitem from "./Todoitem"

function Todoform(props)
{
    const array=props.arr
    const setarray=props.setarr
    

    
    return(
        <div className="bg-[#89CFF0] p-5 border rounded-md flex-grow">
          <h1 className="text-2xl font-medium">Today's Activity</h1>
          {
            array.length==0?"You don't have any Activity today":""
          }
          

          {
            array.map((item,index)=>{
                return(<Todoitem value={item.value} index={index+1} id={item.id}  arr={array} setarr={setarray}/>)
            })
          }
        </div>
    )
}
export default Todoform