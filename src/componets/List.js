import ListItem from "./ListItem";

function List({ list, setList ,text1}) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <ListItem
            setList={setList}
            list ={list}
            text1={text1}
            index={index}
            element={element}
            key={index}
          />
        );
      })}
    </>
  );
}

export default List;
