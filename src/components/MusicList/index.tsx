import { IMusicItem } from "../../model";
import List from "./List";

type MusicListProps = {
  data: any;
  choosed: (item:IMusicItem) => void;
 }

const MusicList: React.FC<MusicListProps> = (props) => {
      return (
        <div className="MusicList">
          <div className="header"> Music List </div>
          <hr />
          <div className="container">
             <List data={props.data} choosed={(music:IMusicItem)=> props.choosed(music)}/>
          </div>
        </div>
    )
}
export default MusicList;