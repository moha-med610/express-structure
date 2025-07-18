export default (err, req, res, next) => {
    res.status(err.statusCode || 500).json({
        success: false,
        statusCode: err.statusCode || 500,
        statusMessage: err.statusMessage || 'Internal Server Error',
        message: err.message || 'something went wrong',
        data: null
    })
}