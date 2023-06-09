import './App.css';
import Cards from './components/Cards/Cards';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import axios from 'axios';  
import {Routes, Route, useLocation, useNavigate}from 'react-router-dom'
import About from './components/About/About';
import Detail from './components/Detail';
import Form from './components/Form';
const EMAIL = 'urielcastillo891@gmail.com';
const PASSWORD = 'uriel03cas';

function App() { 

   
   
   
   const[characters, setCharacters] = useState([])
   
   const{pathname}= useLocation()
   
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
  
   
   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });


}
const onClose=(id) => {
   setCharacters(characters.filter((char) => {
      return char.id !== Number(id) 
   }))

   }
   return (
      
        
      <div className='App'>
          { pathname !== '/' && <NavBar onSearch={onSearch} />}
<hr />
          <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/About' element={<About/>} />
          </Routes>
      </div>
   );
}

export default App;
