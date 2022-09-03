const TAX_RATE = 0.08;
const PHONE = 99.99;
const ACCESSORY_PRICE = 9.99;

let bank_balance = Number(prompt("Bank account balance: "));
let phonesAccPurchased = 0;
let total = 0;

function calulateTax(amt, tax) {
  return amt + (amt * tax);
}
function priceFormat(price) {
  return "$" + price.toFixed(2);
}

while ((PHONE + ACCESSORY_PRICE) <= bank_balance) {
  phonesAccPurchased += 1;
  bank_balance -= calulateTax((PHONE + ACCESSORY_PRICE), TAX_RATE)
  total += calulateTax((PHONE + ACCESSORY_PRICE), TAX_RATE)
}

console.log("Total is " + priceFormat(total) + ", and you bought " + phonesAccPurchased + " phone combos.")

/*
Goal: Given bank balance, how many
phones+accesories can you buy?

Return in form: "Total is $###.##, and you
bought # phone combos."

-at the end, implement prompt()

*instructions weren't clear so I'm just free
balling it.
*/