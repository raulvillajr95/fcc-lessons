/**
 *
 * callback: a function that's passed as an argument in another function
 *
 * promise: a future value that will be used at a later time. while waiting,
 *    you can do other stuff. It's either fulfilled or rejected.
 *
 * when, promises over callbacks?: when you're waiting on a value, like an
 *    image to load and you want to continue with your code while it's
 *    waiting on that image. also, if you want some sort of flow control.
 *    also, when your callbacks are getting to deep, promises are much
 *    cleaner.
 *
 * .then(): what you want to do with the value when you do receive it from
 *    the Promise
 *
 */

const bound = frames[0].postMessage.bind(frames[0], "some data", "*");

Promise.resolve(undefined).then(bound);
