/* tslint:disable */
/* eslint-disable */
/**
 * Football Standings API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorModel,
  HealthStatus,
} from '../models/index';
import {
    ErrorModelFromJSON,
    ErrorModelToJSON,
    HealthStatusFromJSON,
    HealthStatusToJSON,
} from '../models/index';

/**
 * 
 */
export class HealthApi extends runtime.BaseAPI {

    /**
     * Health check endpoint for Football Standings API
     */
    async healthCheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthStatus>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthStatusFromJSON(jsonValue));
    }

    /**
     * Health check endpoint for Football Standings API
     */
    async healthCheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthStatus> {
        const response = await this.healthCheckRaw(initOverrides);
        return await response.value();
    }

}
