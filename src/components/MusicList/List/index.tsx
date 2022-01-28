import { useEffect, useState } from 'react';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import axios from 'axios';
import { IMusicItem } from '../../../model';

type ListProps = {
  data: any;
  choosed: (item:IMusicItem) => void;
 }

const List: React.FC<ListProps> = (props) => {
  const [newData, setNewData] = useState<any>();
  const mergedData = newData || props?.data;
  const [playedMusic, setPlayedMusic] = useState<IMusicItem>();


 const pushData = async (data:any) => {
    await axios.put('https://music-player-cb240-default-rtdb.firebaseio.com/.json', { ...data });
}

 const changeVisibility = (index:number) => {
  const changedVisibility = props.data.map((item:IMusicItem,count:number)=>{
   if(count===index){
      item.hide = !item?.hide;
   }
     return item;
 })
   setNewData(changedVisibility);
} 


 const playMusic = (item:IMusicItem) => {
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
        mergedData.map((item:IMusicItem, index:number) => {
            return (
                <li key={index}>
                    <a onClick={()=> changeVisibility(index) } > 
                    {item?.hide ?  
                       <VisibilityOff /> : <Visibility /> }
                    </a>
                    <a 
                      onClick={()=>playMusic(item)} 
                      className={item?.hide ? "hide" : ''}> 

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

