module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error();
    const res = [];
  const rules = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ];

  for (let i = 0; i < arr.length; i++) {
    if (rules.includes(arr[i])) {
      switch (arr[i]) {
        case "--discard-next":
          if (i + 2 < arr.length) i++;
          break;
        case "--discard-prev":
          res.pop();
          break;
        case "--double-next":
          if (i + 1 < arr.length) res.push(arr[i + 1]);
          break;
        default:
          if (i - 1 >= 0) res.push(arr[i - 1]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
};	