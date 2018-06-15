<template lang='pug'>
div.container
  div.nav
  div.sidebar
    ul
      router-link(tag='li' active-class='active' to='/Home')
        a Home   
      router-link(tag='li' active-class='active' to='/MainArrayTests')
        a Main Array Tests
      hr
      router-link(tag='li' active-class='active' to='/Debug')
        a Debug
  router-view




</template>

<style lang="scss">
.active{
    a{
    background-color:pink;
  }
}
.sidebar{
  display:flex;
  
}
</style>
