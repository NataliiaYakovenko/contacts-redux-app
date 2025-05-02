import { Link, BrowserRouter as Router } from "react-router-dom";
import ContactPage from "./pages/ContactsPage/ContactPage";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/contacts">
          <ContactPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
