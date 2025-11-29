# Settings - In-House

## Update single InHouse Rule

 - [PUT /api/v2.0/orgs/{orgToken}/settings/inHouse/{ruleUuid}](https://api-docs.mend.io/sca/2.0/settings-in-house/updateinhouserule.md): Updates a single In-House library rule

## Delete Single In-House Rule

 - [DELETE /api/v2.0/orgs/{orgToken}/settings/inHouse/{ruleUuid}](https://api-docs.mend.io/sca/2.0/settings-in-house/deleteinhouserule.md): Deletes a single In-House library rule

## Update Multiple In-House Rules

 - [PUT /api/v2.0/orgs/{orgToken}/settings/inHouse/rules](https://api-docs.mend.io/sca/2.0/settings-in-house/updateallowlistrulessettings.md): Updates the pattern-mat§ching rules of an In-House library rule

## Create Multiple In-House Rules

 - [POST /api/v2.0/orgs/{orgToken}/settings/inHouse/rules](https://api-docs.mend.io/sca/2.0/settings-in-house/addinhouserules.md): Creates one or more in-house library rules

## Delete multiple InhHouse rules

 - [DELETE /api/v2.0/orgs/{orgToken}/settings/inHouse/rules](https://api-docs.mend.io/sca/2.0/settings-in-house/deleteinhouserules.md): Deletes one or more in-house library rules

## Apply In-House Rules

 - [PUT /api/v2.0/orgs/{orgToken}/settings/inHouse/apply](https://api-docs.mend.io/sca/2.0/settings-in-house/applywhitelistrules_1.md): Applies the current In-House library rules to a given organization. Use this request after creating and/or updating In-House rules

## Get In-House Settings

 - [GET /api/v2.0/orgs/{orgToken}/settings/inHouse](https://api-docs.mend.io/sca/2.0/settings-in-house/getorgproprietaryrules.md): Returns a list of all In-House library rules for a given organization

## Create Single In-House Rule

 - [POST /api/v2.0/orgs/{orgToken}/settings/inHouse](https://api-docs.mend.io/sca/2.0/settings-in-house/addproprietaryrule.md): Creates a single In-House rule to match libraries by name or maven coordinates (artifact id, group id) and designate these libraries as known, trusted entities

