import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function Dashboard(){
  const [vulns,setVulns]=useState([]);
  useEffect(()=>{ fetch('/api/vulns').then(r=>r.json()).then(setVulns); },[]);
  return (
    <div style={{padding:20, background:'#020617', color:'#f1f5f9'}}>
      <h2>Vuln Scanner — CVSS Dashboard</h2>
      <BarChart width={600} height={300} data={vulns}>
        <XAxis dataKey="title" /><YAxis /><Tooltip /><Bar dataKey="cvss" fill="#00d2ff" />
      </BarChart>
      <table><thead><tr><th>Title</th><th>CVSS</th><th>Severity</th></tr></thead>
      <tbody>{vulns.map(v=><tr key={v.id}><td>{v.title}</td><td>{v.cvss}</td><td>{v.severity}</td></tr>)}</tbody></table>
    </div>
  );
}
