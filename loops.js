/**
 *
 *
 *
 *
 *
 *
 */

const myPromise = new Promise(function (resolve, reject) {
  let sampleData = [2, 4, 6, 8];
  let randomNumber = Math.ceil(Math.random() * 5);
  if (sampleData[randomNumber]) {
    resolve(sampleData[randomNumber]);
  } else {
    reject('An error occured!');
  }
});

myPromise
  .then(function (e) {
    console.log(e);
    console.log('then')
  })
  .catch(function (error) {
    throw new Error(error);
    console.log('catch')
  })
  .finally(function () {
    console.log('Promise completed');
  });
