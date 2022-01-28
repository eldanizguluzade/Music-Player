import List from "./List";

type MusicListProps = {
  data: any;
  choosed: (item:any) => void;
 }

const MusicList: React.FC<MusicListProps> = (props) => {

      return (
        <div className="MusicList">
          <div className="header"> Music List </div>
          <hr />
          <div className="container">
             <List data={props.data} choosed={(music:any)=> props.choosed(music)}/>
          </div>
        </div>
    )
}

export default MusicList;