import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import WatchVideo from "./components/WatchVideo";
import Header from "./components/Header";

const router = createBrowserRouter([
  {
    path: '/',
    element: <VideoContainer />
  },
  {
    path: 'watch',
    element: <WatchVideo />
  }
])


function Layout(){
   return(
    <RouterProvider router={router}>
    </RouterProvider>

   )
}

function App() {
  return (
    <>
      <Header />
      <Layout />
    </>
  )
}

export default App
