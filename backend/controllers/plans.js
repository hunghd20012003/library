// controllers/planController.js
import { Plan } from '../models/schema.js';

// Get all plans from the database
export const getAllPlans = async (req, res) => {
  try {
    const result = await Plan.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new plan
export const createPlan = async (req, res) => {
  const { title, amount, duration, status } = req.body;

  try {
    // Log dữ liệu nhận từ request
    console.log('Received data:', req.body);

    // Tạo một đối tượng Plan mới
    const newPlan = new Plan({
      title,
      amount,
      duration,
      status,
    });

    // Lưu đối tượng Plan vào cơ sở dữ liệu
    const savedPlan = await newPlan.save();

    // Log kết quả
    console.log('Saved plan:', savedPlan);

    // Trả về kết quả
    res.status(201).json(savedPlan);
  } catch (error) {
    // Xử lý lỗi nếu có
    res.status(500).json({ message: error.message });
  }
};
// Get a limited number of plans based on the request
export const getLimitedPlans = async (req, res) => {
  const { showCount } = req.params;

  try {
    // Validate showCount to ensure it's a valid number
    const count = parseInt(showCount, 10);
    if (isNaN(count) || count <= 0) {
      return res.status(400).json({ message: 'Invalid showCount parameter.' });
    }

    // Fetch limited plans from the database
    const limitedPlans = await Plan.find().limit(count);

    res.status(200).json(limitedPlans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePlan = async (req, res) => {
  const  planId  = req.params.planId;
  try {
    // Check if the plan with planId exists
    const existingPlan = await Plan.findById(planId);
    console.log(existingPlan);
    if (!existingPlan) {
      return res.status(404).json({ message: 'Plan not found.' });
    }

    // Delete the plan from the database
    await Plan.deleteOne({_id:planId});
  
    return res.status(200).json({ message: 'Plan deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Controller function to update a plan
export const updatePlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const updatedPlan = req.body; // Assuming the entire plan object is sent in the request body

    const updatedPlanDocument = await Plan.findByIdAndUpdate(planId, updatedPlan, { new: true });

    if (!updatedPlanDocument) {
      return res.status(404).json({ message: 'Plan not found' });
    }

    res.status(200).json(updatedPlanDocument);
  } catch (error) {
    console.error('Error updating plan:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};