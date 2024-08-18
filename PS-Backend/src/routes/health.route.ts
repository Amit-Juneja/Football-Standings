import { Router } from 'express';
import { HealthCheckController } from '../controllers/health/health.controller';
import { catchAsync } from '../exceptions/catch-async';

export const router = Router();
const healthCheckController = new HealthCheckController();

/**
 * @openapi
 * /:
 *   get:
 *     description: Health check endpoint for Football Standings API
 *     operationId: healthCheck
 *     tags:
 *       - health
 *     responses:
 *       '200':
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/HealthStatus'
 *       '500':
 *         $ref: '#/components/responses/InternalServerError'
 */
router.route('/').get(catchAsync(HealthCheckController.prototype.get, healthCheckController));

export default router;
