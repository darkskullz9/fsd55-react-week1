import './App.css'
import User from './User.jsx'

function App() {
  
  const bart = {
    name: 'Bart',
    lastName: 'Simpson',
    image: "./assets/bart.webp"
  }

  const homer = {
    name: 'Homer',
    lastName: 'Simpson',
    image: "./assets/homer.webp"
  }

  return (
    <>
      <User {...bart}/>
      <User {...homer}/>
    </>
  )
}

export default App