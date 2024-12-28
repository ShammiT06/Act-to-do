function Todoitem(props)
{
    const array=props.arr
    const setarray=props.setarr




    function handledelete(clicked)
{
    var temp=array.filter(function(list){
        if(list.id==clicked)
        {
            return false
        }
        else
        {
            return true
        }
    })
    setarray(temp)
}

    return(<div className="flex justify-between">
        <p>{props.index}.{props.value} </p>
        <button className="text-red-500" onClick={()=>{handledelete(props.id)}}>Delete</button></div>)

}
export default Todoitem