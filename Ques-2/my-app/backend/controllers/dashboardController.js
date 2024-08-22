const Dashboard = require('../models/Dashboard');

exports.createDashboardItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newItem = new Dashboard({ title, description });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardItems = async (req, res) => {
  try {
    const items = await Dashboard.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDashboardItemById = async (req, res) => {
  try {
    const item = await Dashboard.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateDashboardItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const item = await Dashboard.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteDashboardItem = async (req, res) => {
  try {
    const item = await Dashboard.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
