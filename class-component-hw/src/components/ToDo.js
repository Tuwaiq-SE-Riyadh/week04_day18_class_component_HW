
import ToDoList from "./ToDoList";

function ToDo({names, setTasks}) {
    return (
      <>
          {names.map((element,index) => {
            return <ToDoList name = {element.name} index = {index} key = {index}  setTasks={setTasks}/>
            // setList={setTasks} ونرسل هالفنكشن برضو
            // index={index} نرسل الانديكس
        })}
      </>
      
    );
  }
  
  export default ToDo;

