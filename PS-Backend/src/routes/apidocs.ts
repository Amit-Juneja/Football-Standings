import { NextFunction, Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import openapiDoc from '../generated/openapi.json';

export const router = Router();

router.use('/', (req: Request, res: Response, next: NextFunction) => {
  return next();
});
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(openapiDoc));
