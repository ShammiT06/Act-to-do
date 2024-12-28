import { Link,useNavigate,useNavigation } from "react-router-dom"
import { useState } from "react"

function Signup(props)
{
    const user=props.user
    const setuser=props.setuser
    const penta=useNavigate()


    const [euser,seteuser]=useState("")
    const [epass,setepass]=useState("")
    const [conepass,setconepass]=useState("")


    function userfun(event)
    {
        seteuser(event.target.value)
    }

    function userpass(eve)
    {
        setepass(eve.target.value)
    }

    function conpass(pop)
    {
        setconepass(pop.target.value)
    }


    function newuser()
    {
        console.log("submitted")
        setuser([...user,{username:euser,password:epass}])
        penta("/login")

    }


    






    return (<div className="bg-black p-10">
        <div className="bg-slate-300 p-10 m-3">
            <h1 className="text-2xl font-medium">Hey Hi..👋</h1>
            <p>Please Login to Enjoy Our Deals</p>
            <input value={euser} onChange={userfun} className="mt-2 p-2 border border-black rounded-md" type="text" placeholder="your user-name" />
            <br />
            <input value={epass} onChange={userpass} className="mt-2 p-2 border border-black rounded-md" type="password" placeholder="your password" />
            <br />
            <input value={conepass} onChange={conpass} className="mt-2 p-2 border border-black rounded-md" type="password" placeholder="confirm your password" /> 
            <br />
            <button onClick={newuser} className="bg-orange-400 p-2 mt-2 border rounded-md">Submit</button>
            <p>Already have an Account ?<Link to={"/login "} className="underline p-1">Login</Link></p>
        </div>
    </div>)

}
export default Signup