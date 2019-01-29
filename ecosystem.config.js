module.exports = {
  apps: [{
    name: 'boilerplate-with-client',
    script: './server/src/bin/www',
    watch: ['./server/src'],
    ignore_watch: ['./node_modules', './logs'],
    instances: 1,
    max_memory_restart: '200M',
    wait_ready: true,
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    merge_logs: true,
    env: {
      NODE_ENV: 'development',
      PORT: 3000,
      DB_URL: 'localhost:27017',
      DB_NAME: 'boilerplate-with-client',
      SERVER_URL: 'http://localhost:3000',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      DB_URL: 'localhost:27017',
      DB_NAME: 'boilerplate-with-client',
      SERVER_URL: 'http://localhost:3000',
    },
  }],
};
