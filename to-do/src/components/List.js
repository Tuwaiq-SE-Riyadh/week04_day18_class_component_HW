import ListItem from "./ListItem";

function List({ list, setList }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <ListItem
            setList={setList}
            task={element.task}
            index={index}
            key={index}
          />
        );
      })}
    </>
  );
}

export default List;
