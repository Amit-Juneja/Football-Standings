import * as OpenApiValidator from 'express-openapi-validator';
import path from 'path';

export const openApiValidator = OpenApiValidator.middleware({
  apiSpec: path.join(__dirname, '../generated/openapi.json'),
  validateRequests: true,
  validateResponses: true,
  validateApiSpec: true,
  validateSecurity: false,
  ignoreUndocumented: true,
  ignorePaths: /(?:\/redoc|\/api-docs)/,
});
