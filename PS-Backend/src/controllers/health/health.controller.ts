import { Request, Response } from 'express';
import { HealthResponseDto } from '../../types';

export class HealthCheckController {
  async get(request: Request, response: Response<HealthResponseDto>) {
    return response.status(200).json({ status: 'OK' });
  }
}
