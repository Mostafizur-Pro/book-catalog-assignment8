import express from 'express';
import { CategoryRoutes } from '../modules/category/category.route';
import { userRoutes } from '../modules/user/user.routes';
import { authRoutes } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: authRoutes,
  },
  {
    path: '/categories',
    routes: CategoryRoutes,
  },
  {
    path: '/users',
    routes: userRoutes,
  },
  // {
  //   path: '/profile',
  //   routes: profileRoutes,
  // },
  // {
  //   path: '/categories',
  //   routes: categoryRoutes,
  // },
  // {
  //   path: '/books',
  //   routes: bookRoutes,
  // },
  // {
  //   path: '/orders',
  //   routes: orderRoutes,
  // },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
