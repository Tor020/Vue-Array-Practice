<template lang='pug'>
div.container
  div.columns
    ul
      router-link(tag='li' active-class='active' to='/Home')
        a Home   
      router-link(tag='li' active-class='active' to='/MainArrayTests')
        a Main Array Tests
      hr
      router-link(tag='li' active-class='active' to='/Debug')
        a Debug
      hr
      h3 Bulma Docs
      router-link(tag='li' active-class='active' to='/BulmaBlocks1')
        a Overview - BulmaBlocks 1
      router-link(tag='li' active-class='active' to='/BulmaBlocks2')
        a Modifiers - BulmaBlocks 2
      router-link(tag='li' active-class='active' to='/BulmaBlocks3')
        a Columns - BulmaBlocks 3
      router-link(tag='li' active-class='active' to='/BulmaBlocks4')
        a Layout - BulmaBlocks 4
      router-link(tag='li' active-class='active' to='/BulmaBlocks5')
        a Form - BulmaBlocks 5
      router-link(tag='li' active-class='active' to='/BulmaBlocks6')
        a Elements - BulmaBlocks 6
      router-link(tag='li' active-class='active' to='/BulmaBlocks7')
        a Components - BulmaBlocks 7
      
  router-view




</template>

<style lang="scss" scoped>
li{a{text-align:center;}}

h3{
  text-align:center;
}

</style>
