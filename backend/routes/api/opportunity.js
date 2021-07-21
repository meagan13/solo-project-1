const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Opportunity } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const opportunityValidations = [
    check('oppName')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid opportunity name'),
    check('oppDate')
        .exists({ checkFalsy: true })
        .isDate()
        .withMessage('Please provide a valid date'),
    check('capacity')
        .exists({ checkFalsy: true })
        .isInt()
        .withMessage('Please provide a max capacity as an integer'),
    handleValidationErrors,
];

const opportunityNotFoundError = () => {
    const err = Error("Opportunity not found");
      err.errors = [`opportunity could not be found.`];

    err.title = "Opportunity not found.";
    err.status = 404;
    return err;
};

// this back-end route goes to /opportunities/
router.get(
    '/',
    asyncHandler(async (req, res, next) => {
        const opportunities = await Opportunity.findAll(req.params)
        //opportunities is an array of opportunity objects

        if(opportunities) {
            return res.json(opportunities)
        } else {
            next(opportunityNotFoundError)
        }
    })
)

router.get(
    '/:id',
    asyncHandler(async (req, res, next) => {

        const opportunity = await Opportunity.findByPk(req.params.id)

        if(opportunity) {
            return res.json({opportunity})
        } else {
            next(opportunityNotFoundError())
        }

    })
)

router.post(
    //'/' is starting after /api/opportunities in the link
    '/',
    opportunityValidations,
    asyncHandler(async (req, res, next) => {
        //**Remember: req.body = payload
        //destructuring the keys, they already have values attached
        const { nonprofitId, locationId, categoryId, oppName, oppDate, capacity } = req.body

        const newOpportunity = await Opportunity.create({nonprofitId, locationId, categoryId, oppName, oppDate, capacity});
        //console.log(req.body)

        if(newOpportunity) {
            //console.log('New Opportunity', newOpportunity)
            return res.json(newOpportunity)
            //becomes the response that is sent back to the thunk (line 16)
        } else {
            next(opportunityNotFoundError())
        }

    })
)

router.put(
    //'/' is starting after /api/opportunities in the link
    '/:id',
    //opportunityValidations,
    asyncHandler(async (req, res, next) => {
        //**Remember: req.body = payload
        const id = req.params.id

        //find the one opportunity by PK
        const opportunity = await Opportunity.findByPk(id);

        //update that one opportunity
        const editOpportunity = await opportunity.update(req.body);

        if(editOpportunity) {
            return res.json(editOpportunity)
        } else {
            next(opportunityNotFoundError())
        }

    })
)

router.delete(
    '/:id',
    asyncHandler(async (req, res, next) => {
        const oppToDelete = await Opportunity.findByPk(req.params.id);

        await oppToDelete.destroy();

        return res.json(oppToDelete);
    })
)

module.exports = router;
