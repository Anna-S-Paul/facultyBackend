const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name": String,
        "age": String,
        "yearofjoining": String,
        "venue": String,
        "subject": String
    }
)
let facultymodel = mongoose.model("faculties", schema)
module.exports = { facultymodel }