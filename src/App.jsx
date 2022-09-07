import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'

import Initial from './pages/initial';

function App() {

  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Initial} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
