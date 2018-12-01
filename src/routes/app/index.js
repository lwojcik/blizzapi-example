const router = require('express').Router();

router.get('/', (req, res) => {
  return res.json({
    message: "hello world!",
  });
});

module.exports = router;
