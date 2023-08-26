const DynamicCrudEndpoint = require('./src/db/DbCrud');

const server = new DynamicCrudEndpoint();
server.setupEndpoints();
server.start(3001);
