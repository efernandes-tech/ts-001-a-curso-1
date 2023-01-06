var api = {};

api.data = function (req, res) {
  res.json([
    { amount: 200.5, installments: 2 },
    { amount: 100.2, installments: 5 },
    { amount: 50.5, installments: 1 },
    { amount: 70.5, installments: 2 },
  ]);
};

module.exports = api;
