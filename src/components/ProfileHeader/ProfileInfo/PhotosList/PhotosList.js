
function PhotoList(props) {
    return (
        <ul className="PhotoList">
            {props.children(props.photos)}
        </ul>
    );
  }
  
  export default PhotoList;
  