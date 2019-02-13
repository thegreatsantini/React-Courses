// This file conects to the remote prisma db and lets us query it with JS
// require("dotenv").config({ path: "variables.env" });
const {Prisma } = require('prisma-binding');

const db = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: true
});

module.exports = db;