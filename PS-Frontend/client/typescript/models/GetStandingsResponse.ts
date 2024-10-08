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

import { exists, mapValues } from '../runtime';
/**
 * Get Standings Response
 * @export
 * @interface GetStandingsResponse
 */
export interface GetStandingsResponse {
    /**
     * Team ID
     * @type {string}
     * @memberof GetStandingsResponse
     */
    countryName?: string;
    /**
     * League ID
     * @type {string}
     * @memberof GetStandingsResponse
     */
    leagueId: string;
    /**
     * League Name
     * @type {string}
     * @memberof GetStandingsResponse
     */
    leagueName?: string;
    /**
     * Team ID
     * @type {string}
     * @memberof GetStandingsResponse
     */
    teamId?: string;
    /**
     * Team Name
     * @type {string}
     * @memberof GetStandingsResponse
     */
    teamName?: string;
    /**
     * Overall League Position
     * @type {string}
     * @memberof GetStandingsResponse
     */
    overallLeaguePosition?: string;
}

/**
 * Check if a given object implements the GetStandingsResponse interface.
 */
export function instanceOfGetStandingsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "leagueId" in value;

    return isInstance;
}

export function GetStandingsResponseFromJSON(json: any): GetStandingsResponse {
    return GetStandingsResponseFromJSONTyped(json, false);
}

export function GetStandingsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetStandingsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countryName': !exists(json, 'country_name') ? undefined : json['country_name'],
        'leagueId': json['league_id'],
        'leagueName': !exists(json, 'league_name') ? undefined : json['league_name'],
        'teamId': !exists(json, 'team_id') ? undefined : json['team_id'],
        'teamName': !exists(json, 'team_name') ? undefined : json['team_name'],
        'overallLeaguePosition': !exists(json, 'overall_league_position') ? undefined : json['overall_league_position'],
    };
}

export function GetStandingsResponseToJSON(value?: GetStandingsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country_name': value.countryName,
        'league_id': value.leagueId,
        'league_name': value.leagueName,
        'team_id': value.teamId,
        'team_name': value.teamName,
        'overall_league_position': value.overallLeaguePosition,
    };
}

