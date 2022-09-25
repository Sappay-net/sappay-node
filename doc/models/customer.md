# Customer

customer in invoice payload

## Structure

`Customer`

## Fields

| Name      | Type      | Tags     | Description |
| --------- | --------- | -------- | ----------- |
| `name`    | `string`  | Required | -           |
| `email`   | `string`  | Required | -           |
| `country` | `number`  | Required | -           |
| `city`    | `number`  | Required | -           |
| `details` | `unknown` | Required | -           |

## Example (as JSON)

```json
{
  "name": "name0",
  "email": "example@example.com",
  "country": 10,
  "city": 100,
  "details": {
    "key1": "val1",
    "key2": "val2"
  }
}
```
