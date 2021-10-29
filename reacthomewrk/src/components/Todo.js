import Item from "./Item";
function Todo({todoL, setTodo}) {
    return(
        <div className="allItem">
            {todoL.map((e,i)=>{
                return <Item item={e} index={i} setTodo={setTodo}/>
            })}
        </div>
    )
}



export default Todo;