Volos-Swagger-Apply
===================

This module allows you add and configure [Volos](https://github.com/apigee-127/volos) API policies without writing any code - just by declaring it in the Swagger in your Swagger-Node project. The following policies are currently supported by this module:

* Analytics
* Cache
* Quota
* Spike arrest

Analytics is Apigee-specific, but every other policy is available as an in-memory and Redis provider as well as through Apigee Edge.

More information on Volos here: https://github.com/apigee-127/volos

More information on applying policies here: https://github.com/apigee-127/a127-documentation/wiki/Policies


Installation
------------

1. Add the volos modules you plan use to your application dependencies. Example:

```
npm install --save volos-swagger-apply
npm install --save volos-quota-memory
```

2. Add the volos_apply fitting to your pipe (config/default.yaml). I suggest placing it just before your controller router:

```yaml
    swagger_controllers:
      - onError: json_error_handler
      - cors
      - swagger_security
      - _swagger_validate
      - express_compatibility
      - volos-swagger-apply               # <- RUN HERE
      - _router
```

3. Add the x-volos-resources extension tag to your Swagger with your policy configuration:

```yaml
x-volos-resources:
  MyQuota:
    provider: volos-quota-memory
    options:
      timeUnit: minute
      interval: 1
      allow: 1
```

4. Add the "x-volos-apply" tag to any paths or operations on your Swagger you would like your policy to apply it to along with any configuration that is necessary:

```yaml
paths:
  /hello:
    x-volos-apply:
        MyQuota: {}
```
