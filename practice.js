function success1(done) {
  setTimeout(function() {
    done(1);
  }, 100);
}

function success2(done) {
  setTimeout(function() {
    done(2);
  }, 100);
}

function failure3(done) {
  setTimeout(function() {
    done.fail(3);
  }, 100);
}

function output(msg) {
  console.log(msg)
}

ASQ().race(
  failure3,
  success1
)
.or(output);

ASQ().any(
  success1,
  failure3,
  success2
)
.val(function() {
  var args = [].slice.call(arguments);
  console.log(
    args
  );
});

ASQ().first(
  failure3,
  success1,
  success2
)
.val(output);

ASQ().last(
  failure3,
  success1,
  success2
)
.val(output);

ASQ().none(
  failure3
)
.val(output)
.none(
  failure3,
  success1
)
.or(output);