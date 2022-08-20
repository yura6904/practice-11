import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Fact from './components/FactsList/Fact/Fact';
import FactsList from './components/FactsList/FactsList';
import ProfileInfo from './components/ProfileHeader/ProfileInfo/ProfileInfo';
import { changeAvatar, download } from './slice/profileSlice';
import { changeFactsNumber } from './slice/factsSlice';

function App() {
  const profileData = useSelector((state) => state.profileData)
  const factsData = useSelector((state) => state.factsData)
  const dispatch = useDispatch()

  const downloadHandler = () => {
    let url = prompt('Введите URL: ')
    dispatch(download(url))
  }
  const onChangeHandler = (number) => {
    dispatch(changeFactsNumber(number))
  }
  const clickPhotoHandler = (id) => {
    dispatch(changeAvatar(id))
  }

  const createList = (facts, factsNumber) => {
    let list = []
    let num = 0

    factsNumber <= facts.length ? 
    num = factsNumber : 
    num = facts.length

    for (let i = 0; i < num; i++) {
      list.push(<Fact fact={facts[i]} key={i}/>)
    }
    return list
  }

  return (
    <div className="App">
      <ProfileInfo profileData={profileData} downloadHandler={downloadHandler}
        clickPhotoHandler={clickPhotoHandler}/>
      <FactsList facts={factsData.facts} factsNumber={factsData.factsNumber}
        onChangeHandler={onChangeHandler} maxNumberOfFacts={factsData.facts.length}>
        {createList}
      </FactsList>
    </div>
  );
}

export default App;
