<template lang='pug'>
div.main
  hr

  //   div  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempus ligula. In vitae iaculis neque. Nullam quis orci sapien. In consequat pulvinar orci vel bibendum. Vivamus fermentum risus ac nisi interdum efficitur. Nam placerat eget odio vel pretium. In ligula est, hendrerit et molestie a, tempus ut nulla. Aenean convallis elit elit, a elementum nisi scelerisque in. Cras nec ante leo. Morbi ut mattis mauris. Fusce accumsan nibh leo, quis fermentum orci porta eget.
  //   Integer et lacus ac lorem lacinia elementum. Fusce a augue accumsan, laoreet turpis sed, tincidunt quam. Nunc non elit lobortis, feugiat sapien in, pretium nibh. Donec viverra arcu a efficitur tempor. Sed ut augue maximus, efficitur ligula at, cursus sapien. Integer consectetur ac dui nec lacinia. Sed ac sem nulla.
  //   Vestibulum in varius nunc. Cras dolor nibh, faucibus a rutrum vitae, scelerisque et magna. Fusce a magna sed velit pellentesque ultrices. Integer tortor justo, aliquet efficitur vestibulum ut, placerat vehicula tellus. Maecenas quis libero eget nulla porttitor finibus eget a urna. Sed tristique malesuada massa, a vehicula magna iaculis sed. Proin commodo nibh at tincidunt semper. Etiam cursus commodo purus sit amet accumsan. Etiam condimentum ultricies lacus, ac finibus ipsum semper eu.
  //   Phasellus eget quam in nisi tincidunt sodales. Cras dictum quam eget mi convallis, sed malesuada nisi pellentesque. Curabitur a elementum est, et imperdiet lacus. Proin semper pretium est, quis venenatis odio maximus non. Aenean bibendum bibendum tortor eu vulputate. Quisque bibendum maximus pharetra. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus neque tristique tempor faucibus. Nam dapibus condimentum odio vitae aliquet. Duis eget ante tristique, porttitor elit a, lobortis diam. Morbi aliquet justo sit amet elit eleifend pharetra. Vestibulum venenatis enim in arcu ornare, ut vestibulum ligula posuere.
  //   Nam accumsan nec neque vitae dapibus. Donec ullamcorper, dui vel scelerisque ultricies, felis metus feugiat sapien, sit amet laoreet nunc lorem quis urna. Morbi cursus metus orci, non aliquam felis fermentum eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus urna in lorem vulputate fermentum. Phasellus varius, enim dictum aliquet placerat, lectus purus feugiat neque, eu volutpat nibh nunc id massa. Fusce bibendum metus in arcu tincidunt sollicitudin non ac nisl. Nulla bibendum, lectus at pulvinar sollicitudin, felis ipsum luctus ipsum, eget fringilla sapien nibh non lectus. Cras augue sem, placerat eu orci vitae, consectetur hendrerit magna.
  //   Morbi bibendum iaculis gravida. Maecenas sit amet placerat metus. Maecenas at eros vitae eros scelerisque hendrerit. Quisque eget ultrices elit, at imperdiet nibh. Nulla facilisi. Suspendisse vitae sagittis dui. Donec vitae turpis mollis, tincidunt nisi nec, tincidunt felis. Ut facilisis nulla tortor. Vestibulum dapibus dolor at libero posuere ultrices. Curabitur eu quam eget leo dictum imperdiet. In laoreet consectetur leo. Proin eleifend eros ex, eu tempus quam tempor vel.
  //   Etiam vestibulum arcu molestie cursus dapibus. Nulla scelerisque aliquam cursus. Vestibulum quis aliquam lacus. Etiam ultricies gravida nibh, vel dapibus eros hendrerit eget. Mauris mattis cursus lacus. Curabitur ac auctor mi. Integer feugiat suscipit ex eget molestie. Donec ac pulvinar arcu. Nullam facilisis ac est et posuere. Sed sodales lacus sit amet purus sollicitudin scelerisque. Etiam auctor condimentum consectetur. Vivamus posuere erat vitae sem imperdiet varius. Integer magna velit, pretium ac erat et, congue tincidunt dui. Quisque egestas leo non consequat consequat. Ut nec dolor eros. Cras lectus orci, maximus hendrerit vestibulum non.

</template>

<script> // @ is an alias to /src

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
