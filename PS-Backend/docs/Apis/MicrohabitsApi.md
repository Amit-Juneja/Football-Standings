# MicrohabitsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMicrohabit**](MicrohabitsApi.md#createMicrohabit) | **POST** /users/{uid}/microhabits |  |
| [**deleteMicrohabit**](MicrohabitsApi.md#deleteMicrohabit) | **DELETE** /users/{uid}/microhabits/{id} |  |
| [**getMicrohabit**](MicrohabitsApi.md#getMicrohabit) | **GET** /users/{uid}/microhabits |  |
| [**updateMicrohabit**](MicrohabitsApi.md#updateMicrohabit) | **PATCH** /users/{uid}/microhabits/{id} |  |


<a name="createMicrohabit"></a>
# **createMicrohabit**
> Microhabit createMicrohabit(uid, Microhabit)



    Create Microhabit

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| USer id | [default to null] |
| **Microhabit** | [**Microhabit**](../Models/Microhabit.md)| Create Microhabit request body | |

### Return type

[**Microhabit**](../Models/Microhabit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteMicrohabit"></a>
# **deleteMicrohabit**
> deleteMicrohabit(uid, id)



    Delete a Microhabit

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **id** | **String**| ID of the Microhabit to update | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getMicrohabit"></a>
# **getMicrohabit**
> List getMicrohabit(uid, start\_date, end\_date)



    Get Microhabit

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **start\_date** | **String**| Start date range for microhabit | [default to null] |
| **end\_date** | **String**| End Date range for microhabit | [default to null] |

### Return type

[**List**](../Models/Microhabit.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateMicrohabit"></a>
# **updateMicrohabit**
> UpdateMicrohabitResponse updateMicrohabit(uid, id)



    Update a Microhabit

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **id** | **String**| ID of the Microhabit to update | [default to null] |

### Return type

[**UpdateMicrohabitResponse**](../Models/UpdateMicrohabitResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

