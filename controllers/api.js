exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: "First Post", content: "This is the first post!" }],
    });
};

exports.createPost = (req, res, next) => {
    const plz = parseInt(req.body.plz);
    const qm = parseInt(req.body.qm);
    // Create post in db
    res.status(201).json({
        message: "Post created successfully!",
        post: {
            id: new Date().toISOString(),
            plz: plz,
            qm: qm,
            calc: qm * 3.15,
        },
    });
};
