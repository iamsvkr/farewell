import Card from '../Card/card';
import { Details } from '../../Utils/const1';
import Profile from '../Profile';
import './styles.scss';
import GIFCard from '../GifCard';
import { useState } from 'react';

const Home = () => {

  const [index, setIndex] = useState(0);

    return (
      <div>
          <Profile />
          <GIFCard data={Details[0]} rightAnswer="manish" />
          {/* <div className = "Home" >
            {
              Details.map(element => <Card  data = {element}/>)
            }
          </div> */}
      </div>
    );
  }
  
export default Home;
  