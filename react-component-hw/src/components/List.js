import ListItem from "./ListItem";

function List({ list, setList }) {
  // console.log(setList);
  return (
    <>
      {list.map((element, index) => {
        return (
          <ListItem
            setList={setList}
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
