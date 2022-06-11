exports.createPostValidator = (req, res, next) => {
    //title check
    req.check("title", "Write a title").notEmpty();
    req.check("title", 'Title must have more than 4 characters and less than 150').isLength({
        min: 4,
        max: 150
    });
    //body check
    req.check("body", "Write a body").notEmpty();
    req.check("body", "Body must have more than 4 characters and less than 2000").isLength({
        min: 4,
        max: 2000
    });
    //error handler
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({
            error: firstError
        });
    }
    //advancing in middlewares
    next();
};