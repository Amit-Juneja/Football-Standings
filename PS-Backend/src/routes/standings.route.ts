import { Router } from 'express';

import { StandingsController } from '../controllers/standings/standings.controller';
import { catchAsync } from '../exceptions/catch-async';

const router = Router();
const standingsController = new StandingsController();

/**
 * @openapi
 * /standings:
 *   get:
 *     summary: Get football standings
 *     description: Fetch standings for a football team based on country, league, and team name.
 *     operationId: getStandings
 *     tags:
 *       - standings
 *     parameters:
 *       - in: query
 *         name: league
 *         required: true
 *         description: The league name
 *         schema:
 *           type: string
 *     responses:
 *        '200':
 *          $ref: '#/components/responses/GetStandingsResponse'
 *        '500':
 *          $ref: '#/components/responses/InternalServerError'
 *        '401':
 *          $ref: '#/components/responses/UnauthorizedError'
 *        '404':
 *          $ref: '#/components/responses/NotFoundError'
 *        '403':
 *          $ref: '#/components/responses/ForbiddenError'
 */
router.route('/standings').get(catchAsync(StandingsController.prototype.getStandings, standingsController));

export default router;
