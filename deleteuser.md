# Delete a user

Delete a user by ID.

Endpoint: DELETE /api/users/{id}
Version: 24.9.2.5
Security: ApiKeyAuth, Bearer

## Path parameters:

  - `id` (string, required)
    User ID

## Response 200 fields (application/json):

  - `message` (string)
    Example: "Operation succeeded"

  - `result` (any)

  - `success` (boolean)
    Example: true

## Response 403 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)

## Response 404 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)

## Response 500 fields (application/json):

  - `message` (string)
    Example: "Something went wrong"

  - `result` (string)
    Example: "error"

  - `success` (boolean)


