import { Home,
         List,
         Single,
         New,
         Login
 } from "./pages";  

 import { userInput, productInputs } from "./formSource";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/dark.scss'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInput} title="Add New User" />} />
            </Route>


            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Products"/>} />
            </Route>

          </Route>
        </Routes>
      </Router>

     

    </div>
  );
}

export default App;
