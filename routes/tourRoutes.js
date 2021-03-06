const express = require('express');
const controller = require('../controller/tourController');

const router = express.Router();

// router.param('id', controller.checkID);
router.route('/tour-stats').get(controller.tourStats);
router.route('/montlhy-plan/:year').get(controller.getMonthlyPlan);

router.route('/').get(controller.getAllTours).post(controller.createTour);
router
  .route('/:id')
  .get(controller.getTour)
  .patch(controller.updateTour)
  .delete(controller.deleteTour);

module.exports = router;
