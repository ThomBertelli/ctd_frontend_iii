import {createBrowserRouter, RouterProvider} from 'react-router-dom'



import { BlogLayout } from './components/BlogLayout'
import { MainLayout } from './components/MainLayout'
import { Lesson02 } from './lessons/Lesson02'
import { Lesson03 } from './lessons/Lesson03'
import { Lesson05 } from "./lessons/Lesson05"
import { Lesson08 } from "./lessons/Lesson08"
import { Lesson13 } from "./lessons/Lesson13"
import { Lesson15 } from "./lessons/Lesson15"
import { Home } from './pages/Blog/home'
import { PostDetail } from './pages/Blog/postDetail'
import { DHGames } from "./pages/DHGames"
import { Login } from "./pages/Login"




function App() {

  const appRouter = createBrowserRouter([
    { 
      path:'',
      element: <MainLayout/>,
      children:[
        {
          path:'lesson02',
          element: <Lesson02/>
        },
        {
          path:'lesson03',
          element: <Lesson03/>
        },
        {
          path:'lesson05',
          element: <Lesson05/>
        },
        {
          path:'lesson08',
          element: <Lesson08/>
        },
        {
          path:'lesson13',
          element: <Lesson13/>
        },
        {
          path:'lesson15',
          element: <Lesson15/>
        },
        {
          path:'dhgames',
          element: <DHGames/>
        },
        {
          path:'login',
          element: <Login/>
        },
      ]
      
    },
    {
      path:'blog',
      element: <BlogLayout/>,
      children:[ 
        {

          path:'',
          element: <Home/>
  
        },

        {

          path:'post/:id',
          element: <PostDetail/>
  
        },
        
        
    
    
      ]
    }


  ])
    

  return (
      <RouterProvider router={appRouter}/>
  )

}

export default App