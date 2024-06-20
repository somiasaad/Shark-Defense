
import About from './component/About';
import Layout from './component/Layout';
import Login from './component/login';
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Home from './component/home';
// import Login from './component/login';
// import userGuide from './component/UserGuide.js';

import Signup from './component/Signup';
import Test from './component/Testing/Test.js';

function App() {
  const [Sign, setSign] = useState(false)

  const location = useLocation();

  useEffect(() => {
      if (location.pathname === '/') {
          sessionStorage.clear();
      }
  }, [location]);
  
  return (
    <div className="App" >
      <Layout>
        <Home />
        <About />

        <userGuide />

        {/* <Service7 /> */}
        {/* <Service6 /> */}
        {/* <Service5 /> */}
        {/* <Service4 /> */}
        {/* <Service3 /> */}
        {/* <Service2 /> */}
        {/* <Service1 /> */}
        {/* <Service8 /> */}
        <Login />
        <Signup />
        <Test />
        {Sign ? <Login SeSign={setSign} /> : <Signup SeSign={setSign} />}
      </Layout>

    </div >
  );
}

export default App;
