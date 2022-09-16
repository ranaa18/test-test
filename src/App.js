import Navbar from './Components/Navbar/NavbarComponent'
import HomePage from './pages/HomePage'
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursePage from './pages/CoursePage';

export const SearchContext = createContext({});

function App() {
  const [search, setSearch] = useState("")
  return (
    <Router>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="App position-relative">
          <div>
            <Navbar />
          </div>
          
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/home/:id' element={<CoursePage />}></Route>
          </Routes>
        </div>
      </SearchContext.Provider>

    </Router >
  );
}

export default App;
