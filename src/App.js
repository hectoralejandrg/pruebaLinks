import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import { ProvideAuth } from "./auth/AuthProvider";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Navbar />
          <Switch>
            <ProtectedRoute path="/detail/:id">
              <Detail />
            </ProtectedRoute>
            <ProtectedRoute path="/form">
              <Form />
            </ProtectedRoute>
            <ProtectedRoute path="/home">
              <Home />
            </ProtectedRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
}

export default App;
