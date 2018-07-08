<template lang='pug'>
div.columns
  .column.is-2.shadow.navColumn

    router-link(tag='li' class='sidenav' active-class='active' to='/Home')
      a Home   
    router-link(tag='li' class='sidenav' active-class='active' to='/MainArrayTests')
      a Main Array Tests
    hr
    router-link(tag='li' class='sidenav' active-class='active' to='/Debug')
      a Debug
    
  router-view




</template>

<style lang="scss" scoped>
.navColumn {
  margin-top: 1.5rem;
}

li {
  a {
    text-align: center;
  }
}
.sidenav {
  text-decoration: none;
  list-style: none;
  a {
    // color:
  }
}

h3,
li {
  margin-left: 1rem;
  // text-align:center;
}
</style>
