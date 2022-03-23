"use strict";

exports.res200 = (res, statusCode = "000", message = "Operation success", data) => {
  // const response = { response: { responseCode, message, data } };
  const response = { statusCode, message, data } ;
  res.status(200);
  res.json(response);
  res.end();
};

exports.res404 = (res, message = "Resources not found", data) => {
  // const response = { response: { message, data } };
  const response = { message, data } ;
  res.status(404);
  res.json(response);
  res.end();
};

exports.res400 = (res, message = "Request error. Please read the API documentation.", data) => {
  // const response = { response: { message, data } };
  const response = { message, data } ;
  res.status(400);
  res.json(response);
  res.end();
};

exports.res401 = (res, message = "Forbidden. You're not allowed to access this resources.", data) => {
  // const response = { response: { message, data } };
  const response = { message, data } ;
  res.status(401);
  res.json(response);
  res.end();
};

exports.res500 = (res, message = "Internal system failure. Please contact system administrator", data) => {
  // const response = { response: { message, data } };
  const response = { message, data } ;
  res.status(500);
  res.json(response);
  res.end();
};
