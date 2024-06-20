
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './component/login';
import Setting from './Pages/Setting';


import Service1 from './component/Services/Service1'
import Service2 from './component/Services/Service2'
import Service3 from './component/Services/Service3'
import Service4 from './component/Services/Service4'
import Service5 from './component/Services/service5'
import Service6 from './component/Services/service6'
import Service7 from './component/Services/service7'
import Service8 from './component/Services/Service8'
import ScreenShot from './component/Services/S creenshot'
import Graph from './component/Services/Graph Visualization'
import Whois from './component/Services/Whois'
import Submit from './component/Services/Submit'
import Reputation from './component/Services/IPReputation'
import Threat from './component/Services/Threat'


import Signup from './component/Signup'
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home';
import About from './component/About';
import UserGuide from './component/UserGuide';
import Test from './component/Testing/Test';
import Portfolio from './Pages/Setting';
import { Provider } from 'react-redux';
import store from './RTK/store';


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [

      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Portfolio />,
      },
      {
        path: "/userGuide",
        element: <UserGuide />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },

      {
        path: "/service1",
        element: <Service1 />,
      },
      {
        path: "/service2",
        element: <Service2 />,
      }, {
        path: "/service3",
        element: <Service3 />,
      },
      {
        path: "/service4",
        element: <Service4 />,
      },
      {
        path: "/service5",
        element: <Service5 />,
      },
      {
        path: "/service6",
        element: <Service6 />,
      },
      {
        path: "/service7",
        element: <Service7 />,
      },
      {
        path: "/service8",
        element: <Service8 />,
      },
      {
        path: "/Threat",
        element: <Threat />,
      },
      {
        path: "/ScreenShot",
        element: <ScreenShot />,
      },
      {
        path: "/Graph",
        element: <Graph />,
      },
      {
        path: "/Submit",
        element: <Submit />,
      },
      {
        path: "/Whois",
        element: <Whois />,
      },
      {
        path: "/Reputation",
        element: <Reputation />,
      },


    ],
  },


]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />

    </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
