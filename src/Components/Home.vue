<template>
  <div class="home">
    <img src="../sass_Assets/Assets/logo.png">

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {

  },
  
 //   el: '#root' /*the element to bind this to*/,
    data: { 
      // When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system
      showModal: false,
      placeHolderString: '',
      placeHolderInteger: 0,
      placeHolderBoolean: false,
      placeHolderArray: [],
      placeHolderObj: {},
      placeHolderErrorRes: null
    },
    //Methods are called with functionality added onto the html
    methods: {},
    //Computed methods are called automatically.
    computed: {},

    //  //Instance Lifecycle Hooks

    beforeCreate() {
      /*  Init and Injections & Reactivity  */
    },

    created() {
      /*  Init and Injections & Reactivity  */
      console.log('created function check is: ' + this.placeHolderInteger);
    },

    beforeMount() {
      /* before create root.$el and replace "root.el" with it */
    },

    mounted() {
      /*  create root.$el and replace "root.el" with it   */
    },

    beforeUpdate() {
      /*  When data changes but the virtual Dom hasn't re-rendered yet  */
    },

    updated() {
      /*   When data changes and the virtual Dom has re-rendered  */
    },

    beforeDestroy() {
      /*  Before Teardown watchers, child components and event listeners   */
    },

    destroyed() {
      /*  After Teardown watchers, child components and event listeners  */
    }

}


</script>
