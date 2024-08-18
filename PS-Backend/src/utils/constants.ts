import dotenv from 'dotenv';

dotenv.config();

declare type Environment = 'prod' | 'dev' | 'local';
const ENVIRONMENT: Environment = (process.env.ENVIRONMENT || 'local') as Environment;
const ALLOWED_ORIGINS = '*';

export default {
  ENVIRONMENT,
  ALLOWED_ORIGINS,
};
