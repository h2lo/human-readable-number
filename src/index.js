module.exports = function toReadable(number) {
    const obj1 = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
    };
    const obj2 = {
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
        0: "twenty",
    };
    const obj3 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    if (number >= 0 && number <= 10) {
        return obj1[number];
    }

    if (number >= 11 && number <= 20) {
        return obj2[number.toString()[1]]; //15
    }

    if (number >= 21 && number < 100) {
        if (number.toString()[1] == 0) {
            return obj3[number.toString()[0]];
        } else {
            return (
                obj3[number.toString()[0]] +
                " " +
                obj1[number.toString()[1]]
            );
        }
    }
    if (number > 99 && number < 1000) {
      if (number.toString()[1] == "0" && number.toString()[2] == "0")
          return obj1[number.toString()[0]] + " hundred";
      if (number.toString()[1] == "0")
          return (
              obj1[number.toString()[0]] +
              " hundred " +
              obj1[number.toString()[2]]
          );
      if (number.toString()[1] == "1" && number.toString()[2] == 0)
          return obj1[number.toString()[0]] + " hundred ten";
      if (number.toString()[1] == "1")
          return (
              obj1[number.toString()[0]] +
              " hundred " +
              obj2[number.toString()[2]]
          );
      if (number.toString()[2] == "0")
          return (
              obj1[number.toString()[0]] +
              " hundred " +
              obj3[number.toString()[1]]
          );
      else
          return (
              obj1[number.toString()[0]] +
              " hundred " +
              obj3[number.toString()[1]] +
              " " +
              obj1[number.toString()[2]]
          );
  }
};

