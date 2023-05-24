import express, { Request, Response } from "express";

exports.successGet = (
  req: Request,
  res: Response,
  resDb: any,
  status: number
) => {
  res.status(status || 200).send({
    error: "",
    details: "obtained",
    body: resDb,
  });
};

exports.successCreate = (
  req: Request,
  res: Response,
  resDb: any,
  status: number
) => {
  res.status(status || 201).send({
    error: "",
    details: "created",
    body: resDb,
  });
};

exports.successUpdate = (
  req: Request,
  res: Response,
  resDb: any,
  status: number
) => {
  res.status(status || 200).send({
    error: "",
    details: "updated",
    body: resDb,
  });
};

exports.successDelete = (
  req: Request,
  res: Response,
  resDb: any,
  status: number
) => {
  res.status(status || 200).send({
    error: "",
    details: "deleted",
    body: resDb,
  });
};

exports.error = (
  req: Request,
  res: Response,
  message: any,
  status: number,
  details: any
) => {
  console.error("[response error] ", details);

  res.status(status || 500).send({
    error: message,
    details: "failed",
    body: "",
  });
};
