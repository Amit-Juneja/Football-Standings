# StandingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getStandings**](StandingsApi.md#getStandings) | **GET** /standings | Get football standings |


<a name="getStandings"></a>
# **getStandings**
> getStandings_200_response getStandings(league)

Get football standings

    Fetch standings for a football team based on country, league, and team name.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **league** | **String**| The league name | [default to null] |

### Return type

[**getStandings_200_response**](../Models/getStandings_200_response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

