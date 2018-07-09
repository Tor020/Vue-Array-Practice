// - [Get all user defined window properties - Copy and paste this into the console, or after the scripts are run on the page](https://stackoverflow.com/questions/17246309/get-all-user-defined-window-properties/17246535#17246535)

/*Only logging obj names*/



// make sure it doesn't count my own properties
(function () {
    var results, currentWindow,
    // create an iframe and append to body to load a clean window object
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    // get the current list of properties on window
    currentWindow = Object.getOwnPropertyNames(window);
    // filter the list against the properties that exist in the clean window
    results = currentWindow.filter(function(prop) {
        return !iframe.contentWindow.hasOwnProperty(prop);
    });
    // log an array of properties that are different

    console.log('User Made Additions to Window Object -->',results);

    document.body.removeChild(iframe);
}());

/*
Logging obj names and internals
*/

// make sure it doesn't count my own properties
(function () {
    var results, currentWindow,
    // create an iframe and append to body to load a clean window object
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    // get the current list of properties on window
    currentWindow = Object.getOwnPropertyNames(window);
    // filter the list against the properties that exist in the clean window
    results = currentWindow.filter(function(prop) {
        return !iframe.contentWindow.hasOwnProperty(prop);
    });
    // log an array of properties that are different

    console.log('User Made Additions to Window Object -->',results);

    for(let i =0; i <results.length; i++ ){
      console.log(`Object ${i} -->`,window[results[i]])
    }

    document.body.removeChild(iframe);
}());