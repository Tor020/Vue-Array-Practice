/*
██╗███╗   ██╗ ██████╗ ██████╗ ███╗   ███╗██████╗ ██╗     ███████╗████████╗███████╗
██║████╗  ██║██╔════╝██╔═══██╗████╗ ████║██╔══██╗██║     ██╔════╝╚══██╔══╝██╔════╝
██║██╔██╗ ██║██║     ██║   ██║██╔████╔██║██████╔╝██║     █████╗     ██║   █████╗
██║██║╚██╗██║██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║     ██╔══╝     ██║   ██╔══╝
██║██║ ╚████║╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ███████╗███████╗   ██║   ███████╗
╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚══════╝╚══════╝   ╚═╝   ╚══════╝

*/
https://www.bennadel.com/blog/2265-changing-the-execution-context-of-javascript-functions-using-call-and-apply.htm


//  That is, within the function body, the "this" keyword is a reference to the parent object. As such, in the following code:


sarah.sayHello();


//... the "this" keyword within the sayHello() method is a reference to the sarah object.


getScreenResolution();


//... the "this" keyword within the getScreenResolution() function is a reference to the window object (since unbound functions are implicitly bound to the global scope).

