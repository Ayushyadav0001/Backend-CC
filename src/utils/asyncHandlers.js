const asyncHandlers = (requesthandler) => (req, res, next) => {
  Promise.resolve(requesthandler(req, res, next)).catch((err) => next(err));
};

export default asyncHandlers;
