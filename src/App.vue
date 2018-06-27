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
    hr
    h3 Bulma Docs
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks1')
      a Overview - BB 1
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks2')
      a Modifiers - BB 2
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks3')
      a Columns - BB 3
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks4')
      a Layout - BB 4
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks5')
      a Form - BB 5
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks6')
      a Elements - BB 6
    router-link(tag='li' class='sidenav' active-class='active' to='/BulmaBlocks7')
      a Components - BB 7
    
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
