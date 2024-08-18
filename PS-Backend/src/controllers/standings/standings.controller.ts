import { Request, Response } from 'express';
import { StandingsService } from '../../services/standings.service';
import { StandingsRequestQueryParams, StandingsResponseDto } from '../../types';

export class StandingsController {
  private standingsService: StandingsService;

  constructor() {
    this.standingsService = new StandingsService();
  }

  async getStandings(
    request: Request<{}, {}, {}, StandingsRequestQueryParams>,
    response: Response<StandingsResponseDto>
  ) {
    const { league } = request.query;
    const result = await this.standingsService.fetchStandings(league);
    console.log('I am result: ', result);

    return response.status(200).json({ data: result });
  }
}
