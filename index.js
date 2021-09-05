var md5 = require('md5');
module.exports = class freekassa { 
    constructor(merchantId, firstPhrase, secondPhrase, currency) {
        this.merchantId = merchantId;
        this.firstPhrase = firstPhrase;
        this.secondPhrase = secondPhrase;
        this.currency = currency;
    }
    createFormURL(orderAmount, orderId, extraParameters) {
        var url = 'http://www.pay.freekassa.ru/merchant/cash.php' + `?m=${this.merchantId}` + `&oa=${orderAmount}` + `&currency=${this.currency}` + `&o=${orderId}` + `&s=${this.createFirstSign(orderAmount, orderId)}`;
        for (var key in extraParameters) {
            url = url + `&us_${key}=${extraParameters[key]}`;
        }
        return url;
    }
    createFirstSign(orderAmount, orderId) {
        return md5(this.merchantId + ':' + orderAmount + ':' + this.firstPhrase + ':' + this.currency + ':' + orderId);
    }
    createSecondSign(orderAmount, orderId) {
        return md5(this.merchantId + ':' + orderAmount + ':' + this.secondPhrase + ':' + orderId);
    }
}
