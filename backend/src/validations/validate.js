const validate = (schema, property = 'body') => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false
    });

    if (error) {
      return res.status(400).json({
        message: 'ข้อมูลไม่ถูกต้อง',
        details: error.details.map(d => d.message)
      });
    }

    req[property] = value;
    next();
  };
};

module.exports = validate;
