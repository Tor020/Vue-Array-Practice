<template lang="pug">
.main
    <div @mouseover="upHere = true" @mouseleave="upHere = false" >  <h2> Something Something </h2>
        
    </div>
    input(type='button' value='checkಠ' @click='ಠ()')
  
    input(type='button' value ='clearΦ' @click='Φ()')
    input(type='button' value ='darkᛥ' @click='ᛥ()')
    input(type='button' value ='lightѼ' @click='Ѽ()')




</template>
<script>
export default {
  data() {
    return {
      upHere:'',
      pie: 2
    };
  },
  methods: {
    ಠ() {

      if (localStorage.themeSelection === undefined) {
        console.log('localstorage is undefined');
      } else {
        console.log(localStorage.themeSelection);
      }


console.dir(localStorage);
console.table(localStorage);

    },

    Φ() {
      localStorage.clear();

    },

    ᛥ() {
      localStorage.themeSelection = 'dark';

    },

    Ѽ() {

      localStorage.themeSelection='light'


    }
  },

  created() {},


  destroyed() {}
};
/*
console.assert(localStorage.length>5, 'This will print if localStorage length is more than 5') //Prints the 2nd argument if the first argument is false
console.dir(localStorage);
console.table(localStorage);


clear() //cleans all locastorage
key() // localStorage.key(0) will return the key in the key:value pair that items are stored as.
getItem() // localStorage.getItem('userName') will return the value part of the key:value pair.
setItem()  // Adds items to localStorage w/ keyvalue pair
removeItem() localStorage.removeItem('item) // removes the item from the localStorage with that key
*/
</script>

<style lang="scss" scoped>
// input[type='button'] {
//   margin-bottom: 1rem;
//   margin-right: 1rem;
//   border-style: none;
//   border-radius: 6px;
//   padding: 1rem;
//   outline: none;
//   transition: all 700ms;
//   &:hover {
//     box-shadow: inset 2px 2px 5px 0px hsla(145, 100%, 25%, 0.5),
//       inset -2px -2px 5px 0px hsla(145, 100%, 25%, 0.5);
//   }
// }
</style>

