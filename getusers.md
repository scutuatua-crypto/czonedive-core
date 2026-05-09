# Get a list of users.

Get a list of users.

Endpoint: GET /api/users
Version: 24.9.2.5
Security: ApiKeyAuth, Bearer

## Response 200 fields (application/json):

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

## Response 403 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)


