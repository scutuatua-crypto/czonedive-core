# Update a user

Update a user by ID.

Endpoint: PUT /api/users/{id}
Version: 24.9.2.5
Security: ApiKeyAuth, Bearer

## Path parameters:

  - `id` (string, required)
    User ID

## Request fields (application/json):

  - `apiToken` (string)

  - `createdTime` (string)

  - `email` (string, required)

  - `groups` (array)

  - `groups.id` (string)

  - `groups.name` (string)

  - `integrated` (boolean)

  - `lastLogin` (string)

  - `lastOrgLogin` (string)

  - `oldPassword` (string)

  - `orgId` (string)

  - `password` (string)

  - `role` (integer)

  - `service` (boolean)

  - `username` (string, required)

## Response 200 fields (application/json):

  - `message` (string)
    Example: "Operation succeeded"

  - `result` (any)

  - `success` (boolean)
    Example: true

## Response 400 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)

## Response 403 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)


