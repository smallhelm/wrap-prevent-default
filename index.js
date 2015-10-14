var preventDefault = function(e){
  if(e && e.preventDefault){
    e.preventDefault();
  }
};

module.exports = function(fn){
  return function(e){
    preventDefault(e);
    fn.apply(this, arguments);
  };
};
