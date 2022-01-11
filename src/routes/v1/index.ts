import { Router, Request, Response } from "express";

const router = Router();
router.get("", (req: Request, res: Response) => {
  return res.json({ code: 200 }).status(200);
});

module.exports = router;
