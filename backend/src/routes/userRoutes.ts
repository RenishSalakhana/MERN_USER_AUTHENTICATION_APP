import { Router } from "express";
import { login, register, userLists, userProfile } from "../controller/userController";
import { PATH_LIST } from "../../config/config";

const userRouter = Router();

userRouter.post(PATH_LIST.user.login, login);

userRouter.post(PATH_LIST.user.register, register);

userRouter.get(PATH_LIST.user.profile, userProfile);

userRouter.get(PATH_LIST.user.list, userLists);

export default userRouter;