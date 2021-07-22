const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const opportunitiesRouter = require('./opportunity.js');
const signupsRouter = require('./oppSignup.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/opportunities', opportunitiesRouter);
router.use('/signups', signupsRouter)

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));

const { restoreUser } = require('../../utils/auth.js');
router.get(
  '/restore-user',
  restoreUser,
  (req, res) => {
    return res.json(req.user);
  }
);

const { requireAuth } = require('../../utils/auth.js');

router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});


module.exports = router;
