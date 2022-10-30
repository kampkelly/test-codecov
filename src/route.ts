import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  if (req.query?.cool) {
    const a = 1;
    const b = 2;
    const c = a + b;
    return res.status(200).json({ ok: c });
  }
  return res.status(200).json({ ok: 'cools' });
});

export default router;
