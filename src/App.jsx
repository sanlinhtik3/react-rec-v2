
const App = () => {
  const shopping = ['BMW', 'Ford', 'Audi', 'Orange', 'Mango']
  console.log(shopping)

    return (
      <>
        <h1>React Lists</h1>
        <ul>
          {shopping.map((sh,index) => (
            <li key={index}>{sh}</li>
          ))}
        </ul>
      </>
    );
}

export default App