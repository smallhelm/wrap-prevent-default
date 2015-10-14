var test = require("tape");
var wrapPreventDefault = require("./");

test("call preventDefault first", function(t){
  t.plan(2);
  var call_n = 0;

  var e = {
    preventDefault: function(){
      call_n += 1;
      t.equal(call_n, 1);
    }
  };

  var fn = wrapPreventDefault(function(e){
    call_n += 1;
    t.equal(call_n, 2);
  });

  fn(e);
});

test("pass all arguments on to the fn", function(t){
  t.plan(3);

  var fn = wrapPreventDefault(function(a, b, c){
    t.equal(a, 1);
    t.equal(b, 2);
    t.equal(c, 3);
  });

  fn(1, 2, 3);
});
