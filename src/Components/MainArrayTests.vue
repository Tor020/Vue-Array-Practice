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

  import {arr_Obj_People} from '../PracticeFiles/Premade-Data/PracticeData.js'
  import {arr_Obj_Inventors} from '../PracticeFiles/Premade-Data/PracticeData.js'
  import {arr_LargeNumb} from '../PracticeFiles/Premade-Data/PracticeData.js'

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


  computed: {

  },

  methods: {
    filterFunction(){
      
    }

    runMethod(){

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

      function testProto(){
       let list = weapons


      //Commented Attempts
        // list.map(i => {
        //   console.log(i)
        // })

        // list.filter(i => {
        //   i ==="VLAD"
        // })

        // list.reduce(i =>{
        // if(i === "VLAD") return i

        // })


        return list
      }


        console.log(testProto())




      
    

  },
},

created(){

this.runMethod()
  // console.log(arr_Obj_People)
  // console.log(arr_Obj_Inventors);
  // console.log(arr_LargeNumb);

}



};
</script>









<style lang="sass">

  </style>



