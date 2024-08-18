# UsersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUser**](UsersApi.md#createUser) | **POST** /users |  |
| [**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /users |  |


<a name="createUser"></a>
# **createUser**
> ListUsersResponse createUser(CreateUserRequest)



    Create a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateUserRequest** | [**CreateUserRequest**](../Models/CreateUserRequest.md)| Create User request body | |

### Return type

[**ListUsersResponse**](../Models/ListUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAllUsers"></a>
# **getAllUsers**
> List getAllUsers()



    Get all Users

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/ListUsersResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

