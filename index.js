require('newrelic');
const Koa = require('koa');
const cron = require('./cronjob');

const app = new Koa();

cron.job.start();

console.log('Node background worker is running');