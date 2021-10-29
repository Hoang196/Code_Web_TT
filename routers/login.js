import express from 'express';
import { loginAccount } from '../controllers/login.js';

const router = express.Router();

router.post('/', loginAccount);

export default router;
