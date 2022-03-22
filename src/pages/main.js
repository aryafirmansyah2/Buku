import React from 'react'
import{Routes, Route} from 'react-router-dom'

import Beranda from './beranda';
import Karya from './karya';
import Kontak from './kontak';
import TentangSaya from './tentangsaya';
import Gallery from './Gallery';


 const Main = () => {
  return(
  <Routes>
      <Route exact path='/' element={<Beranda/>}/>
      <Route path='/tentangsaya' element={<TentangSaya/>}/>
      <Route path='/karya' element={<Karya/>}/>
      <Route path='/kontak' element={<Kontak/>}/>
      <Route path="/gallery" element={<Gallery/>} />
  </Routes>
  )
}
export default Main;