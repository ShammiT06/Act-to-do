import { useLocation } from "react-router-dom"
import Card from "../Components/Card";
import Header from "../Components/Header";
import TodoConatiner from "../Components/TodoContainer";

function Landing()
{
    const data=useLocation()
    return (<div className="bg-black p-16">
        <div className="bg-[#e5dbd9] p-10 border rounded-md">
          <Header name={data.state.user}/>
          {/*Card*/}
          <div className="flex justify-between gap-5 my-5 flex-wrap">  
          <Card back={"#8272DA"} title={23} value={"Vellore"} />
          <Card back={"#FC6662"} title={"26 December 2024"} value={"05:30:09"} />
          <Card back={"#fca301"} title={"Built Using"} value={"React"} />
          </div>  
          <TodoConatiner />
        </div>
        </div>
    );

}
export default Landing