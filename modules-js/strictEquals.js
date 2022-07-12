const strictEquals = function (firstValue, secondValue) {
  if (Object.is(firstValue, secondValue)) {
    return true;
  } else {
    return false;
  }
};

export default strictEquals;
