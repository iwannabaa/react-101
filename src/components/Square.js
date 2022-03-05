function Square({ index, value, clickHandler, isGameOver }) {
  const onClickHandler = () => {
    if (!isGameOver) {
      clickHandler(index);
    }
  }

  return (
    <div className="square">
      {value && <p>{value}</p>}
      {!value && <button onClick={onClickHandler}>{index + 1}</button>}
    </div>
  );
}

export default Square;
