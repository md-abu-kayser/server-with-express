import express, { Request, Response } from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

// post
router.post("/", userControllers.createUser);

// get users
router.get("/", userControllers.getUser);

// get single user
router.get("/:id", userControllers.getSingleUser);

// update user
router.put("/:id", userControllers.updateUser);

// delete user
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
import express, { Request, Response } from "express";
import { userControllers } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";

const router = express.Router();

// app.use("/users", userRooutes)

// routes -> controller -> service

router.post("/", userControllers.createUser);

router.get("/", logger, auth("admin"), userControllers.getUser);

router.get("/:id", auth("admin", "user"), userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
