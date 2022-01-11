import { Router } from "express";

// Export the base-router
const baseRouter = Router();
baseRouter.use("/v1", require("./v1"));

export default baseRouter;
