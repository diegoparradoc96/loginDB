"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personalizedResponse = ({ error, details, body, }) => {
    return {
        error,
        details,
        body,
    };
};
exports.successGet = (req, res, resDb, status) => {
    res.status(status || 200).send(personalizedResponse({
        error: "",
        details: "obtained",
        body: resDb,
    }));
};
exports.successCreate = (req, res, resDb, status) => {
    res.status(status || 201).send(personalizedResponse({
        error: "",
        details: "created",
        body: resDb,
    }));
};
exports.successUpdate = (req, res, resDb, status) => {
    res.status(status || 200).send(personalizedResponse({
        error: "",
        details: "updated",
        body: resDb,
    }));
};
exports.successDelete = (req, res, resDb, status) => {
    res.status(status || 200).send(personalizedResponse({
        error: "",
        details: "deleted",
        body: resDb,
    }));
};
exports.error = (req, res, message, status, details) => {
    console.error("[response error] ", details);
    res.status(status || 500).send(personalizedResponse({
        error: message,
        details: "failed",
        body: {},
    }));
};
