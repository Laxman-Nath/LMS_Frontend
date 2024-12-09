
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './components/Dashboard/Dashboard'
import './index.css'
import { RootLayout } from './components/Root/RootLayout'
import { Books } from './components/Books/Books'
import { Home } from './components/Home/Home'

function App() {

const router=createBrowserRouter([{
  path:"/",
  element:<RootLayout/>,
  children:[
    {
      index:true,
      element:<Home/>
    }
    ,{
      path:"/books",
      element:<Books/>
    }
  ]
}])


  return (
   <RouterProvider router={router}/>
  )
}

export default App
