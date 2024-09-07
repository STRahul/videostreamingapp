import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./components/WatchVideo";
import MainContainer from "./components/MainContainer";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./components/Layout";
import SearchContainer from "./components/SearchContainer";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: 'watch',
        element: <WatchVideo />
      },
      {
        path: 'search',
        element: <SearchContainer />
      }
    ]
  }
])


function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </Provider>
  )
}

export default App
