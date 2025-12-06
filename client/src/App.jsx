import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import AdminDashboard from "./components/Admin/AdminDashboard"
import HeroSectionDetails from './components/Admin/HeroSectionDetails';
import HeroSectionUpdate from './components/Admin/HeroSectionUpdate';
import HeroSectionWatches from './components/Admin/HeroSectionWatches';
import HeroWomensWatches from './components/Admin/HeroWomensWatches';

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admindashboard' element={<AdminDashboard />} />
      <Route path='/herosection' element={<HeroSectionDetails />} />
      <Route path='/herosection/update/:id' element={<HeroSectionUpdate />} />
      <Route path='/herowatches' element={<HeroSectionWatches />} />
      <Route path='/herowomenwatches' element={<HeroWomensWatches />} />
    </Routes>
    </div>
  )
}

export default App
