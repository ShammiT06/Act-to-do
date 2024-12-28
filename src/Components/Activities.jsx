import { useState } from "react"


function Activities(props) {
    const array=props.arr
    const setarray=props.setarr



    const [input,setinput]=useState("")


    const addbtn=()=>
    {
        setarray([...array,{id:array.length+1,value:input}])
        setinput([])
    }




    const inputs=(event)=>
    {
        setinput(event.target.value)
    }

    return (<div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
            <input type="text" value={input} placeholder="Next Activity ?" onChange={inputs} className="p-1 bg-transparent border border-black" />
            <button className="bg-black text-white p-1 border border-black" onClick={addbtn}>ADD</button>
        </div>
    </div>)

}
export default Activities