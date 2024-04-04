import logo from './logo.svg';
import './App.css';
import { Frontpage } from './components/fronpage/frontpage.component';
import { RestuarentComponent } from './components/restuarent/restuarent.component';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/app.router';
import { EducationComponent } from './components/education/education.component';


function App() {
  return (
    <div className="App">


      {/* <Frontpage></Frontpage> */}
      {/* <RestuarentComponent></RestuarentComponent> */}
{/* <EducationComponent></EducationComponent> */}

      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
