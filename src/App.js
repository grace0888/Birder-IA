import logo from './logo.svg';
import './App.css';
import Home from './Home';
import UploadedImages from './UploadedImages';
import Bookmarks from './Bookmarks';
import SpeciesResults from './SpeciesResults';
import LocationResults from './LocationResults';
import DetailedInformation from './DetailedInformation';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Provider} from './components/ui/provider';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/uploaded-images' element={<UploadedImages/>} />
          <Route path='/bookmarks' element={<Bookmarks/>} />
          <Route path='/species-results' element={<SpeciesResults/>} />
          <Route path='/location-results' element={<LocationResults/>} />
          <Route path='/detailed-information' element={<DetailedInformation/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

/*
MAKING A LINK TO PAGE:

import { Link as ChakraLink } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
<ChakraLink asChild>
  <RouterLink to='/home'>Home</RouterLink>
</ChakraLink>
*/