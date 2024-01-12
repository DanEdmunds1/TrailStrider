import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/main.scss'

// Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import AllTrails from './components/AllTrails.jsx'
import SingleTrail from './components/SingleTrail.jsx'

// Loaders
import { trailLoader, singleTrailLoader } from './utils/loaders/trail.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/trails',
        element: <AllTrails />,
        loader: trailLoader
      },
      {
        path: '/trails/:trailId',
        element: <SingleTrail />,
        loader: async ({ params }) => singleTrailLoader(params.trailId)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
