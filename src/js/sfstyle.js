(() => {
  d3.selectAll('.nav-button')
  .on('click',function(d,i){
      var target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
      console.log(target);
      if(target){
        if(target.style('display') === 'none'){
          target.style({'display':'flex','flex-direction':'column'});
        } else {
          target.style({'display':'none','flex-direction':'row'});
        }
      }
  });
})();
