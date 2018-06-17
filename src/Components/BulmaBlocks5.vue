<template lang="pug">

div.container
  hr 
  li
    a(href='https://bulma.io/documentation/form/') Form
  ul
    li
      a(href='https://bulma.io/documentation/form/general') General 
    li
      a(href='https://bulma.io/documentation/form/input') Input 
    li
      a(href='https://bulma.io/documentation/form/textarea') Textarea 
    li
      a(href='https://bulma.io/documentation/form/select') Select 
    li
      a(href='https://bulma.io/documentation/form/checkbox') Checkbox 
    li
      a(href='https://bulma.io/documentation/form/radio') Radio 
    li
      a(href='https://bulma.io/documentation/form/file') File  
 
 
 
  input(type='button' class='button is-outlined is-success' value='checkಠ' @click='ಠ()')
  input(type='button' class='button is-loading is-primary' value ='clearΦ' @click='Φ()')
  input(type='button' class='button is-disabled is-info' value ='None')
  input(type='button' class='button loading  is-small is-danger' value ='darkᛥ' @click='ᛥ()')
  input(type='button' class='button is-medium is-warning' value ='lightѼ' @click='Ѽ()')
  input(type='button' class='button is-large is-link' value ='None')

</template>
 

<script>


export default {
  data() {
    return {
              }
},
  computed: {},

  methods: {
runMethod() {
        // Start of Run Method        








        // End of Run Method
    },
    ಠ() {



    },
    Φ() {



    },
    ᛥ() {



    },
    Ѽ() {


      
    },
},
created() {
      console.log(this.runMethod(),  "This is BB 3");

    }
    
  }

</script>
<style lang="scss" scoped>
ul{
  li{
    a{
      color:hsl(345, 82%, 51%);
      margin:2rem;
      padding:2rem;
    }
  }
}

    </style>




