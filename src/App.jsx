const App = () => {

  const handleClick = () => {
    alert("Hello")
  }

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  // measure
  // check

  return (
    <div>
      <h1>Ract Event</h1>
      <button onClick={handleClick}>Click Me</button>
      <input type="text" onChange={handleChange} />
      {/* <button onMouseOver={() => console.log('Hover')}>Hover me</button> */}
    </div>
  );
};

export default App