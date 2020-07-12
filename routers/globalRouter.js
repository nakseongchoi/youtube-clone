import express from "express";
import routes from "../routes";
import { videoHome, searchVideo } from "../controllers/videoControllers"
import { join, login, logout } from "../controllers/userContollers";


const globalRouter = express.Router();

globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.search, searchVideo);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);



export default globalRouter;