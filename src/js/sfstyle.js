(() => {
  d3.selectAll('.nav-button')
  .on('click',function(d,i){
      var target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
      alert(target);
      if(target){
        if(target.style('display') === 'none'){
          target.style({'display':'flex'});
        } else {
          target.style({'display':'none'});
        }
      }
   }).each(function(){
    var self = this;
    d3.select(window).on('resize',function(){
      var target = d3.select('.main-nav[data-sf-name="' + d3.select(self).attr('data-sf-target') + '"] .nav-items');
      if(target.style('flex-direction') === 'row'){
          target.style({'display':'flex'});
      }
    });
  });
})();
