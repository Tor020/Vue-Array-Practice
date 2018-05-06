// -- Set 1 -- 

let c = function( passedObject  ) {
  return console.dir( passedObject  )
}

let loopcheck = function( objToLoopOver  ){
    //when using for-in loops, always make use of the hasOwnProperty method to determine if the current property in iteration is really a property of the object you're checking on
  
  for ( let key in objToLoopOver  ){

    if( !key.hasOwnProperty( objToLoopOver  )  ){
  
      console.log(  key  )
  
    }
  }
}

// as an alternative to writing the loop with has own property you can use Object.keys

let loopcheckObjKeys = function(  objToLoopOver  ){
  
  console.log(  Object.keys(  objToLoopOver  )  )

}

// There are further alternatives to doing this as well with ES2016 object.entries and 2es 2016 for..of

let sf = loopcheck; //shorter writing than loopcheck

// -- End Set 1 -- 