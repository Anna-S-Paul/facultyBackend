const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { facultymodel } = require("./models/Faculty")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/add",
    (req, res) => {
        let input = req.body
        let faculty = new facultymodel(input)
        faculty.save()
        console.log(faculty)
        res.json({ "status": "success" })
    }
)


app.post(
    "/search", (req, res) => {
        let input = req.body
        facultymodel.find(input).then(
            (data) => {
                res.json(data)
            }
        ).catch(
            (error) => {
                res.json(error)
            }
        )
    }
)


app.get("/viewall",
    (req, res) => {
        facultymodel.find().then(
            (data) => {
                res.json(data)
            }
        ).catch(
            (error) => {
                res.json(error)
            }
        )
    }
)


app.post("/delete",
     (req, res) => {
    let input = req.body
    facultymodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({ "status": "success" })
        }
    ).catch(
        (error) => {
            res.json({"status":"error"})
        }
    )
}
)

app.listen(8089, () => {
    console.log("server started")
})