import './App.css';
import Greetings from './component/Greetings';
import IdCard from './component/IdCard';
import LikeButton from './component/LikeButton';
import Random from './component/Random';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName={'Doe'}
        firstName={'John'}
        gender={'male'}
        height={178}
        birth={'1992-07-14'}
        picture={'https://randomuser.me/api/portraits/men/44.jpg'}
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={'1988-05-11'}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <br />
      <br />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <br />
      <br />

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <br />
      <br />

      <LikeButton />

    </div>
  );
}

export default App;
