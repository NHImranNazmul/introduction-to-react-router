import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetail from './Components/PostDetails/PostDetail.jsx';
import ToDos from './Components/ToDos/ToDos.jsx';
import ToDoDetails from './Components/ToDoDetails/ToDoDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        // for data load
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      // 1. make dynamic  2. send a parameter named params 3. access from userDtails
      {
        path: '/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },

      {
        path: '/post/:postId',
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        element: <PostDetail></PostDetail>
      },
      {
        path: '/toDos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/todos'),
        element:<ToDos></ToDos>
      },
      {
        path: '/toDo/:toDoId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/todos/${params.toDoId}`) ,
        element: <ToDoDetails></ToDoDetails>
      }
    ]
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
