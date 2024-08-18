# DefaultApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**callbackGet**](DefaultApi.md#callbackGet) | **GET** /callback | Callback endpoint |
| [**loginGet**](DefaultApi.md#loginGet) | **GET** /login | Endpoint to login |


<a name="callbackGet"></a>
# **callbackGet**
> callbackGet(code, state)

Callback endpoint

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**| Authorization code | [default to null] |
| **state** | **String**| State parameter | [default to null] |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="loginGet"></a>
# **loginGet**
> loginGet()

Endpoint to login

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

