const router = require('express').Router();

const UserViews = require('../models/userViews');
const ProductView = require('../../lib/services/product-view');
const {
  SUCCESS_RESPPONSE_STATUS_CODE,
  BAD_REQUEST_STATUS_CODE,
  CREATED_STATUS_CODE,
  INTERNAL_SERVER_STATUS_CODE
} = require('../../config/constants');

router.post('/', async (req, res) => {
  const view = new UserViews(req.body);
  try {
    await view.save();
    res.status(CREATED_STATUS_CODE).send({ view });
  } catch (err) {
    res.status(BAD_REQUEST_STATUS_CODE).send(err);
  }
});

router.get('/', async (req, res) => {
  const productView = new ProductView();
  try {
    const { startAt, endAt, isUnique } = req.query;
    const viewers = await productView.getViewers(req.body.productID, startAt, endAt);
    const productVisitCountByUser = productView.getProductVisitCountByUser(viewers, isUnique);
    res.status(SUCCESS_RESPPONSE_STATUS_CODE).send({ result: productVisitCountByUser });
  } catch (err) {
    res.status(INTERNAL_SERVER_STATUS_CODE).send(err);
  }
});

module.exports = router;
