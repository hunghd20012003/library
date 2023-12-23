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
export const handlePurchase = async (req, res) => {
  const { planId, planTitle, planDuration, planAmount, userId } = req.body;

  try {
    if (!userId) {
      return res.status(400).json({ message: 'userId is required' });
    }

    // Tạo một bản ghi mới trong bảng PurchaseHistory
    const purchaseHistory = new PurchaseHistory({
      userId,
      planName: planTitle,
      startDate: new Date(),
      endDate: new Date(Date.now() + planDuration * 24 * 60 * 60 * 1000),
      status: 'Chờ duyệt',
    });

    // Lưu thông tin purchase history vào cơ sở dữ liệu
    const result = await purchaseHistory.save();

    res.status(200).json(result);
  } catch (error) {
    console.error('Error handling purchase:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const hasActivePlans = async (req, res) => {
  const { userId } = req.params; // Sử dụng req.params để lấy các tham số từ URL

  try {
    const purchaseHistory = await PurchaseHistory.find({ userId });

    // Kiểm tra xem có ít nhất một kế hoạch hoạt động hay không
    const hasActivePlans = purchaseHistory.length > 0 && purchaseHistory.some((record) => {
      return record.endDate > Date.now();
    });

    res.status(200).json({ hasActivePlans });
  } catch (error) {
    console.error('Lỗi kiểm tra kế hoạch hoạt động:', error);
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};