const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Opportunity, User, Signup } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const signups = await Signup.findAll(req.params)

        if(signups) {
            return res.json(signups)
        }
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {

        const signup = await Opportunity.findByPk(req.params.id)

        if(signup) {
            return res.json({signup})
        }

    })
)

router.post(
    '/',
    asyncHandler(async (req, res, next) => {
        const { oppId, userId  } = req.body

        const newSignup = await Signup.create({ oppId, userId })

        if(newSignup) {
            return res.json(newSignup)
        }
    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
        const signupToDelete = await Opportunity.findByPk(req.params.id);

        await signupToDelete.destroy();

        return res.json(signupToDelete);
    })
)

module.exports = router;
