# 🔍 Vuln Scanner Dashboard — Demo

Dashboard that aggregates Nmap/Burp results and calculates CVSS

> **Cybersecurity Track — Demo Showcase** | **Real Problem, Synthetic Data**

## Overview
**Problem:** Manual vuln tracking in spreadsheets is error-prone

**Solution:** Dashboard that aggregates Nmap/Burp results and calculates CVSS This demo proves the engineering approach with synthetic data.

## Architecture
```
Scanner (Nmap/Burp Mock) → Parser → CVSS Engine → DB → Dashboard
```

## Tech Stack
- React, Node.js, CVSS 3.1

## Features
- Auto CVSS scoring\n- Trend charts\n- Export PDF report

## Security
- Validation, JWT/RBAC, Rate limiting, No real secrets

## Screenshots
![Demo](./screenshots/demo.png)

## Demo
- **Demo Data:** `demo-data.json`
- **Live:** `https://kero.10001mb.com/demo/vuln-scanner-dashboard-demo` *(placeholder)*

## Installation
```bash
git clone https://github.com/KeroNaderDev/vuln-scanner-dashboard-demo.git
cd vuln-scanner-dashboard-demo
npm install
cp .env.example .env
npm run dev
```

## Usage
```bash
npm run dev
```

## What I Learned
- Cybersecurity end-to-end design
- Demo vs real data separation
- Professional portfolio structure

---
*Track: Cybersecurity • Portfolio: [KeroNaderDev](https://github.com/KeroNaderDev)*
