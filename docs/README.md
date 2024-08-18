# API Diagram

![Plant UML Image](https://github.com/Amit-Juneja/Football-Standings/blob/main/plantUML.png)

# Demo Screen recording


https://github.com/user-attachments/assets/d52ab33e-dc46-4038-9321-18608ffde723



# Documentation for Football Standings API

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *HealthApi* | [**healthCheck**](Apis/HealthApi.md#healthcheck) | **GET** / | Health check endpoint for Football Standings API |
| *StandingsApi* | [**getStandings**](Apis/StandingsApi.md#getstandings) | **GET** /standings | Get football standings |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [ErrorModel](./Models/ErrorModel.md)
 - [GetStandingsResponseBody](./Models/GetStandingsResponseBody.md)
 - [HealthStatus](./Models/HealthStatus.md)
 - [getStandings_200_response](./Models/getStandings_200_response.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="bearerAuth"></a>
### bearerAuth

- **Type**: HTTP Bearer Token authentication (JWT)


# Documentation for the design patterns used

The architecture of the API is designed to be modular and follows a layered approach for separation of concerns. The key components of the architecture are:

## Typescript client :
Represents the frontend client that interact with the API.

## API contract: 
Utilizes the OpenAPI specification to define the interface between clients and the API. It acts as a middleware layer between clients and the router.

## Router: 
Handles the routing of incoming requests to the appropriate controllers based on the defined endpoints. Different routers are responsible for different sets of endpoints (e.g., users, assessments, protocols).

## Controller: 
Contains the logic for handling incoming requests, processing data, and invoking the corresponding services. Controllers delegate business logic to services and manage the flow of data.

## Service: 
Implements the business logic of the application. Services interact with the Prisma ORM models to perform CRUD operations on the database.

## Client:
The client represents any external system or application that interacts with the API.

It sends HTTP requests to the API endpoints defined in the API contract.

## API Contract (OpenAPI Specification):
The API contract defines the structure and behavior of the API endpoints.

It specifies the request and response payloads, HTTP methods, status codes, and authentication mechanisms.

The contract acts as a contract between the client and the API, ensuring consistent communication and interoperability.

## Router:
Routers in Express.js handle incoming HTTP requests and direct them to the appropriate controllers.

Each router corresponds to a specific set of endpoints (e.g., userRouter, assessmentRouter).

Routing logic is defined based on the HTTP method and URL pattern.

## Controller:
Controllers contain the request handling logic for each endpoint.

They receive requests from routers, validate input data, and invoke the corresponding services.

Controllers are responsible for orchestrating the flow of data between the client, services, and database.

They ensure proper error handling and response formatting.

## Service
Services encapsulate the business logic of the application.

They interact with the Prisma ORM models to perform database operations.

Services implement application-specific logic such as data validation, manipulation, and aggregation.

They enforce business rules and ensure data integrity.

# Development Workflow:

The development workflow for building the REST API follows these general steps:

## Define API contract: 
Design the API endpoints, request/response schemas, and authentication mechanisms using the OpenAPI specification.

## Implement routers: 
Create Express.js routers to handle incoming requests and define routing logic based on the API contract.

## Develop controllers: 
Write controller functions to handle requests, validate input data, and invoke the corresponding services.

## Implement services: 
Implement business logic in service functions, utilizing Prisma ORM models for database operations.

## Documentation: 
Document the API endpoints, request/response schemas, and usage instructions for clients and developers.

## Conclusion:
The outlined architecture provides a structured and scalable approach to developing RESTful APIs using TypeScript, Node.js & Express. By following best practices and design principles, developers can build maintainable and efficient APIs to meet the requirements of modern web applications.


# Open API Swagger documentation is available when you execute locally at: http://localhost:8000/api-docs & http://localhost:8000/redoc

Redoc:

![image](https://github.com/user-attachments/assets/e97e7bfd-7e52-48a6-9f3f-e52999ae961e)

Swagger:

![image](https://github.com/user-attachments/assets/4ed1d4de-c760-46ff-938e-01bdb32a2d2f)

# Follow below steps in order to start the frontend & backend servers

1. clone this repo
2. cd PS-Frontend
3. npm install
4. npm run dev

The above steps will start your frontend server on http://localhost:3000

1. cd PS-Backend
2. npm install
3. npm run dev

The above steps will start your backend server on http://localhost:8000


# Dockerfile & yaml files for pushing to the container registry using github actions

there is Dockerfile in this repository & yaml files in the .github folders for frontend & backend which will be responsible for pushing the images onto the container registry in the docker environments