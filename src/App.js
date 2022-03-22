import React, { Component } from 'react'
import Main from './pages/main'
import { Link } from 'react-router-dom'

 class App extends Component {
  render() {
    return (
      <div><hr/>
        <Link to='/'>Beranda</Link>
        <Link to='/tentangsaya'>TentangSaya</Link>
        <Link to='/karya'>Karya</Link>
        <Link to='/kontak'>Kontak</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link> <hr/>
        <p><Main/></p>
      </div>
    )
  }
}
export default App;