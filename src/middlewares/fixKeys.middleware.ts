import { Request, Response, NextFunction } from "express";

export const fixKeysMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const bodyUpdate = req.body;
  const fixKey = Object.keys(bodyUpdate);

  if(fixKey.includes("isAdm") || fixKey.includes("isActive") || fixKey.includes("id")) {
    return res.status(401).json({message: "no have permission to update this key"})
  };

  return next()
};