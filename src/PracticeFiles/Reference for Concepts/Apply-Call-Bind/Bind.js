/*
██╗███╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗     ███████╗████████╗███████╗
██║████╗  ██║██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║     ██╔════╝╚══██╔══╝██╔════╝
██║██╔██╗ ██║██║     ██║   ██║██╔████╔██║██████╔╝██║     █████╗     ██║   █████╗
██║██║╚██╗██║██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝     ██║   ██╔══╝
██║██║ ╚████║╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ███████╗███████╗   ██║   ███████╗
╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝   ╚═╝   ╚══════╝

*/

/* http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/
*
*   Bind() allows us to easily set which specific object will be bound to this when a function or method is invoked.

*   Chain bind on the end of a normal function call to explicitly set the this value in that corresponding call 
      user.clickHandler.bind (user)  
/*

*    The bind() method can

*      Explicitly set the this value for invoking methods on objects

*      Assign methods to variable to be executed as functions.

*     Borrow and copy methods

*     Be used for currying.

          */
         

            // This data variable is a global variable
            var data = [
                {name:"Samantha", age:12},
                {name:"Alexis", age:14}
            ]

            var user = {
                // local data variable
                data    :[
                    {name:"T. Woods", age:37},
                    {name:"P. Mickelson", age:43}
                ],

                showData:function (event) {
                    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

                    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
                }

            }

            // Assign the showData method of the user object to a variable
            var showDataVar = user.showData;

            showDataVar(); // Samantha 12 (from the global data array, not from the local data array)


          /*
           <!--
  *         ██████╗ ██╗███╗   ██╗██████╗      █████╗     ███╗   ███╗███████╗████████╗██╗  ██╗ ██████╗ ██████╗     ████████╗ ██████╗     ██╗   ██╗███████╗███████╗██████╗      ██████╗ ██████╗      ██╗
  *         ██╔══██╗██║████╗  ██║██╔══██╗    ██╔══██╗    ████╗ ████║██╔════╝╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗    ╚══██╔══╝██╔═══██╗    ██║   ██║██╔════╝██╔════╝██╔══██╗    ██╔═══██╗██╔══██╗     ██║
  *         ██████╔╝██║██╔██╗ ██║██║  ██║    ███████║    ██╔████╔██║█████╗     ██║   ███████║██║   ██║██║  ██║       ██║   ██║   ██║    ██║   ██║███████╗█████╗  ██████╔╝    ██║   ██║██████╔╝     ██║
  *         ██╔══██╗██║██║╚██╗██║██║  ██║    ██╔══██║    ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██║   ██║██║  ██║       ██║   ██║   ██║    ██║   ██║╚════██║██╔══╝  ██╔══██╗    ██║   ██║██╔══██╗██   ██║
  *         ██████╔╝██║██║ ╚████║██████╔╝    ██║  ██║    ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║╚██████╔╝██████╔╝       ██║   ╚██████╔╝    ╚██████╔╝███████║███████╗██║  ██║    ╚██████╔╝██████╔╝╚█████╔╝
  *         ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═════╝     ╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝        ╚═╝    ╚═════╝      ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝     ╚═════╝ ╚═════╝  ╚════╝

           -->
          */

            var showDataVar = user.showData.bind(user);

            // Now the we get the value from the user object because the this keyword is bound to the user object
            showDataVar (); // P. Mickelson 43
    

          /*
    *           ██████╗  ██████╗ ██████╗ ██████╗  ██████╗ ██╗    ██╗    ███╗   ███╗███████╗████████╗██╗  ██╗ ██████╗ ██████╗ ███████╗
    *           ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔═══██╗██║    ██║    ████╗ ████║██╔════╝╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗██╔════╝
    *           ██████╔╝██║   ██║██████╔╝██████╔╝██║   ██║██║ █╗ ██║    ██╔████╔██║█████╗     ██║   ███████║██║   ██║██║  ██║███████╗
    *           ██╔══██╗██║   ██║██╔══██╗██╔══██╗██║   ██║██║███╗██║    ██║╚██╔╝██║██╔══╝     ██║   ██╔══██║██║   ██║██║  ██║╚════██║
    *           ██████╔╝╚██████╔╝██║  ██║██║  ██║╚██████╔╝╚███╔███╔╝    ██║ ╚═╝ ██║███████╗   ██║   ██║  ██║╚██████╔╝██████╔╝███████║
    *           ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚══╝╚══╝     ╚═╝     ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
          */
          


            // Here we have a cars object that does not have a method to print its data to the console
            var cars = {
                data:[
                    {name:"Honda Accord", age:14},
                    {name:"Tesla Model S", age:2}
                ]

            }


            // We can borrow the showData() method from the user object we defined in the last example.
            // Here we bind the user.showData method to the cars object we just created.
            cars.showData = user.showData.bind (cars);
            cars.showData (); // Honda Accord 14


            /* 
       
    *          ██████╗██╗   ██╗██████╗ ██████╗ ██╗   ██╗     █████╗     ███████╗██╗   ██╗███╗   ██╗ ██████╗████████╗██╗ ██████╗ ███╗   ██╗
    *         ██╔════╝██║   ██║██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗    ██╔════╝██║   ██║████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
    *         ██║     ██║   ██║██████╔╝██████╔╝ ╚████╔╝     ███████║    █████╗  ██║   ██║██╔██╗ ██║██║        ██║   ██║██║   ██║██╔██╗ ██║
    *         ██║     ██║   ██║██╔══██╗██╔══██╗  ╚██╔╝      ██╔══██║    ██╔══╝  ██║   ██║██║╚██╗██║██║        ██║   ██║██║   ██║██║╚██╗██║
    *         ╚██████╗╚██████╔╝██║  ██║██║  ██║   ██║       ██║  ██║    ██║     ╚██████╔╝██║ ╚████║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
    *          ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
             */

            function greet (gender, age, name) {
                // if a male, use Mr., else use Ms.
                var salutation = gender === "male" ? "Mr. " : "Ms. ";

                if (age > 25) {
                    return console.log("Hello, " + salutation + name + ".");
                }
                else {
                    return console.log("Hey, " + name + ".");
                }
            }

        // So we are passing null because we are not using the "this" keyword in our greet function.
        var greetAnAdultMale = greet.bind (null, "male", 45);

        greetAnAdultMale("John Hartlove"); // "Hello, Mr. John Hartlove."

        var greetAYoungster = greet.bind (null, "", 16);
        greetAYoungster("Alex"); // "Hey, Alex."
        greetAYoungster("Emma Waterloo"); // "Hey, Emma Waterloo."
        