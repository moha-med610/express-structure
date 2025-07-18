export default (req, res) => {
    res.status(404).json({
        success: false,
        statusCode: 404,
        statusMessage: "Not Found",
        message: `Route '${req.originalUrl}' is undefined. Please check your endpoint.`,
        data: null
    })
}