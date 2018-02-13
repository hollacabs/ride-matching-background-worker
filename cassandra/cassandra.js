const Cassandra = require('cassandra-driver');
const distance = Cassandra.types.distance;

const client = new Cassandra.Client({
  contactPoints: ['172.31.7.227'], 
  keyspace: 'rides_matched',
  pooling: {
    coreConnectionsPerHost: {
      [distance.local]: 20,
      [distance.remote]: 1
    }
  }
});

module.exports = {
  driverStats: (driverId, timestamp) => {
    let query = `SELECT * FROM drivers WHERE driver_id = ${driverId} AND price_timestamp > '${timestamp}'`;
    return client.execute(query, []);
  }
}