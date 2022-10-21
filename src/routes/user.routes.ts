import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUsersController } from "../controllers/listUsers.controller";
import { updateUserController } from "../controllers/updateUser.controller";
import { userLoginController } from "../controllers/userLogin.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";
import { fixKeysMiddleware } from "../middlewares/fixKeys.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import { userExistsMiddleware } from "../middlewares/userExists.middleware";

export const userRoutes = Router();

userRoutes.get("/users", authUserMiddleware, isAdmMiddleware, listUsersController);
userRoutes.post("/users", createUserController);
userRoutes.post("/login", userLoginController);
userRoutes.patch("/users/:id", authUserMiddleware, userExistsMiddleware, isAdmMiddleware, fixKeysMiddleware, updateUserController);
userRoutes.delete("/users/:id", authUserMiddleware, userExistsMiddleware, isAdmMiddleware, deleteUserController);