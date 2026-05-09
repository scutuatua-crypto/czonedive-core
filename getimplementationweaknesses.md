# Get implementation weaknesses

Returns a list of implementation weakness types and their details

Endpoint: GET /api/v3.0/ai/implementationweakness
Version: 3.0
Security: 

## Query parameters:

  - `weaknessID` (string)
    Filter by specific weakness ID

## Response 200 fields (application/json):

  - `weaknessID` (string)

  - `weaknessCategory` (string)

  - `weaknessSeverity` (string)

  - `weaknessScore` (string)

  - `weaknessTitle` (string)

  - `owaspCategory` (string)

  - `weaknessDescription` (string)

  - `weaknessPotentialImpact` (string)

  - `weaknessBestPractices` (string)

  - `weaknessReferences` (string)


