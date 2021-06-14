import React from 'react';
import './Coin.css';
const coin = ({name,image,Symbol,price,volume,priceChange}) =>{
    return(
     <div className = "natti">
         <div className = "patti">
             <div className = "kitti">
            <img src = {image} alt = "crypto"/>
            <h1>{name}</h1>
            <p className = "para">{Symbol}</p>
             </div>
             <div className = "kara">
                 <p className = "nara">${price}</p>
                 <p className = "lara">${volume.toLocaleString()}</p>
                 {priceChange < 0 ? (
                     <p className = "red">
                         {priceChange.toFixed(2)}%
                     </p>
                 ):
                 (
                     <p className = "green">
                         {priceChange.toFixed(2)}%
                     </p>
                 )
                 }
             </div>
         </div> 
             
        </div>
    );
}
export default coin;