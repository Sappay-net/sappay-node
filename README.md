# Getting Started with SAPPAY

## Introduction

API for sappay dashboard & checkout

##

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter                   | Type                         | Description                                                             |
| --------------------------- | ---------------------------- | ----------------------------------------------------------------------- |
| `credentials`               | Credentials                  | The API credentials for authentication. <br> **Default: `Credentials`** |
| `environment`               | Environment                  | The API environment. <br> **Default: `Environment.Production`**         |
| `timeout`                   | `number`                     | Timeout for API calls.<br>_Default_: `0`                                |
| `httpClientOptions`         | `Partial<HttpClientOptions>` | Stable configurable http client options.                                |
| `unstableHttpClientOptions` | `any`                        | Unstable configurable http client options.                              |
| `accessToken`               | `string`                     | The OAuth 2.0 Access Token to use for API requests.                     |

### Credentials

#### All properties are required

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| `username`     | `string` | email on merchant dashboard.                                   |
| `password`     | `string` | password on merchant dashboard.                                |
| `clientId`     | `string` | API client ID obtained from Merchant portal.                   |
| `clientSecret` | `string` | API client Secret Key obtained from Merchant portal. requests. |

### HttpClientOptions

| Parameter     | Type                          | Description                                                  |
| ------------- | ----------------------------- | ------------------------------------------------------------ |
| `timeout`     | `number`                      | Timeout in milliseconds.                                     |
| `httpAgent`   | `any`                         | Custom http agent to be used when performing http requests.  |
| `httpsAgent`  | `any`                         | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests.                            |

### RetryConfiguration

| Parameter                | Type           | Description                                                                                                           |
| ------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------- |
| `maxNumberOfRetries`     | `number`       | Maximum number of retries. <br> _Default_: `0`                                                                        |
| `retryOnTimeout`         | `boolean`      | Whether to retry on request timeout. <br> _Default_: `true`                                                           |
| `retryInterval`          | `number`       | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> _Default_: `1` |
| `maximumRetryWaitTime`   | `number`       | Overall wait time for the requests getting retried. <br> _Default_: `0`                                               |
| `backoffFactor`          | `number`       | Used in calculation of wait time for next request in case of failure. <br> _Default_: `2`                             |
| `httpStatusCodesToRetry` | `number[]`     | Http status codes to retry against. <br> _Default_: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]`              |
| `httpMethodsToRetry`     | `HttpMethod[]` | Http methods to retry against. <br> _Default_: `['GET', 'PUT']`                                                       |

## Getting started

The API client can be initialized as follows:

```ts
const sappayClient = new Client({
  credentials: {
    clientId: '<YOUR CLIENT ID>',
    clientSecret: '<YOUR CLIENT SECRET KEY>',
    username: '<YOUR MERCHANT EMAIL>',
    password: '<YOUR MERCHANT PASSWORD>',
  },
});
```

then pass the `client` to `ApiController` as follows:

```ts
const sapPay = new ApiController(sappayClient);
```

## List of APIs

- [Authentication](doc/controllers/api.md)
- [Create Invoice](doc/controllers/api.md)
- [Get Checkout](doc/controllers/api.md)
- [Perform Checkout](doc/controllers/api.md)

## Classes Documentation

- [ApiResponse](doc/api-response.md)
- [ApiError](doc/api-error.md)
