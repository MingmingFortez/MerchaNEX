const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://u8eniq7su6io8s:p54a40fc4963d81bc289f08a47008bd4fffb57304edf02a3e85563d30f6b35547@ccba8a0vn4fb2p.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/d21orf41k6c3r2',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
