import { useEffect, useState } from 'react';
import Control from './Control';

function Player ({item}:any) {
    const [imagesUrl, setImagesUrl] = useState<string>();

   
    const randomImages = () => {
        const randomNumber = Math.floor(Math.random() * 8);
        return `images/${randomNumber}.jpg`
    }

     useEffect(()=>{
         
        setImagesUrl(randomImages); 

     },[item])

   return(
       <div className="Player">
           <div className="header">{item?.title}</div>
           <div className="container">
               {imagesUrl && <img src={imagesUrl} alt={item?.title} />}
           </div>
           <div className="footer">
              <Control music={item}/>
           </div>
       </div>
   )
}


export default Player;