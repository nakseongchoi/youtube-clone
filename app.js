// //package나 다른 파일들 가지고 오는거 
// import ??? from "????";는 ???를 찾는다. dir에 없으면 node_modules를 가서 찾는다.

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter"; //./router파일에서 {userRouter}만 가지고 올 것이므로 이렇게 써줘야하ㅑㄴ다.
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import {localsMiddleware} from "./middlewares"
const app = express();

// settings
app.set('view engine', "pug");

// middleware
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(morgan("tiny"));
app.use(localsMiddleware);


// routes
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// 보내는거 export , default로 보내면 다른곳에서 받을 때 import ~~~로 바로 받을 수 있고, 그렇지 않으면 {}을 써줘야한다
export default app; // 누군가 내 파일을 불러올때 (import) app object를 준다는 뜻. 이미 설정한 것들 
