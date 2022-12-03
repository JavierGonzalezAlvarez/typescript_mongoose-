## typescript insert data ts mongodb & mongoose
sudo systemctl start mongod
mongodb-compass

database: test
collections:
-transaction

$ npm init
$ npm i --save-dev typescript
$ npm i mongoose nodemon

node_modules/.bin/tsc insert.ts
node_modules/.bin/tsc db/server.ts
node_modules/.bin/tsc schema/transaction.ts
node insert.js