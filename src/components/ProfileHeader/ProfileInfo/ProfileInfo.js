import DownloadImage from "../DownloadImage/DownloadImage";
import Photo from "./PhotosList/Photo/Photo";
import PhotoList from "./PhotosList/PhotosList";

function ProfileInfo(props) {
    return (
        <div className="ProfileInfo">
            <div className="profile-info-block">
                <img className="avatar" src={props.profileData.photos[props.profileData.avatar]} alt='/'/>
                <PhotoList photos={props.profileData.photos} >
                    {photos => photos.map((p, id) => 
                    (<Photo photo={p} clickPhotoHandler={props.clickPhotoHandler}
                        avatarId={id} key={id}/>))}
                </PhotoList>
                <p>{props.profileData.name}</p>
                <p>{props.profileData.age}</p>
            </div>
            <DownloadImage downloadHandler={props.downloadHandler}/>
        </div>
    );
  }
  
  export default ProfileInfo;
  