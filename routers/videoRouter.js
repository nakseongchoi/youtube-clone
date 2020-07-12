import express from "express";
import routes from "../routes";
import { videos, uploadVideo, videoDetail, EditVideo, deleteVideo } from "../controllers/videoControllers";


const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, uploadVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, EditVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);






export default videoRouter;