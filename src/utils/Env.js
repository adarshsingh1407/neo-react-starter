const STAGING = 'staging';

const STAGING_ENV = {
  name: 'staging',
  collectorAPI: 'collectorStagingAPI',
  businessAPI: 'businessStagingAPI'
};

const PRODUCTION_ENV = {
  name: 'production',
  collectorAPI: 'collectorAPI',
  businessAPI: 'businessAPI'
};

const getEnv = env => {
  switch (env) {
    case STAGING:
      return STAGING_ENV;
    default:
      return PRODUCTION_ENV;
  }
}

export default getEnv;
