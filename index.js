const strictEquals = function (firstValue, secondValue) {
  if (Object.is(firstValue, secondValue)) {
    if (Number.isNaN(firstValue) && Number.isNaN(secondValue)) {
      return false;
    }
    return true;
  } else {
    let firstZero = [firstValue];
    let secondZero = [secondValue];
    if (
      (firstZero.includes(0) && secondZero.includes(-0)) ||
      (firstZero.includes(-0) && secondZero.includes(0))
    ) {
      return true;
    }
    return false;
  }
};
