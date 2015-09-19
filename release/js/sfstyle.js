(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  d3.selectAll('.nav-button').on('click', function (d, i) {
    if (!this.sf_target) {
      this.sf_target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
    }
    var target = this.sf_target;
    if (target) {
      if (target.classed('nav-display-default')) {
        target.classed('nav-display-default', false);
        target.classed('nav-display-toggle', true);
      } else {
        target.classed('nav-display-default', true);
        target.classed('nav-display-toggle', false);
      }
    }
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9wai91aS9zZnN0eWxlL3NyYy9qcy9zZnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQU07QUFDTCxJQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUMxQixFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUNyQixRQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztBQUNqQixVQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztLQUNuSDtBQUNELFFBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDNUIsUUFBRyxNQUFNLEVBQUM7QUFDUixVQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBQztBQUN2QyxjQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLGNBQU0sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUM7T0FDM0MsTUFBTTtBQUNMLGNBQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsY0FBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBQyxLQUFLLENBQUMsQ0FBQztPQUM1QztLQUNGO0dBQ0gsQ0FBQyxDQUFDO0NBQ0wsQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCgpID0+IHtcclxuICBkMy5zZWxlY3RBbGwoJy5uYXYtYnV0dG9uJylcclxuICAub24oJ2NsaWNrJyxmdW5jdGlvbihkLGkpe1xyXG4gICAgICBpZighdGhpcy5zZl90YXJnZXQpe1xyXG4gICAgICAgIHRoaXMuc2ZfdGFyZ2V0ID0gZDMuc2VsZWN0KCcubWFpbi1uYXZbZGF0YS1zZi1uYW1lPVwiJyArIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkYXRhLXNmLXRhcmdldCcpICsgJ1wiXSAubmF2LWl0ZW1zJyk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIHRhcmdldCA9IHRoaXMuc2ZfdGFyZ2V0OyBcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBpZih0YXJnZXQuY2xhc3NlZCgnbmF2LWRpc3BsYXktZGVmYXVsdCcpKXtcclxuICAgICAgICAgIHRhcmdldC5jbGFzc2VkKCduYXYtZGlzcGxheS1kZWZhdWx0JyxmYWxzZSk7XHJcbiAgICAgICAgICB0YXJnZXQuY2xhc3NlZCgnbmF2LWRpc3BsYXktdG9nZ2xlJyx0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzZWQoJ25hdi1kaXNwbGF5LWRlZmF1bHQnLHRydWUpO1xyXG4gICAgICAgICAgdGFyZ2V0LmNsYXNzZWQoJ25hdi1kaXNwbGF5LXRvZ2dsZScsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9KTtcclxufSkoKTtcclxuIl19
