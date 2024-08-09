import logo from './logo.svg';
import './App.css';
import AddMovie from './Components/AddMovie';
import SearchMovie from './Components/SearchMovie';
import DeletMovie from './Components/DeletMovie';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddMovie/>}/>
        <Route path='/SearchMovie' element={<SearchMovie/>}/>
        <Route path='/DeletMovie' element={<DeletMovie/>}/>
        <Route path='/ViewAll' element={<ViewAll/>}/>
      <AddMovie/>
      <SearchMovie/>
      <DeletMovie/>
      <ViewAll/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
