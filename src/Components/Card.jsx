const Card=(props)=>
{
    return(
        <div style={{background:props.back}} className="px-5 py-5 text-center border rounded-md flex-grow">
            <h1 className="text-2xl font-medium">{props.title}</h1>
            <p>{props.value}</p>
      </div>  
     
    )
}
export default Card