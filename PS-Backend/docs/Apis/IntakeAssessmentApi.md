# IntakeAssessmentApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAssessment**](IntakeAssessmentApi.md#createAssessment) | **POST** /users/{uid}/intake-assessment |  |
| [**createIntakeAssessment**](IntakeAssessmentApi.md#createIntakeAssessment) | **POST** /intake-assessment |  |
| [**getAssessment**](IntakeAssessmentApi.md#getAssessment) | **GET** /users/{uid}/intake-assessment |  |


<a name="createAssessment"></a>
# **createAssessment**
> IntakeAssessmentResponse createAssessment(uid, IntakeAssessment)



    Create Intake Assessment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |
| **IntakeAssessment** | [**IntakeAssessment**](../Models/IntakeAssessment.md)| Create Intake Assessment request body | |

### Return type

[**IntakeAssessmentResponse**](../Models/IntakeAssessmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createIntakeAssessment"></a>
# **createIntakeAssessment**
> IntakeAssessmentResponse createIntakeAssessment(IntakeAssessment)



    Create Intake Assessment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **IntakeAssessment** | [**IntakeAssessment**](../Models/IntakeAssessment.md)| Create Intake Assessment request body | |

### Return type

[**IntakeAssessmentResponse**](../Models/IntakeAssessmentResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAssessment"></a>
# **getAssessment**
> IntakeAssessment getAssessment(uid)



    Get Intake Assessment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **uid** | **String**| User id | [default to null] |

### Return type

[**IntakeAssessment**](../Models/IntakeAssessment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

