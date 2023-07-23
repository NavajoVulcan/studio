import styles from './Description.module.css';
import React from 'react';

function recipeAuthor() {
   const authorLink = "https://www.cowboysindians.com/2021/11/freddie-bitsoie-new-native-kitchen/#";
   const authorPhoto = "https://www.cowboysindians.com/wp-content/uploads/2021/11/Food1221_freddie1.jpg";
   const authorName = "Freddie Bitsoi";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

//class RecipeDescription extends React.Component {
export default function RecipeDescription () {
//    render (
    return (
        <div> 
        <div>
           <h1>Recipe Title</h1>
           <p>Short recipe description</p>
        </div>
        <recipeAuthor />
     </div>
    )
}



















