import './App.css';
import {useRoutes,Link} from 'react-router-dom';
// import Index from "./views/index"
// import About from "./views/about"
import Count from "./views/count"
import Person from "./views/person"
import routes from "./router/index"

function App() {
  const Outlet=useRoutes(routes)
  console.log(Outlet)
  return (
    <div className="App">
      {Outlet}
      {/* <Outlet></Outlet> */}
    
        
        {/* <Routes>
          <Route path='/' element={<Navigate to="/index"></Navigate>} />
          <Route path='/index' element={<Index />} />
          <Route path='/about' element={<About />} />
        </Routes> */}
    
    <header className="App-header">
        <div>
          <Count></Count>
          <Person></Person>
        </div>
        <p>
          <Link to="/index" className="link">首页</Link>
          <Link to="/about" className="link">about</Link>
        </p>
      </header>
    </div>
   
  );
}

export default App;
