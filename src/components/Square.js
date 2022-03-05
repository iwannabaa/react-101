function Square({ index, value, clickHandler }) {
  const onClickHandler = () => clickHandler(index);

  return (
    <button className="square" onClick={onClickHandler}>
      {value}
    </button>
  );
}

export default Square;
