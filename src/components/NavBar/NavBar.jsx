import SearchBar from '../SearchBar/SearchBar'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const NavBar=({onSearch})=>{
   return (  <div className={style.NavBar}>
        <SearchBar onSearch={onSearch}/>

        <Link to='/home'>
        <button>
         HOME
        </button>
        </Link>

        <Link to='/About'>
        <button>
         ABOUT
        </button>
        </Link>

    </div>
   )
}
export default NavBar