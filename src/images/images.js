/* eslint consistent-return:0 */
const check = (coin) => {
    switch (coin) {
      case 'BTCUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png'
      case 'ETHUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png'
      case 'DOGEUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/74.png'
      case 'LINKUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1975.png'
      case 'BNBUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png'
      case 'XRPUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/52.png'
      case 'LTCUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/2.png'
      case 'NEOUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1376.png'
      case 'QTUMUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1684.png'
      case 'ADAUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/2010.png'
      case 'EOSUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1765.png'
      case 'TUSDUSDT':
        return 'https://i.imgur.com/LPo1eDm.png'
      case 'IOTAUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1720.png'
      case 'XLMUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/512.png'

      default:
        return 'Image not found';
    }
  };
export default check;