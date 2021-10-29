import express from 'express';
import { getUserHistory, completeTransaction, getProductWantToTrade, createTransaction } from '../controllers/transaction.js';

const router = express.Router();

router.get('/api/get_user_history/:userId', getUserHistory);

router.get('/api/complete_transaction/:tranId', completeTransaction);

router.get('/api/get_product_want_to_trade_with/:productId', getProductWantToTrade);

router.post('/api/create_transaction', createTransaction);

export default router;