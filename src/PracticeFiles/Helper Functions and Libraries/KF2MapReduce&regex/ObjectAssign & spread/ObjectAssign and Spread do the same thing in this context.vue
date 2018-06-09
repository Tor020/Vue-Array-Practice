<template lang="pug">
div.container-fluid.home-hidden
  .col-sm-9.col-sm-offset-3.col-md-10.col-md-offset-2.main 
    input(type='button' @click='Φ()' value='Test Function Call')
    div.row
      fieldset
        legend Difficulty
        label.radio-inline
          input#normaldiff.rButton(type='radio', v-model='difficulty' name='difficulty', value='Normal', checked='')
          |  Normal
        label.radio-inline
          input#harddiff.rButton(type='radio', v-model='difficulty' name='difficulty', value='Hard')
          |  Hard
    div.row
      fieldset
          legend Choose Number of players
          label.radio-inline
            input#1play.rButton(type='radio', v-model='numberofplayers' name='numberofplayers', value='1play', checked='')
            |  1
          label.radio-inline
            input#2play.rButton(type='radio', v-model='numberofplayers' name='numberofplayers', value='2play')
            |  2
    h3.sub-header ZEDS
</template>

<script>
import { ZedHP } from "./ZedHP.js";

export default {
  data() {
    return {
      numberofplayers: "1play",
      difficulty: "Normal",
      Zeds: ZedHP
    };
  },
  methods: {
    Φ(name) {
      console.log(this.ಠ());
    },

    ಠ() {
      let finalObject;
      let zedList = Object.keys(this.Zeds);  // #1a refers to the data object which is populated from the import
      console.log("list of keys", zedList); //  #1b

      finalObject = zedList.map(i => {   //     #2a finalObject is what the list of properties will be returned into. 
                                         //     #2b it is populated by mapping(looping) over every key, and then returning an object with the value that corresponds
                                       
       return {[i]: this.Zeds[i][this.difficulty]} ;  }   )

      

          .reduce((acc, i) =>   //             #3a Reduce is chained on the map and condenses the returned objects from map into one new Object.
                                //             #3b There are two ways to achieve this result, using the spread operator and the Object.assign method                  
           ({ ...acc, ...i }), {});     


        // .reduce((acc, i) => ({ ...acc, ...i }), {});     //Spread Operator Way
        // .reduce((acc, i)=> Object.assign(acc, i), {});   //Object Assign Way


      console.log(finalObject);
      return finalObject;
    }
  }
};



//   Some differences between Object.assign and spread operator.
//   TLDR: spread operator is considered more readable and more useful, by the author

//    This is because the spread operator can be used to create an array copy, as well as an object copy
//    While Object.assign always needs to be passed an empty object, and only works on objects while being overly verbose.
//    The conclusion being that the spread operator is more versatile and cleaner syntactically.

//      The obvious caveat here being that object.assign has clear intent / purpose whereas the spread operator can be construed to be several things.


//  https://medium.com/@corinnemariekelly/object-assign-vs-spread-operator-577c889dbadc

/*
    Additional Article on topic  https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
    
    
    "to perform the same operation on the original array in one line to find the selected user is super simple:"

const selectedPerson = peopleArray.find(person => person.id === idToSelect)
"This is a fantastic solution when you need to access the data in one off situations, or if you just prefer your data to stay in the array format."
    
    
"pointed out a killer single line solution that eliminates the return statement and makes fantastic use of the spread operator. "    
    
const arrayToObject = (arr, keyField) =>
  Object.assign({}, ...arr.map(item => ({[item[keyField]]: item})))

*/
</script>

<style>

</style>
