import { Link, useNavigate,useLocation } from "react-router-dom"
import { useState } from "react"
function Login(props)
{

    const navigate=useNavigate()

    const user=props.user
    const setuser=props.user

    
    const [euser,seteuser]=useState("")
    const [epass,setepass]=useState("")

    const[reguser,setreguser]=useState(true)


    const userfn=(eve)=>
    {
        seteuser(eve.target.value)

    }

    const passfn=(event)=>
    {
        setepass(event.target.value)
    }

    function handleclick()
    {

        var userfound=false
        user.forEach((item)=>
        {
            if(item.username===euser && item.password===epass)
            {
                console.log("Sucessfull")
                userfound=true
                navigate("/landing",{state:{user:euser}})
            }
        })
        if (userfound==false)
        {
            console.log("Failed")
            setreguser(!reguser)
        }
    }






    return(<div className="flex flex-col flex-wrap">
    <div className="p-10 bg-black">
        <div className="bg-slate-300 p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi👋</h1>
            {
            reguser?<p>I help you to Manage activities after login :)</p>:<p className="text-red-700">Please Sign up to Login</p>
            }
        <div className="flex flex-col mt-3">    
        <input className="p-2 w-52 border border-black rounded-md " value={euser} type="text" onChange={userfn} placeholder="User-name"/> <br />
        <input className="p-2  w-52 border border-black rounded-md" value={epass} type="password" onChange={passfn} placeholder=" Your Password"/> <br />
        <button className="bg-violet-400 p-2 border rounded-xl w-52" onClick={handleclick}>Login</button>
        </div>
        <p>Don't have an account ? <Link to={"/signup"} className="underline p-1">Sign-Up</Link></p>
        </div>
    </div>
    </div>)

}
export default Login