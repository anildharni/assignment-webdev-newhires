import Navbar1 from './Gaurav/Navbar';
import Content1 from './Gaurav/Content';
import Navbar2 from './DivyaAlok/Navbar';
import Content2 from './DivyaAlok/Content';
import './App.css'
import { MyContext } from './ContextProvider';
import { useContext } from 'react';

function LandingPage() {

  const ctx = useContext(MyContext)

  return (
    <>
      {
        ctx.user ?
          <div className="App">
            <Navbar1 />
            <Content1 />
          </div>
          :
          <div className='content-wrapper'>
            <Navbar2 />
            <Content2 />
          </div>
      }
    </>
  );
}

export default LandingPage;
