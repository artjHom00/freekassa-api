# FREE-KASSA API

Free-Kassa Merchant API.

## Install

```sh
$ npm i free-kassa-api
```



## Methods

### .createFormURL(orderAmount, orderId, {extraParameters})

Returns a URL to payment form.

### .createFirstSign(orderAmount, orderId)

Returns a sign for payment form.

### .createSecondSign(orderAmount, orderId)

Returns a sign for payment.



## Using

```js
 var freekassa = require('freekassa-api');
 var FK = new freekassa('merchantId', 'firstSecretPhrase', 'secondSecretPhrase');
 
 var url = FK.createFormUrl('price', 'id', {
  extraParameter1: 'example',
  extraParameter2: '1'
 });
```
