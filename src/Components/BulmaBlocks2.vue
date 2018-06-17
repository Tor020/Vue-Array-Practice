<template lang="pug">
div.container
  hr
  li
    a(href='https://bulma.io/documentation/modifiers/') Modifiers
  ul
    li
      a(href='https://bulma.io/documentation/modifiers/syntax') Syntax
    li
      a(href='https://bulma.io/documentation/modifiers/helpers') Helpers
    li
      a(href='https://bulma.io/documentation/modifiers/responsive-helpers') Responsive helpers
    li
      a(href='https://bulma.io/documentation/modifiers/color-helpers') Color helpers
    li
      a(href='https://bulma.io/documentation/modifiers/typography-helpers') Typography helpers

      header.bd-header
        .bd-header-titles
          h1.title
            | Helpers
          p.subtitle.is-4
            | Apply 
            strong helper classes
            |  to almost any element, in order to alter its style
      .bd-content
        table.table.is-bordered
          tbody
            tr
              th(rowspan='3') Float
              td
                code is-clearfix
              td Fixes an element's floating children
            tr
              td
                code is-pulled-left
              td Moves an element to the left
            tr
              td
                code is-pulled-right
              td Moves an element to the right
            tr
              th(rowspan='2') Spacing
              td
                code is-marginless
              td
                | Removes any 
                strong margin
            tr
              td
                code is-paddingless
              td
                | Removes any 
                strong padding
            tr
              th(rowspan='6') Other
              td
                code is-overlay
              td Completely covers the first positioned parent
            tr
              td
                code is-clipped
              td
                | Adds overflow 
                strong hidden
            tr
              td
                code is-radiusless
              td
                | Removes any 
                strong radius
            tr
              td
                code is-shadowless
              td
                | Removes any 
                strong shadow
            tr
              td
                code is-unselectable
              td
                | Prevents the text from being 
                strong selectable
            tr
              td
                code is-invisible
              td
                | Adds visibility 
                strong hidden
  .bd-content
  .content
    p
      | You can use the same logic for each of the 
      strong 7 sizes
      | .
  hr.hr(style='margin-bottom: 0;')
  h3#colors.title.is-4.is-spaced.bd-anchor-title
    span.bd-anchor-name
      | Colors
    a.bd-anchor-link(href='#colors')
      | #
  .content
    p
      | You can set any element to one of the 
      strong 9 colors
      |  or 
      strong 9 shades of grey
      | :
  table.table.is-bordered
    thead
      tr
        th
          | Class
        th
          | Color
    tbody
      tr
        td
          code has-text-white
        td
          span.bd-color(style='background: hsl(0, 0%, 100%);')
          code hsl(0, 0%, 100%)
      tr
        td
          code has-text-black
        td
          span.bd-color(style='background: hsl(0, 0%, 4%);')
          code hsl(0, 0%, 4%)
      tr
        td
          code has-text-light
        td
          span.bd-color(style='background: hsl(0, 0%, 96%);')
          code hsl(0, 0%, 96%)
      tr
        td
          code has-text-dark
        td
          span.bd-color(style='background:  hsl(0, 0%, 21%);')
          code hsl(0, 0%, 21%)
      tr
        td
          code has-text-primary
        td
          span.bd-color(style='background: hsl(171, 100%, 41%);')
          code hsl(171, 100%, 41%)
      tr
        td
          code has-text-info
        td
          span.bd-color(style='background: hsl(204, 86%, 53%);')
          code hsl(204, 86%, 53%)
      tr
        td
          code has-text-link
        td
          span.bd-color(style='background: hsl(217, 71%,  53%);')
          code hsl(217, 71%,  53%)
      tr
        td
          code has-text-success
        td
          span.bd-color(style='background: hsl(141, 71%,  48%);')
          code hsl(141, 71%,  48%)
      tr
        td
          code has-text-warning
        td
          span.bd-color(style='background: hsl(48,  100%, 67%);')
          code hsl(48,  100%, 67%)
      tr
        td
          code has-text-danger
        td
          span.bd-color(style='background: hsl(348, 100%, 61%);')
          code hsl(348, 100%, 61%)
      tr
        td
          code has-text-black-bis
        td
          span.bd-color(style='background: hsl(0, 0%, 7%);')
          code hsl(0, 0%, 7%)
      tr
        td
          code has-text-black-ter
        td
          span.bd-color(style='background: hsl(0, 0%, 14%);')
          code hsl(0, 0%, 14%)
      tr
        td
          code has-text-grey-darker
        td
          span.bd-color(style='background:  hsl(0, 0%, 21%);')
          code hsl(0, 0%, 21%)
      tr
        td
          code has-text-grey-dark
        td
          span.bd-color(style='background: hsl(0, 0%, 29%);')
          code hsl(0, 0%, 29%)
      tr
        td
          code has-text-grey
        td
          span.bd-color(style='background: hsl(0, 0%, 48%);')
          code hsl(0, 0%, 48%)
      tr
        td
          code has-text-grey-light
        td
          span.bd-color(style='background: hsl(0, 0%, 71%);')
          code hsl(0, 0%, 71%)
      tr
        td
          code has-text-grey-lighter
        td
          span.bd-color(style='background: hsl(0, 0%, 86%);')
          code hsl(0, 0%, 86%)
      tr
        td
          code has-text-white-ter
        td
          span.bd-color(style='background: hsl(0, 0%, 96%);')
          code hsl(0, 0%, 96%)
      tr
        td
          code has-text-white-bis
        td
          span.bd-color(style='background: hsl(0, 0%, 98%);')
          code hsl(0, 0%, 98%)
  hr.hr(style='margin-bottom: 0;')
  h3#alignment.title.is-4.is-spaced.bd-anchor-title
    span.bd-anchor-name
      | Alignment
    a.bd-anchor-link(href='#alignment')
      | #
  .content
    p
      | You can align the text with the use of one of 
      strong 4 alignment helpers
      | :
  table.table.is-bordered
    thead
      tr
        th
          | Class
        th
          | Alignment
    tbody
      tr
        td
          code has-text-centered
        td
          | Makes the text 
          strong centered
      tr
        td
          code has-text-justified
        td
          | Makes the text 
          strong justified
      tr
        td
          code has-text-left
        td
          | Makes the text aligned to the 
          strong left
      tr
        td
          code has-text-right
        td
          | Makes the text aligned to the 
          strong right
  hr.hr(style='margin-bottom: 0;')


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




