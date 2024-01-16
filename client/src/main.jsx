import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/main.scss'

// Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import AllTrails from './components/AllTrails.jsx'
import SingleTrail from './components/SingleTrail.jsx'
import Profile from './components/Profile.jsx'
import CreateTrail from './components/CreateTrail.jsx'
import EditTrail from './components/EditTrail.jsx'
import CreateHiker from './components/CreateHiker.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
// Loaders
import { trailLoader, singleTrailLoader } from './utils/loaders/trail.js'
import { createTrail, deleteTrail, editTrail } from './utils/actions/trail.js'
import { createHiker, deleteHiker } from './utils/actions/hiker.js'
import { getRegions } from './utils/loaders/regions.js'
import { loginUser, registerUser } from './utils/actions/auth.js'

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
        path: '/trails/create',
        element: <CreateTrail />,
        action: async ({ request }) => createTrail(request),
        loader: getRegions
      },
      {
        path: '/trails/:trailId',
        element: <SingleTrail />,
        loader: async ({ params }) => singleTrailLoader(params.trailId),
        action: async ({ params }) => deleteTrail(params.trailId)
      },
      {
        path: '/trails/:trailId/edit',
        element: <EditTrail />,
        action: async ({ request, params }) => editTrail(request, params.trailId),
        loader: async ({ params }) => singleTrailLoader(params.trailId)
      },
      {
        path: '/hiker/create',
        element: <CreateHiker />,
        action: async ({ request }) => createHiker(request)
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
