import { GetStandings200Response } from '@/client/typescript';
import apiClient from '@/client/typescript/client';
import CustomHead from '@/components/custom-head';
import { BASE_TITLE } from '@/utils/seo';
import { Box, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const HomePage: React.FC = () => {
  const [league, setLeague] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<GetStandings200Response | null>(null);
  const [error, setError] = useState<string>('');

  const getStandings = async (): Promise<void> => {
    setLoading(true);
    setError('');
    try {
      const response = await apiClient.standingsApi.getStandings({
        league,
      });
      setResult(response);
    } catch (err) {
      setError('Failed to fetch standings. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CustomHead description={BASE_TITLE} title={BASE_TITLE} />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Football Standings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="League ID"
                variant="outlined"
                fullWidth
                value={league}
                type="number"
                onChange={(e) => setLeague(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button variant="contained" color="primary" onClick={getStandings} disabled={loading || !league}>
                {loading ? <CircularProgress size={24} /> : 'Get Standings'}
              </Button>
            </Grid>
          </Grid>
          <div>
            {result &&
              !error &&
              result.data &&
              result.data.map((standing, index) => (
                <Box key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                  <h3>
                    {standing.teamName} - {standing.overallLeaguePosition}
                  </h3>
                  <p>
                    <strong>Country:</strong> {standing.countryName}
                  </p>
                  <p>
                    <strong>League:</strong> {standing.leagueName}
                  </p>
                  <p>
                    <strong>League ID:</strong> {standing.leagueId}
                  </p>
                  <p>
                    <strong>Team ID:</strong> {standing.teamId}
                  </p>
                </Box>
              ))}
          </div>
          {error && (
            <Box mt={4}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default HomePage;
