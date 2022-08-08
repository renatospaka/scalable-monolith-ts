## Disclaimer
Creating a monolith that can scale

### Installation & Configuration
#### application </br>
npx tsc --init  </br>
npx tslint --init </br>
npm i ts-node --save-dev </br>
npm i ts-node @types/uuid --save-dev </br>
npm i express @types/express --save </br>
npm i sequelize sequelize-typescript sqlite3 --save </br>
npm i dotenv nodemon @types/express --save </br>
npm i reflect-metadata uuid yup --save </br>

#### tests
npx jest --init </br>
npm i @swc/cli @swc/core @swc/jest jest @types/jest @types/jstoxml --save-dev </br>
npm i supertest @types/supertest --save-dev </br>
npm i jstoxml --save </br>

### Usage
#### execution </br>

#### test </br>
npx nodemon src/main.ts npx test </br>

### local http testing
curl http://localhost:3000 </br>
