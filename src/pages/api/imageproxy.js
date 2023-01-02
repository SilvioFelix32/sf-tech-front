//Esse módulo permite usar URLs externas no next, sem ele, o next não deixa usar urls fora do next.config.js

export default async (req, res) => {
    const url = decodeURIComponent(req.query.url);
    const result = await fetch(url);
    const body = await result.body;
    body.pipe(res);
  };