export default function priceWithMonthlyDiscount(
  ratePerHour,
  numDays,
  discount
) {
  let billedDaysPerMonth = 22;

  let singleDayCost = ratePerHour * 8;

  let monthCost = singleDayCost * billedDaysPerMonth;

  let monthsCount = Math.floor(numDays / billedDaysPerMonth);

  //   console.log(monthsCount);

  let reminingDays = numDays % billedDaysPerMonth;

  //   console.log(reminingDays);

  let monthlyRate = billedDaysPerMonth * singleDayCost * (1 - discount);

  let reminingDaysCost = reminingDays * singleDayCost;

  //   console.log(reminingDaysCost);

  let totalCost = Math.ceil(monthsCount * monthlyRate + reminingDaysCost);

  return totalCost;
  //   console.log(totalCost);

  //   let Discount = Math.ceil(totalCost * discount);

  //   console.log(Discount);

  //   let costWithDiscount = totalCost - Discount;

  //   console.log(costWithDiscount);

  //   const billableDaysPerMonth = 22;

  //   const fullMonths = Math.floor(numDays / billableDaysPerMonth);

  //   const remainingDays = numDays % billableDaysPerMonth;

  //   const monthlyRate = billableDaysPerMonth * 8 * ratePerHour * (1 - discount);

  //   const remainingRate = remainingDays * 8 * ratePerHour;

  //   const totalCost = Math.ceil(fullMonths * monthlyRate + remainingRate);

  //   return totalCost;
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
