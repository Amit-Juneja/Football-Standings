import axios from 'axios';
const cache = require('../utils/cache');

export class StandingsService {
  async fetchStandings(league: string) {
    const cacheKey = league;
    const cachedResult = cache.get(cacheKey);

    if (cachedResult) {
      return cachedResult;
    }

    const apiKey = process.env.API_KEY || '9bb66184e0c8145384fd2cc0f7b914ada57b4e8fd2e4d6d586adcc27c257a978';
    const apiUrl = `https://apiv3.apifootball.com/?action=get_standings&league_id=${league}&APIkey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);
      const standings = response.data;

      // To support offline mode
      cache.set(cacheKey, standings);
      return standings;
    } catch (error) {
      // Fallback logic if API fails
      return { error: 'Unable to fetch standings. Please try again later.' };
    }
  }
}
