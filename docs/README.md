# API Diagram

![Plant UML Image](https://github.com/Amit-Juneja/Football-Standings/blob/main/plantUML.png)

# Documentation for Football Standings API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *HealthApi* | [**healthCheck**](Apis/HealthApi.md#healthcheck) | **GET** / | Health check endpoint for Football Standings API |
| *StandingsApi* | [**getStandings**](Apis/StandingsApi.md#getstandings) | **GET** /standings | Get football standings |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ErrorModel](./Models/ErrorModel.md)
 - [GetStandingsResponseBody](./Models/GetStandingsResponseBody.md)
 - [HealthStatus](./Models/HealthStatus.md)
 - [getStandings_200_response](./Models/getStandings_200_response.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP Bearer Token authentication (JWT)

