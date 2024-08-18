import { Router as expressRouter, Router } from 'express';
import standingsRoute from './standings.route';

export { router as apiDocsRouter } from './apidocs';
export { router as redocRouter } from './redoc';

export const router = expressRouter();

interface IRoute {
  path: string;
  route: Router;
}

const defaultIRoute: IRoute[] = [
  {
    path: '/',
    route: standingsRoute,
  },
];

defaultIRoute.forEach((route) => {
  router.use(route.path, route.route);
});
