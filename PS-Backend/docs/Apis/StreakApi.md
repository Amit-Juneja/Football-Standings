# StreakApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createStreak**](StreakApi.md#createStreak) | **POST** /users/{uid}/streak |  |
| [**getStreak**](StreakApi.md#getStreak) | **GET** /users/{uid}/streak |  |
| [**updateStreak**](StreakApi.md#updateStreak) | **PATCH** /users/{uid}/streak/{id} |  |


<a name="createStreak"></a>
# **createStreak**
> Streak createStreak(uid, createStreak\_request)



    Create a new streak

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **createStreak\_request** | [**createStreak_request**](../Models/createStreak_request.md)|  | |

### Return type

[**Streak**](../Models/Streak.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getStreak"></a>
# **getStreak**
> List getStreak(uid)



    Get Streak

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |

### Return type

[**List**](../Models/Streak.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateStreak"></a>
# **updateStreak**
> Streak updateStreak(uid, id)



    Update an existing streak

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **id** | **String**| ID of the streak to update | [default to null] |

### Return type

[**Streak**](../Models/Streak.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

