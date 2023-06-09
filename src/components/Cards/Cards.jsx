import Card from '../Card/Card'
import style from './Cards.module.css';

const Cards=({characters, onClose})=> {
 return (
   <div className={style.containers}>
      {
         characters.map((char)=>{
         return (
            <Card 
            id={char.id}
            key={char.id}
            name={char.name}
             species={char.species}   
             gender={char.gender} 
             image={char.image}
             origin={char.origin.name}
             status={char.status}
             onClose={onClose}
            />
         )
         })
      }
   </div>
 )
}
export default Cards