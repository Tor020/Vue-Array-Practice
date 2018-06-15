<template lang='pug'>
.col-sm-9.col-sm-offset-3.col-md-8.col-md-offset-2.col-lg-6.col-lg-offset-2.main
  div

    h3 How is weapon damage calculated?
    p.well.center-block
      | Damage is calculated using the formula and examples provided on the kf2 stats 
      a(href='https://docs.google.com/spreadsheets/d/1GDpg2mN1l_86U_RaDug0glFx8cZCuErwxZLiBKl9SyY/edit#gid=2068776317&range=A155:B155') spreadsheet
      | .
  div(class='missing' id='' @click='')
    h3 Core Functionality Still missing
    ul

      li <strong>Survivalist</strong> <br>  
      span(class='Reason' id='' @click='') Trying to figure out the best way to display the data
  div(class='missing' id='' @click='')
   h3 Other/New Features planned
   ul
     li 🌑 Choice between Dark Theme and Light theme 
     li Medic Hemo Dot damage
     li Affected by Medic perk Damage boost
     li Perk Level validation for all classes
     li More Zed Stats displayed, like armor on Edar
     li Way to view specific Zed weaknesses compare to weapon values
     li Demolitionist impact damage checkbox

  div(class='missing' id='' @click='')
    h3 General New Website Features
    ul
      li  <strong>Single Page Application</strong> <br>
        span(class='Reason' id='' @click='') This means it should work completely offline and there are no pageloads when switching between classes.
  <hr> </hr>
  
    h4 Bugs / Suggestions / Update Requests
    p
      | Send me a message on 
      i.fa.fa-reddit-alien(aria-hidden='true')
      a(href='https://www.reddit.com/user/SponsoredByMLGMtnDew/') reddit
      |  leave a comment on 
      i.fa.fa-steam(aria-hidden='true')
      a(href='https://steamcommunity.com/sharedfiles/filedetails/?id=920604286')  steam 
      |  or
      iframe#twitter-widget-0.twitter-mention-button.twitter-mention-button-rendered.twitter-tweet-button(scrolling='no' frameborder='0' allowtransparency='true' title='Twitter Tweet Button' src='https://platform.twitter.com/widgets/tweet_button.1966f64be47cf16b7a48642c76cc6202.en.html#dnt=true&id=twitter-widget-0&lang=en&original_referer=https%3A%2F%2Ftor020.github.io%2FKilling-Floor-2-Calculator%2F&related=%40Tor_kcWebDev&screen_name=Tor_kcWebDev&size=l&text=This%20websites%20gr8%20but%20pls%20add%20this%20%0D%23feedback%20%23kf2calc&time=1524612935718&type=mention' style='position: static; visibility: visible; width: 195px; height: 28px;' data-screen-name='Tor_kcWebDev')
  <hr> </hr>
  h3 P.S. I'd rly like it if you follow me on twitter  
    <a class="twitter-follow-button" href="https://twitter.com/Tor_kcWebDev">@Tor_kcWebDev</a>

</template>
<script>
export default {
  
}
</script>



<style lang="scss" scoped>
 .Reason{
   
   margin-left:2rem;
  //  padding:2rem;
 }
 .missing{
   margin-top:5rem;
   margin-bottom:5rem;
 }

</style>

