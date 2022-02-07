// @desc Get all bootcamp
// @route /api/v1/bootcamp
// @access public

exports.getBootcamps = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: "Show all bootcamp",
        data: []
    })
}

// @desc Get a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.getBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Get a single bootcamp  of id ${req.params.id}`,
        data: {}
    })
}

// @desc create a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.createBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: "Create a new bootcamp",
        data: {}
    })
}


// @desc update a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.updateBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Update a single bootcamp of id ${req.params.id}`,
        data: []
    })
}

// @desc delete a single bootcamp
// @route /api/v1/bootcamp/:id
// @access public

exports.deleteBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Delete a sinle bootcamp  of id ${req.params.id}`
    })
}


