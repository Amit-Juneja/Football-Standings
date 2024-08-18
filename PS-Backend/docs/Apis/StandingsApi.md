# StandingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStandings**](StandingsApi.md#getStandings) | **GET** /standings | Get football standings |


<a name="getStandings"></a>
# **getStandings**
> GetStandingsResponse getStandings(country, league, team)

Get football standings

    Fetch standings for a football team based on country, league, and team name.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **country** | **String**| the country name | [default to null] |
| **league** | **String**| The league name | [default to null] |
| **team** | **String**| The team name | [default to null] |

### Return type

[**GetStandingsResponse**](../Models/GetStandingsResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

