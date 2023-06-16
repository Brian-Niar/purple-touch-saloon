import './App.css';
import {Routes, Route} from 'react-router-dom'
 import {AboutPage, BookingPage, CareerPage, ContactPage, DreadLocks, FacialPage, HairServicesPage, Home, ManicurePage, PedicurePage} from './pages';
import { Footer, Header, Page404, PreFooter } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes basename="/">
         <Route path='/' element={<Home/>}/>
         <Route path='/hair' element={<HairServicesPage/>}/>
         <Route path='/facial' element={<FacialPage/>}/>
         <Route path='/manicure' element={<ManicurePage/>}/>
         <Route path='/pedicure' element={<PedicurePage/>}/>
         <Route path='/dreadlocks' element={<DreadLocks/>}/>
         <Route path='/enroll' element={<BookingPage/>}/>
         <Route path='/career' element={<CareerPage/>}/>
         <Route path='/contact' element={<ContactPage/>}/>
         <Route path='/vacancy' element={<Page404/>}/>
         <Route path='/about' element={<AboutPage/>}/>
       </Routes>
       <PreFooter/>
       <Footer/>
    </div>
  );
}

export default App;
