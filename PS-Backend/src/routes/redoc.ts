import { Request, Response, Router } from 'express';

import path from 'path';

export const router = Router();

router.get('/', (req: Request, res: Response) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).end();
  }
  res.sendFile(path.join(process.cwd(), 'redoc-static.html'));
});
