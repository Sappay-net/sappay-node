# Invoice

## Structure

`Invoice`

## Fields

| Name           | Type                                       | Tags     | Description                   |
| -------------- | ------------------------------------------ | -------- | ----------------------------- |
| `customer`     | [`Customer`](../../doc/models/customer.md) | Required | -                             |
| `type`         | `string`                                   | Required | -                             |
| `amount`       | `number`                                   | Required | -                             |
| `reference_id` | `string`                                   | Required | -                             |
| `token`        | `string`                                   | Required | obtained from `authenication` |

## Example (as JSON)

```json
{
  "customer": {
    "name": "name0",
    "email": "email6",
    "country": 176,
    "city": 134,
    "details": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "type": "type0",
  "amount": 100,
  "reference_id": "<REFRENCE for your system>",
  "token": "<TOKEN obtained from authentication>"
}
```
