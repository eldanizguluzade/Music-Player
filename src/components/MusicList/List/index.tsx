import { useEffect, useState } from 'react';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import axios from 'axios';

type ListProps = {
  data: any;
  choosed: (item:any) => void;
 }

const List: React.FC<ListProps> = (props) => {
  const [newData, setNewData] = useState<any>();
  const mergedData = newData || props?.data;
  const [playedMusic, setPlayedMusic] = useState<any>();


 const pushData = async (data:any) => {

    const res = await axios.put('https://music-player-cb240-default-rtdb.firebaseio.com/.json', { ...data },
  {
    // headers:{
    //   'Content-Type': 'application/json;charset=utf-8'
    // }
  });


}

 const changeVisibility = (music:any, index:number) => {

    const changedVisibility = props.data.map((item:any,count:number)=>{
      if(count===index){
        item.hide = Number(!item?.hide);
      }
      return item;
    })

   setNewData(changedVisibility);


} 


 const playMusic = (item:any, index:number) => {
    if(item.hide) return;

    props.choosed(item);
    setPlayedMusic(item);

}

 const checkerPlayedIndex = ({path}:any) => {
  if(path === playedMusic?.path)
     return true;
}


 useEffect(()=>{
 if(!newData) return;
 
  pushData(newData);

 
},[newData]);

    return (
      <ul>
        { 
        mergedData && 
        mergedData.map((item:any, index:number) => {
            return (
                <li key={index}>
                    <a onClick={()=> changeVisibility(item, index) } > 

                    {item?.hide ?  
                       <VisibilityOff /> : <Visibility /> }
                    </a>

                    <a 
                      onClick={()=>playMusic(item, index)} 
                      className={item?.hide && "hide"}> 

                     <span className={checkerPlayedIndex(item) && "playing"}>
                       {item.title}
                      </span>

                    </a>
                    
                 </li>
            );
          })
        }
      </ul>
    )
  
}

export default List;

