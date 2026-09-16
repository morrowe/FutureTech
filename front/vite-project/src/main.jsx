import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header/header';
import Footer from './footer/footer';

import Page1 from './page1/page1.jsx'
import Page2 from './page2/page2.jsx'
import Page3 from './page3/page3.jsx'
import Page4 from './page4/page4.jsx'
import Page5 from './page5/page5.jsx'
import Page6 from './page6/page6.jsx'

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/page4' element={<Page4/>}/>
        <Route path='/page5' element={<Page5/>}/>
        <Route path='/page6' element={<Page6/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </StrictMode>
);