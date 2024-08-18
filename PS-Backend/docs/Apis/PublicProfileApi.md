# PublicProfileApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getUserPublicProfile**](PublicProfileApi.md#getUserPublicProfile) | **GET** /public-profile/{username}/user-details |  |
| [**getUserPublicProfileMicrohabits**](PublicProfileApi.md#getUserPublicProfileMicrohabits) | **GET** /public-profile/{username}/micro-habits-details |  |


<a name="getUserPublicProfile"></a>
# **getUserPublicProfile**
> PublicProfileUser getUserPublicProfile(username)



    Get User details for public Profile

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| The username parameter in the path | [default to null] |

### Return type

[**PublicProfileUser**](../Models/PublicProfileUser.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getUserPublicProfileMicrohabits"></a>
# **getUserPublicProfileMicrohabits**
> List getUserPublicProfileMicrohabits(username, start\_date, end\_date)



    Get Micro habits details for public Profile

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| The username parameter in the path | [default to null] |
| **start\_date** | **String**| Start date range for microHabit | [default to null] |
| **end\_date** | **String**| End Date range for microHabit | [default to null] |

### Return type

[**List**](../Models/PublicProfileMicrohabit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

