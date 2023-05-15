const Phone = ({children}) => {
  // const numbers = ['one', 'two', 'three']
  // const [a, b, c] = numbers;
  // console.log(c)

  // const { brand } = props

  // console.log(brand);

  return <h1>{children}</h1>;
};

const App = () => {
  return (
    <>
      <div>React Props</div>
      <Phone>
        <h1>iPhone</h1>
        <h2>14</h2>
        <h3>ios</h3>
      </Phone>
    </>
  );
}

export default App