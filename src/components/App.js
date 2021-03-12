import { Navbar, Nav } from "react-bootstrap";
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import { Measures } from "./measures"
import { Contacts } from "./contacts"

const App = () => (
  <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={NavLink} to="/measures">Diapazone</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/measures">Измеритель</Nav.Link>
          <Nav.Link as={NavLink} to="/contacts">Контакты</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/measures">
          <Measures />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/">
          <Redirect to="/measures" />
        </Route>
      </Switch>
  </div>
);

export default App;
