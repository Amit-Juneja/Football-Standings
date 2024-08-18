import { paths } from '../generated';

export type StandingsRequestQueryParams = paths['/standings']['get']['parameters']['query'];
// export type StandingsResponseDto = components['responses']['GetStandingsResponse'];
export type StandingsResponseDto = paths['/standings']['get']['responses']['200']['content']['application/json'];
