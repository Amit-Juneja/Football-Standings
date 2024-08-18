import { API_HOST } from '@/utils/constants';
import { Configuration, HealthApi, Middleware, StandingsApi } from '.';

export const TOKEN_KEY = 'jwt_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';

class FootballClient {
  private config: Configuration;
  public healthApi: HealthApi;
  public standingsApi: StandingsApi;

  constructor(basePath: string) {
    this.config = new Configuration({
      basePath,
      middleware: [addHeadersMiddleware()],
    });

    this.healthApi = new HealthApi(this.config);
    this.standingsApi = new StandingsApi(this.config);
  }
}

/**
 * Middleware to dynamically create request headers with the most updated JWT token
 * @returns the API client middleware
 */
const addHeadersMiddleware = (): Middleware => {
  return {
    pre: async (context) => {
      context.init.headers = createRequestHeaders(context.init.headers);
      return { url: context.url, init: context.init };
    },
  };
};

const createRequestHeaders = (otherHeaders: HeadersInit | undefined): HeadersInit => {
  let token;
  try {
    token = localStorage.getItem('accessToken');
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.info(error);
    } else {
      console.error(error);
    }
  }
  return {
    ...(otherHeaders ?? {}),
    'Content-Type': 'application/json',
    accept: 'Access-Control-Allow-Origin',
    Authorization: token ? `Bearer ${token}` : '',
  };
};

const apiClient = new FootballClient(API_HOST);
export default apiClient;
