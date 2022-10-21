import { Request, Response, NextFunction } from "express";

export const isAdmMiddleware = (req: Request, res: Response, next: NextFunction) => {

  if(!req.user.isAdm) {
    if(req.method === "PATCH") {
      return res.status(401).json({message: "You don't have access"});
    }
    return res.status(403).json({message: "You don't have access"});
  };


  return next();
};