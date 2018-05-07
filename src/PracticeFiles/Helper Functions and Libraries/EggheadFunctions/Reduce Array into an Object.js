//see CONSOLE!
    const votes = [
      "angular",
      "angular",
      "react",
      "react",
      "react",
      "angular",
      "ember",
      "react",
      "vanilla"
    ];

//The initial value is the Accumulator that will be passed with the reducer function so that. Basically, this is the item the actualy reducer accumulator is passed into.
    let initialValue = {};  

    const reducer = function(accumulator, item) {
      if (!accumulator[item]) {
        accumulator[item] = 1;
      } else {
        accumulator[item] = accumulator[item] + 1;
      }
      return accumulator;
    };

    let result = votes.reduce(reducer, initialValue);

    // Output
    console.log("Angular: ", result.angular)
    console.log("React: ", result.react)
    console.log("Ember: ", result.ember)
    console.log("Vanilla: ", result.vanilla)
    console.log(initialValue)