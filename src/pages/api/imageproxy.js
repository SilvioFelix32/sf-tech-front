/* eslint-disable import/no-anonymous-default-export */
//Esse módulo permite usar URLs externas no next, sem ele, o next não deixa usar urls fora do next.config.js

export default async (req, res) => {
  const url = decodeURIComponent(req.query.url);
  const result = await fetch(url);
  const body = result.body;
  body.pipe(res);
};