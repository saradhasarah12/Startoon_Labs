const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.post('/items', dashboardController.createDashboardItem);
router.get('/items', dashboardController.getDashboardItems);
router.get('/items/:id', dashboardController.getDashboardItemById);
router.put('/items/:id', dashboardController.updateDashboardItem);
router.delete('/items/:id', dashboardController.deleteDashboardItem);

module.exports = router;
