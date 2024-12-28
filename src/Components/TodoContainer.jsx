import Activities from "./Activities"
import Todoform from "./TodoForm"
import { useState } from "react"
function TodoConatiner() {

  const [array,setarray]=useState([{
    id:1,
    value:"go for a walk"
},
{
id:2,
value:"have a breakfast"
},
{
id:3,
value:"shammi"
}])


    return (
      <div className="flex gap-5 flex-wrap">
        <Activities arr={array} setarr={setarray} />
        <Todoform arr={array} setarr={setarray} />

      </div>
    )

  }

export default TodoConatiner