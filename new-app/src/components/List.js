import ListItem from "./ListItem";

function List({ list, setList }) {
  return (
    <>
      {list.map((element, index) => {
        return (
          <ListItem
            setList={setList}
            number={element.number}
            text={element.text}
            index={index}
            key={index}
          />
        );
      })}
    </>
  );
}

export default List;
