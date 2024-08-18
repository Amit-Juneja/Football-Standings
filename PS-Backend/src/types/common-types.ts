export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;
export type JsonObject = { [Key in string]?: JSONValue };
export type HttpMethod = 'get' | 'GET' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'delete' | 'DELETE';
