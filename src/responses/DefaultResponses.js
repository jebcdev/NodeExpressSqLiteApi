export const SuccessResponse = (
    req,
    res,
    message = "SuccessResponse",
    data = "SuccessResponse",
    status = 200
) => {
    res.status(status).json({
        error: false,
        message: message,
        data: data,
    });
};


export const ErrorResponse = (
    req,
    res,
    message = "ErrorResponse",
    data = "ErrorResponse",
    status = 500
) => {
    res.status(status).json({
        error: true,
        message: message,
        data: data,
    });
};
