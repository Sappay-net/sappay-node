# API

```ts
const apiController = new ApiController(client);
```

## Class Name

`ApiController`

# Authenticate

Authentication

```ts
async auth(
  credentials: {
    clientId: string,
    clientSecret: string,
  }
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter        | Type                          | Tags                                 | Description                                      |
| ---------------- | ----------------------------- | ------------------------------------ | ------------------------------------------------ |
| `clientId`       | `string`                      | Required if not configured in config | client id key obtained from Merchant portal.     |
| `clientSecret`   | `string`                      | Required if not configured in config | client secret key obtained from Merchant portal. |
| `requestOptions` | `RequestOptions \| undefined` | Optional                             | Pass additional request options.                 |

## Response Type

token of tye `string`.

## Example Usage

```ts
try {
  const token = await apiController.authentication({ clientId, clientSecret });
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

# Create Invoice

create an invoice & get its id.

```ts
async createInvoice(
  invoicePayload: Invoice,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Parameters

| Parameter        | Type                          | Tags     | Description                      |
| ---------------- | ----------------------------- | -------- | -------------------------------- |
| `invoicePayload` | `Invoice`                     | Required | details for creating invoice.    |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

invoice ID of tye `string`.

## Example Usage

```ts
const invoicePayload = {
  customer: {
    name: '<SOMEONES NAME>',
    email: '<SOMEONES email>',
    country: '<country id>',
    city: '<city id>',
    details: {
      // anything extra...
    },
  },
  type: 'POS',
  amount: '<Amount>',
  reference_id: '<REFRENCE for your system>',
  token: '<TOKEN obtained from authentication>',
};
try {
  const invoiceId = await apiController.createInvoice(invoicePayload);
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
  }
}
```

# Get Checkout

get checkout details.

```ts
async createInvoice(
  invoiceId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter        | Type                          | Tags     | Description                      |
| ---------------- | ----------------------------- | -------- | -------------------------------- |
| `invoiceId`      | `string`                      | Required | Id for getting checkout.         |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

checkout details type `object`.

## Example Usage

```ts
try {
  const invoice = await apiController.getCheckout('<INVOICE ID>');
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
  }
}
```

# Perform Checkout

perform checkout.

```ts
async performCheckout(
  checkoutPayload: CheckoutPayload,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter         | Type                          | Tags     | Description                      |
| ----------------- | ----------------------------- | -------- | -------------------------------- |
| `checkoutPayload` | `CheckoutPayload`             | Required | Info to verify/perform checkout. |
| `requestOptions`  | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

checkout result type `object`.

## Example Usage

```ts
try {
  const checkout = await sapPay.performCheckout({
    invoice_id: invoiceId,
    payment_processor_id: '11662803063052488',
    customer_msisdn: '75470101',
    otp: otp,
  });
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
  }
}
```

# Get Status

get last transaction status against invoiceId.

```ts
async getStatus(
  invoiceId: string,
  requestOptions?: RequestOptions
): Promise<TransactionStatus | null>
```

## Parameters

| Parameter        | Type                          | Tags     | Description                      |
| ---------------- | ----------------------------- | -------- | -------------------------------- |
| `invoiceId`      | `string`                      | Required | Id for getting checkout.         |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TransactionStatus`](../models/transaction-status.md) type `object`.

## Example Usage

```ts
const status = await apiController.getStatus('<INVOICE ID>');
if (!status) {
  console.log('something went wrong...');
}
```
