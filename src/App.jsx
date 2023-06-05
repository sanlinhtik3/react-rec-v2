// In react, we can conditionally render components.
// if statement
// logical && Operator
// Ternary Operator ==> // conditional ? true : false

const App = () => {
  const love = true

  // if(love) {
  //   return <h1>Love you so much.</h1>
  // }


    return (
      <>
        <h1>React Conditionals</h1>
        {/* <h1>I can't love you.</h1> */}
        {/* {love && <h1>I love you.</h1>} */}
        {love ? <h1>I love you.</h1> : <h1>I can't love you.</h1>}
      </>
    );
}

export default App