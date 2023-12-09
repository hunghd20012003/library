// controllers/purchaseHistoryController.js
import { PurchaseHistory } from '../models/schema.js';

// Lấy tất cả lịch sử mượn sách từ cơ sở dữ liệu

export const getAllPurchaseHistory = async (req, res) => {
  try {
    const result = await PurchaseHistory.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy số lượng lịch sử mượn sách theo yêu cầu
export const getLimitedPurchaseHistory = async (req, res) => {
  const { limit } = req.params;

  try {
    const limitedPurchaseHistory = await PurchaseHistory.find().limit(parseInt(limit, 10));

    res.status(200).json(limitedPurchaseHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};