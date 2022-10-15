# Invoice

## Structure

`TransactionStatus`

## Fields

| Name                  | Type     | Description                             |
| --------------------- | -------- | --------------------------------------- |
| `transaction_id`      | `string` | id of last transaction agains invoiceId |
| `invoice_id`          | `string` | -                                       |
| `transaction_status`  | `number` | -                                       |
| `transaction_message` | `string` | -                                       |
| `transaction_date`    | `string` | -                                       |
| `redirect_url`        | `string` | -                                       |

## Example (as JSON)

```json
{
  "transaction_id": 11665830551944728,
  "invoice_id": "VWNX1P386XW",
  "transaction_status": "FAILED",
  "transaction_message": "[990417]Cher client, le OTP utilise nexiste pas. Veuillez appeler le 127.",
  "transaction_date": "2022-10-15T10:42:33.580619Z",
  "redirect_url": "https://sappay-sdk-demo.web.app/redirect"
}
```
