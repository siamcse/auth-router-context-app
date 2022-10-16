import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRouter from './router/PrivateRouter';
import Orders from './components/Orders';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/home',
          element:<PrivateRouter><Home/></PrivateRouter>
        },
        {
          path:'/orders',
          element:<PrivateRouter><Orders></Orders></PrivateRouter>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path: '/register',
          element: <Register/>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
