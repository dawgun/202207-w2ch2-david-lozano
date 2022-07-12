const strictEquals = function (firstValue, secondValue) {
  if (Object.is(firstValue, secondValue)) {
    if (isNaN(firstValue) && isNaN(secondValue)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};

export default strictEquals;
