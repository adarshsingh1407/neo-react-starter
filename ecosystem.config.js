module.exports = {
  /**
   * PM2 Application Configuration
   * @author Adarsh Singh
   */
  apps : [
    // React Starter Application
    {
      name      : 'RS',
      script    : 'index.js',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      combine_logs: true,
      env: {
        NODE_ENV: 'staging'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
};
