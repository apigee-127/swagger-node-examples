# Swagger Node: Volos Plugins Example

## Introduction

This shows how to setup and use Volos Plugins that enable advanced declarative API policies in [Swagger Node](https://www.npmjs.com/package/swagger). 

The [volos-swagger-oauth](https://www.npmjs.com/package/volos-swagger-oauth) plugin is used to set up OAuth 2.0 token issuance and protection via Apigee Edge. But note that it could be set up for Redis instead of Apigee and also be used for protecting via:

* API Key
* Basic Auth
 
While the [volos-swagger-apply](https://www.npmjs.com/package/volos-swagger-apply) plugin is used to show:

* cache
* quota
* analytics
* spike arrest

(Note that each of these plugins can be used independently of the other.)

## To run, you must:

1. Checkout the app and run `npm install` to install the dependencies.

2. Register with [openweathermap](http://home.openweathermap.org) and place the APPID it gives you in config/default.yaml as the value for the key `openweathermap_APPID` - replacing the value REPLACE_ME. Example:

```yaml
openweathermap_APPID: REPLACE_ME
```

3. To access the OAuth secured API (as defined in this example), you'll need to follow the directions for installing the [Apigee Remote Proxy](https://www.npmjs.com/package/apigee-remote-proxy). Once done, you'll need to get your an application key from the [Apigee Console](https://enterprise.apigee.com/). Finally, in your api/swagger/swagger.yaml file, find the `x-volos-config` and replace the values marked REPLACE_ME in the apigeeProxyKey and apigeeProxyUri to match your API Key and Organization name respectively. Example: 

```yaml
x-volos-config:
  apigeeProxyKey: &apigeeProxyKey REPLACE_ME
  apigeeProxyUri: &apigeeProxyUri https://REPLACE_ME-test.apigee.net/apigee-remote-proxy
```

4. Start the application by running: `node app.js`. It will offer some instructions to continue.
