const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Opportunity } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// router.get(
//     '/',
//     asyncHandler(async(req, res, next) => {
//         const oppList = await Opportunity.findAll(req.params)

//         if(oppList) {
//             return res.json({ oppList })
//         }
//     })
// )

module.exports = router;
