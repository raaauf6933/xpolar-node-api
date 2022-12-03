import express, { Request, Response } from 'express';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/test_route',
    route: (_req: Request, res) => {
      res.status(200).send('OK');
    },
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
