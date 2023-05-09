import logo from './logo.png'
import './App.css'
import MyButton from './components/MyButton'
import React from 'react'

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      count: 0
    }
  }
  /* const [count, setCount] = useState(0) */

  render () {
    const { count } = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h3 className='title'>Pokédex</h3>
          <MyButton updateCounter={() => this.setState({ count: count + 1 })} />
          <p>{count}</p>
        </header>
      </div>
    )
  }
}
