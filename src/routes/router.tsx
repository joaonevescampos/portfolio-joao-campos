import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PublicLayout } from '../layouts/PublicLayout'
import { About } from '../pages/About'
import { Experience } from '../pages/Experience'
import { Home } from '../pages/Home'
import { Cover } from '../pages/Cover'
import { Client } from '../pages/Client'
import { Projects } from '../pages/Projects'
import { Skills } from '../pages/Skills'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Cover /> },
      { path: '/client', element: <Client /> },
      { path: '/company', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/experience', element: <Experience /> },
      { path: '/skills', element: <Skills /> },
      { path: '/projects', element: <Projects /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])