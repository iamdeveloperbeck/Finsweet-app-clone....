import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Media } from './pages/Media';
import { Whatwedo } from './pages/Whatwedo';
import { Donation } from './pages/Donation';
import { Project2 } from './pages/Project2';
import { Blog } from './pages/Blog';
import { Events2 } from './pages/Events2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/media' element={<Media />} />
        <Route path='/whatwedo' element={<Whatwedo />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/donation' element={<Donation />} />
        <Route path='/projects' element={<Project2 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/events2' element={<Events2 />} />
      </Routes>
    </>
  );
}

export default App;
