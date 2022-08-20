
function DownloadImage(props) {
    return (
      <div className="DownloadImage">
        <button onClick={() => {props.downloadHandler()}}>Добавить фотографию</button>
      </div>
    );
  }
  
  export default DownloadImage;
  