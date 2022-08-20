
function Photo(props) {
    return (
        <li className="Photo">
            <img className="photo-element" src={props.photo} alt='/'
            onClick={()=>props.clickPhotoHandler(props.avatarId)}></img>
        </li>
    );
  }
  
  export default Photo;
  