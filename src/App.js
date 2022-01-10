// import Navbar from './Navbar';
// import Content from './Content';
import { ContextProvider } from './ContextProvider';
import LandingPage from './LandingPage';


function App() {
  return (
    <div className="App">
      <ContextProvider>
        <LandingPage />
      </ ContextProvider>
    </div>
  );
}

export default App;
