<template lang="pug">
div.main
  hr

  ul
    li
      a(href='https://bulma.io/documentation/columns/basics') Basics
    li
      a(href='https://bulma.io/documentation/columns/sizes') Sizes
    li
      a(href='https://bulma.io/documentation/columns/responsiveness') Responsiveness
    li
      a(href='https://bulma.io/documentation/columns/nesting') Nesting
    li
      a(href='https://bulma.io/documentation/columns/gap') Gap
    li
      a(href='https://bulma.io/documentation/columns/options') Options

      
  hr
  li 
    a(href='https://bulma.io/documentation/columns/options/#centering-columns') centering cols docs
  li 
    a(href='https://bulma.io/documentation/columns/sizes/#12-columns-system') 12 ColDocs
  li
    a(href='https://bulma.io/documentation/columns/gap/') Gap Between Columns Docs
  .columns
    .column  
      | Building a columns layout with Bulma is very simple:
    .column
      | Add a columns container
    .column
      | Add as many column elements as you want
    .column
      | Each column will have an equal width, no matter the number of columns.
  .columns
    .column.is-four-fifths is-four-fifths
    .column Auto
    .column Auto
  .columns
    .column.is-three-quarters is-three-quarters
    .column Auto
    .column Auto
  .columns
    .column.is-two-thirds is-two-thirds
    .column Auto
    .column Auto
  .columns
    .column.is-three-fifths is-three-fifths
    .column Auto
    .column Auto
  .columns
    .column.is-half is-half
    .column Auto
    .column Auto
  .columns
    .column.is-two-fifths is-two-fifths
    .column Auto
    .column Auto
  .columns
    .column.is-one-third is-one-third
    .column Auto
    .column Auto
  .columns
    .column.is-one-quarter is-one-quarter
    .column Auto
  .columns
    .column.is-one-fifth is-one-fifth
    .column Auto
    .column Auto
  .message.is-info
    p.message-header Naming convention
    p.message-body
      | Each modifier class is named after 
      strong how many columns you want out of 12
      | . So if you want 7 columns out of 12, use 
      code is-7
      | .
  .columns
    .column.is-2
      p.bd-notification.is-primary
        code is-2
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
  .columns
    .column.is-3
      p.bd-notification.is-primary
        code is-3
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
  .columns
    .column.is-4
      p.bd-notification.is-primary
        code is-4
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
  .columns
    .column.is-5
      p.bd-notification.is-primary
        code is-5
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
  .columns
    .column.is-6
      p.bd-notification.is-primary
        code is-6
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
  .columns
    .column.is-7
      p.bd-notification.is-primary
        code is-7
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
  .columns
    .column.is-8
      p.bd-notification.is-primary
        code is-8
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
  .columns
    .column.is-9
      p.bd-notification.is-primary
        code is-9
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
  .columns
    .column.is-10
      p.bd-notification.is-primary
        code is-10
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
    .column
      p.bd-notification.is-wajofij.has-text-centered 1
  .columns
    .column.is-11
      p.bd-notification.is-primary
        code is-11
    .column
      p.bd-notification.is-fojeisj.has-text-centered 1
  .columns
    .column.is-narrow
      .box(style='width: 200px;')
        p.title.is-5 Narrow column
        p.subtitle This column is only 200px wide.
    .column
      .box
        p.title.is-5 Flexible column
        p.subtitle This column will take up the remaining space available.

  // is offset modifiers or empty columns to create a gap 
  // By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile. 
  // If you want columns to work on mobile too, just add the is-mobile modifier on the columns container:
  .columns.is-mobile
    .column.is-half.is-offset-one-quarter
  .columns.is-mobile
    .column.is-three-fifths.is-offset-one-fifth
  .columns.is-mobile
    .column.is-4.is-offset-8
  .columns.is-mobile
    .column.is-11.is-offset-1

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
      console.log(this.runMethod(),  "This is BB 2");

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



