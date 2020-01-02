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

Returns sign for payment form

### .createSecondSign(orderAmount, orderId)

Returns payment sign



## Usage

```js
 var freekassa = require('free-kassa-api');
 var FK = new freekassa('merchantId', 'firstSecretPhrase', 'secondSecretPhrase');
 
 var url = FK.createFormUrl('id', 'price', {
  extraParameter1: 'example',
  extraParameter2: '1'
 });
```
