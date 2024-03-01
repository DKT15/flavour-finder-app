import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import JumbotronBackground from './assets/images/JumbotronBackground.jpg'

function Jumbotron() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="jumbotron-container">
        <div className="jumbotron-content">
          <h1>Welcome to Flavour Finder</h1>
          <h5>
            Explore the best flavour the UK has to offer.
          </h5>
        </div>
      </div>
    )
}

export default Jumbotron
