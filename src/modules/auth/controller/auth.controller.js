const asyncHandler = require("../../../middlewares/async.middleware");
const ErrorResponse = require("../../../utils/errorResponse");
const User = require("../model/user.model");

// @desc Register User
// @route /api/v1/auth/register
// @access public
exports.register = asyncHandler(async (req, res, next) => {
    console.log("dd", req.body);
    const user = await User.create(req.body)
    return res.status(200).json({
        success: true,
        msg: "Create a new Register",
        data: user
    })
});
