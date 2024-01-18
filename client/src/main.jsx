import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/main.scss'

// Components
import App from './App.jsx'
import Home from './components/Home.jsx'
import AllTrails from './components/AllTrails.jsx'
import SingleTrail from './components/SingleTrail.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import ReviewTrail from './components/ReviewTrail.jsx'
// Loaders
import { trailLoader, singleTrailLoader } from './utils/loaders/trail.js'
import { createTrail, editTrail } from './utils/actions/trail.js'
import { createHiker } from './utils/actions/hiker.js'
import { loginUser, registerUser } from './utils/actions/auth.js'
import { getAllReviews } from './utils/loaders/reviews.js'
import { createReview } from './utils/actions/review.js'

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
        loader: trailLoader,
        action: async ({ request }) => createTrail(request)
      },
      {
        path: '/trails/:trailId',
        element: <SingleTrail />,
        loader: async ({ params }) => singleTrailLoader(params.trailId),
        action: async ({ request, params }) => editTrail(request, params.trailId)
      },
      {
        path: '/trails/:trailId/review',
        element: <ReviewTrail />,
        action: async ({ request }) => createReview(request),
        loader: async ({ params }) => singleTrailLoader(params.trailId)
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: getAllReviews,
        action: async ({ request }) => createHiker(request)
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
