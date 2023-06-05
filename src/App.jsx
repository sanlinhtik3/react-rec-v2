import { useState } from "react"
import TextInput from './components/TextInput'

const App = () => {
  const [inputs, setInputs] = useState({})

  // Destructuring
  // const fruits = ['apple', 'orange', 'mango']
  // const [a, b, c] = fruits
  // console.log(c)


  const handleChange = (event) => {
    // const name = event.target.name
    // const value = event.target.value;

    const {name, value} = event.target
    setInputs((pre) => ({...pre, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputs)
  }


    return (
      <>
        <h1>React Form</h1>
        <form onSubmit={handleSubmit}>
          <TextInput name="username" onChange={handleChange} />
          <TextInput name="email" onChange={handleChange} />
          <button>Signup</button>
        </form>
      </>
    );
}

export default App