const input = require('./config');

const TotalPriceBuy = input.Buy.price * input.Buy.quantity;
const SellQuantity = input.Buy.quantity * 0.999;
const ProfitBTC = input.Sell.price * SellQuantity * 0.999 - TotalPriceBuy;
const ProfitUSD = ProfitBTC * input.Exchange.BTCUSD;
const ProfitVND = ProfitUSD * input.Exchange.USDVND;
console.log(`Profit BTC: ${ProfitBTC.toFixed(8)}`);
console.log(`Profit USD: ${ProfitUSD.toFixed(8)}`);
console.log(`Profit VND: ${ProfitVND.toFixed(8)}`);