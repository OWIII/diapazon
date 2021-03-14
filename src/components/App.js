import { Navbar, Nav } from "react-bootstrap";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import { Measures } from "./measures"
import { Contacts } from "./contacts"

const App = () => (
  <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/">Diapazone</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Измеритель</Nav.Link>
          <Nav.Link as={NavLink} to="/contacts">Контакты</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/">
          <Measures />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
      </Switch>
  </div>
);

export default App;
