import React from 'react'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes"

function App() {
  const routes=createBrowserRouter(AppRoutes)
  return<>
  <RouterProvider router={routes}/>
  </>
}

export default App