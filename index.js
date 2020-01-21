var md5 = require('md5');
module.exports = class freekassa { 
    constructor(merchantId, firstPhrase, secondPhrase) {
    this.merchantId = merchantId;
    this.firstPhrase = firstPhrase;
    this.secondPhrase = secondPhrase;
    }
    createFormURL(orderId, orderAmount, extraParameters) {
        var url = 'http://www.free-kassa.ru/merchant/cash.php' + `?m=${this.merchantId}` + `&oa=${orderAmount}` + `&o=${orderId}` + `&s=${this.createFirstSign(orderAmount, orderId)}`;
        for (var key in extraParameters) {
            url = url + `&us_${key}=${extraParameters[key]}`;
        }
        return url
    }
    createFirstSign(orderAmount, orderId) {
        return md5(this.merchantId + ':' + orderAmount + ':' + this.firstPhrase + ':' + orderId);
    }
    createSecondSign(orderAmount, orderId) {
        return md5(this.merchantId + ':' + orderAmount + ':' + this.secondPhrase + ':' + orderId);
    }
}
