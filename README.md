# wrap-prevent-default
Wrap an event handler so that it will e.preventDefault() for you when available. (i.e. also works if you call it directly)

```js
var prevDflt = require("wrap-prevent-default");

var handler = prevDflt(function(event){
  console.log("I've been clicked!");
});

//attach it to the onclick handler somehow... (library and framework agnostic)
//  i.e. <a onclick="handler" ...>...
//when it's clicked it will preventDefault()

//you can also call it directly and it'll still work
handler();
```
 * `this` works as you would expect.
 * All arguments are passed on to your handler as you would expect.

## License
MIT
