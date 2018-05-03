<template lang = "pug">

div(class="about")
  h1 This is the About Page aka a page with nothing About anything

  h2 Laracasts Source Links
   
  ul
    li
      a(href="https://gist.github.com/JeffreyWay/f844ca4dd1887d566759849665068162") Episode 11 Tabs
    li 
      a(href="https://gist.github.com/laracasts/882183c239cc746dbd344ab0406858de") Episode 14 Named Slots in a Nutshell
    li 
      a(href="https://github.com/laracasts/Vue-Forms/blob/master/public/js/app.js") Episode 20 Object-Oriented Forms: Part 2  
    li 
      a(href="https://github.com/laracasts/Vue-Forms/blob/master/public/js/app.js") Episode 21 Object-Oriented Forms: Part 3  
    li 
      a(href="https://gist.github.com/laracasts/53248fc965e8c250843dc5fcfec3230e") Episode 22 Webpack Config 
    li 
      a(href="https://gist.github.com/laracasts/37117786ec23bfacf391d81c2cefa35b") Episode 25 Custom Components      
    li 
      a(href="https://github.com/laracasts/Vue-SPA-Essentials-Routing/tree/master/resources/assets/js") Episode 26 Vue Routing      
    li 
      a(href="https://github.com/laracasts/Testing-Vue") Episode 30 Testing      
    li 
      a(href="") Empty Link       
</template>

<style lang="scss" scoped>
ul {
  li{
     display:block;
      padding:1rem;
    a{
      color:blue;
      &:visited{color:black;}
    }
  }
}

</style>

