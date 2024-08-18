# MicrohabitOrderApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createMicrohabitOrder**](MicrohabitOrderApi.md#createMicrohabitOrder) | **POST** /users/{uid}/microhabits-order |  |
| [**listMicrohabitOrder**](MicrohabitOrderApi.md#listMicrohabitOrder) | **GET** /users/{uid}/microhabits-order |  |
| [**updateMicrohabitOrder**](MicrohabitOrderApi.md#updateMicrohabitOrder) | **PATCH** /users/{uid}/microhabits-order/{id} |  |


<a name="createMicrohabitOrder"></a>
# **createMicrohabitOrder**
> MicrohabitOrder createMicrohabitOrder(uid, MicrohabitOrder)



    Create Microhabit order

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **MicrohabitOrder** | [**MicrohabitOrder**](../Models/MicrohabitOrder.md)| Create Microhabit request body | |

### Return type

[**MicrohabitOrder**](../Models/MicrohabitOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="listMicrohabitOrder"></a>
# **listMicrohabitOrder**
> List listMicrohabitOrder(uid)



    List order of all microhabits

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |

### Return type

[**List**](../Models/MicrohabitOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateMicrohabitOrder"></a>
# **updateMicrohabitOrder**
> MicrohabitOrder updateMicrohabitOrder(uid, id)



    Update Microhabit Order

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **id** | **String**| ID of the Microhabit Order to update | [default to null] |

### Return type

[**MicrohabitOrder**](../Models/MicrohabitOrder.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

