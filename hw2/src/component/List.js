import ListItem from "./ListItem";

function List({list,setList}){


return(
    <>
    <div>
        <h1>ToDO</h1>
   {list.map((element,index)=>{
       return  <ListItem 
       list={element} 
       setList={setList}
       index={index}
       />
   
   })} 
    </div>
    
</>
)
}
export default List;