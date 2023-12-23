import express from 'express';
import * as purchaseHistoryController from '../controllers/purchaseHistorys.js';

const router = express.Router();

// Route để lấy tất cả lịch sử mượn sách
router.get('/purchase-history', purchaseHistoryController.getAllPurchaseHistory);

// Route để lấy số lượng lịch sử mượn sách theo yêu cầu
router.get('/limited-purchase-history/:limit', purchaseHistoryController.getLimitedPurchaseHistory);
router.post('/purchase-history', purchaseHistoryController.handlePurchase);
router.get('/has-active-plan/:userId',  purchaseHistoryController.hasActivePlans);
export default router;
