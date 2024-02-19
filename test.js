const readline = require('readline');
const { Client, ApiController } = require('./dist/index.js');

require('dotenv').config();

const sappayClient = new Client({
  credentials: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.USER,
    password: process.env.PASSWORD,
  },
});

const sapPay = new ApiController(sappayClient);

(async () => {
  console.log('Authenticating...');
  const token = await sapPay.authentication();
  console.log('Authenticated!', token);

  console.log('Creating Invoice...');
  const invoiceId = await sapPay.createInvoice({
    customer: {
      name: 'umer',
      email: 'temptesting135@gmail.com',
      country: 1,
      city: 1,
      details: {
        test: 'test',
      },
    },
    type: 'POS',
    amount: 1000,
    reference_id: '123Asd123',
    token: token,
  });
  console.log('Invoice Created!', invoiceId);

  console.log('Getting Checkout...');
  const invoice = await sapPay.getCheckout(invoiceId);
  console.log('Checkout!', invoice);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const otp = await new Promise((resolve, reject) => {
    rl.question('Please Enter the OTP  : ', resolve);
  });

  console.log('Performing Checkout...');
  const checkout = await sapPay.performCheckout({
    invoice_id: invoiceId,
    payment_processor_id: '11688813752134336',
    customer_msisdn: '75470101',
    otp: otp,
  });
  console.log('Checkout!', checkout);

  console.log('Getting Status...');
  const status = await sapPay.getStatus(invoiceId);
  console.log('Status!', status);
})();
