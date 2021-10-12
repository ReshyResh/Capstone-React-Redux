/* eslint consistent-return:0 */
const check = (coin) => {
    switch (coin) {
      case 'BTCUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1.png';
      case 'ETHUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png';
      case 'DOGEUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/74.png';
      case 'LINKUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1975.png';
      case 'BNBUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/1839.png';
      case 'XRPUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/52.png';
      case 'LTCUSDT':
        return 'https://s2.coinmarketcap.com/static/img/coins/200x200/2.png';
      default:
        return 'Image not found';
    }
  };
export default check;