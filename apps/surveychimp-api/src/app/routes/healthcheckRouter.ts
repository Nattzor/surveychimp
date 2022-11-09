import { Router } from 'express';

const router = Router();

router.get('/healthcheck', (req, res) => res.status(200).send());

export default router;