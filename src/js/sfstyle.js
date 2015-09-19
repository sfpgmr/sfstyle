(() => {
  d3.selectAll('.nav-button')
  .on('click',function(d,i){
      if(!this.sf_target){
        this.sf_target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
      }
      var target = this.sf_target; 
      if(target){
        if(target.classed('nav-display-default')){
          target.classed('nav-display-default',false);
          target.classed('nav-display-toggle',true);
        } else {
          target.classed('nav-display-default',true);
          target.classed('nav-display-toggle',false);
        }
      }
   });
})();
