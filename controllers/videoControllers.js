export const videoHome = (req, res) => res.render("videoHome", {pageTitle : "Home", potato:1234 });

export const searchVideo = (req, res) => {
    // const {
    //     query: { term : searchingBy }
    // } = req;
    // res.render("searchVideo", {pageTitle : "Search", searchingBy});
        const searchingBy = req.query.term;    
        // console.log(req.query);
    res.render("searchVideo", {pageTitle : "Search", searchingBy : searchingBy});
} ;


export const videos = (req, res) => res.render("videos", {pageTitle : "Videos"});

export const uploadVideo = (req, res) => res.render("uploadVideo", {pageTitle : "Upload"});

export const videoDetail = (req, res) => res.render("videoDetail", {pageTitle : "Video Detail"});

export const EditVideo = (req, res) => res.render("editVideo", {pageTitle : "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", {pageTitle : "Delete Video"});
