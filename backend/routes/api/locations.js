const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Location } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const locations = await Location.findAll(req.params);

        console.log("locations:",locations);

        if(locations) {
            return res.json(locations)
        }
    })
)

module.exports = router;
