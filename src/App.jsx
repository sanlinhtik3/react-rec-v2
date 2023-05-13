import React from "react";

const Phone = ({ children }) => {

  // const info = ['ios 14', 'black']
  // const [name, color] = info
  // console.log(color)

  // const {brand} = props
  // console.log(brand)

  // console.log(brand)


  return (
    <h1>{children}</h1>
  );
}

const App = () => {
  return (
    <div>
      <h1>Ract Props</h1>
      <Phone>Phone</Phone>
    </div>
  );
};

export default App