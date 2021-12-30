const router = require('express').Router();
const multer = require("multer")

const storagePost = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/post");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const uploadPost = multer({ storage: storagePost });

router.post("/post", uploadPost.single("file"), async (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
})

const storagePerson = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images/person");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const uploadPerson = multer({ storage: storagePerson });

router.post("/person", uploadPerson.single("file"), async (req, res) => {
    try {
        return res.status(200).json("File uploded successfully");
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;