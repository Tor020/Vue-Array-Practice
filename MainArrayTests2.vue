<template lang="pug">
.targets
  div.js-target
    h1 Javascript Target
    | class name and id 
    span.big 'js-target' 

  div.root
    h1 Root Target
    | class name and id
    span.big 'root'

  div.counter1
    h1 Counter Target
    | class name
    span.big 'counter1'
 
  div.counter2
    h1 Counter Target
    | class name
    span.big 'counter2'
 
  div.counter3
    h1 Counter Target
    | class name
    span.big 'counter3'
 
  div.counter4
    h1 Counter Target
    | class name
    span.big 'counter4'
  div.btnContainer
    input(type="button" value='RunMethod' @click="runMethod")
</template>


<script>
import { arr_Obj_People } from '../PracticeFiles/Premade-Data/PracticeData.js';
import { arr_Obj_Inventors } from '../PracticeFiles/Premade-Data/PracticeData.js';
import { arr_LargeNumb } from '../PracticeFiles/Premade-Data/PracticeData.js';

export default {
  data() {
    return {
      weaponsBase: {
        CrovelLight: 49,
        CrovelHeavy: 86,
        CrovelAlt: 15,
        KatanaLight: 68,
        KatanaHeavy: 90,
        KatanaAlt: 68,
        BoneLight: 80,
        BoneHeavy: 165,
        BoneAlt: 175,
        PulverizerLight: 70,
        PulverizerHeavy: 145,
        PulverizerAlt: 528,
        ZweiLight: 85,
        ZweiHeavy: 195,
        ZweiAlt: 63,
        VLAD: 30,
        EvisceratorPrimary: 480,
        EvisceratorStab: 90,
        EvisceratorChain: 29
      },
      weaponsMisc: {
        PELLETS: {
          VLAD: 7
        }
      }
    };
  },

  computed: {},

  methods: {
    runMethod() {
      const weapons = [
        'CrovelLight',
        'CrovelHeavy',
        'CrovelAlt',
        'KatanaLight',
        'KatanaHeavy',
        'KatanaAlt',
        'BoneLight',
        'BoneHeavy',
        'BoneAlt',
        'PulverizerLight',
        'PulverizerHeavy',
        'PulverizerAlt',
        'ZweiLight',
        'ZweiHeavy',
        'ZweiAlt',
        'VLAD',
        'EvisceratorPrimary',
        'EvisceratorStab',
        'EvisceratorChain'
      ]; 

    function multiply(a, b) {
          return a * b;
        }

    let reH = /(Heavy)/g
    let reL = /(Light)/g


   let result  =  weapons.map(i => ({i, res: multiply(this.weaponsBase[i],10) })
                                .reduce((accumulator, what) => {
                                  accumulator[what.i] = what.res;
                                  return accumulator
                                }, {})


    // let result = weapons.filter(i => {
    //   if (reH.test(i)) return i; })
        
     
      return result;
    },
},
    created() {
      console.log(this.runMethod());

    }

  }

</script>









<style lang="sass">

  </style>



