const express = require('express');
const app = express();
app.use(express.json());
app.get('/api/vulns', (req,res)=> res.json([
  {id:1, title:"SQL Injection", cvss:9.8, severity:"Critical", host:"10.0.0.5"},
  {id:2, title:"XSS", cvss:6.1, severity:"Medium", host:"10.0.0.12"}
]));
app.get('/api/health', (req,res)=> res.json({status:'ok'}));
app.use(express.static('dist'));
const PORT=process.env.PORT||3000;
app.listen(PORT, ()=> console.log(`Vuln Dashboard on ${PORT}`));
