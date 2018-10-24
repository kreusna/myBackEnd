

module.exports = async function (req, res, next){
    res.invalidData = function(err) {
        return res.status(400).json({"message": err});
    };
    res.success = function(data){
        return res.json({
            message:"success",
            data :data
        })
    }
    next();
}

