# Hostel Management Suite [W.I.P.]
Work-in-progress Modern Hostel Management Suite for providing an efficient pipeline of service between Hostel Management and Tenants

## Requirements
### System Dependencies
- node.js (v26.2.0+)
- npm (v11.16.0+)
- postgresql (v18.4+)
### NPM Dependencies
Detailed within `package.json`

\* This project was initiated using Tanstack start.

## Setup
Clone repository:
```shell
git clone https://github.com/FelicityIris/hostel-management-suite/
cd hostel-management-suite
```

Install NPM Dependencies:
```shell
npm install
```

Configure `.env`:
```.env
# PostgreSQL Database URL in format
DATABASE_URL=postgresql://username:password@hostname:port/database_name

# Node Environment Mode
NODE_ENV=development

# Node Server Port
PORT=3000
```

## Run
### Debug
```shell
npm run dev
```

## References
- [TanStack](https://tanstack.com/) - Primary Tech Stack