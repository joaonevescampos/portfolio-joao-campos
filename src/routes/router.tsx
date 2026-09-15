import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from '../layouts/PublicLayout'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Skills } from '../pages/Skills'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/experience', element: <Experience /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])