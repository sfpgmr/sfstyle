(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  d3.selectAll('.nav-button').on('click', function (d, i) {
    alert("click");
    var target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
    if (target) {
      if (target.style('display') === 'none') {
        target.style({ 'display': 'flex' });
      } else {
        target.style({ 'display': 'none' });
      }
    }
  }).each(function () {
    var self = this;
    d3.select(window).on('resize', function () {
      var target = d3.select('.main-nav[data-sf-name="' + d3.select(self).attr('data-sf-target') + '"] .nav-items');
      if (target.style('flex-direction') === 'row') {
        target.style({ 'display': 'flex' });
      }
    });
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9wai91aS9zZnN0eWxlL3NyYy9qcy9zZnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQU07QUFDTCxJQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUMxQixFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUN2QixTQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDYixRQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFDOUcsUUFBRyxNQUFNLEVBQUM7QUFDUixVQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTSxFQUFDO0FBQ3BDLGNBQU0sQ0FBQyxLQUFLLENBQUMsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztPQUNsQyxNQUFNO0FBQ0wsY0FBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO09BQ2xDO0tBQ0Y7R0FDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVU7QUFDakIsUUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLE1BQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQyxZQUFVO0FBQ3RDLFVBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztBQUM5RyxVQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxLQUFLLEVBQUM7QUFDeEMsY0FBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO09BQ3BDO0tBQ0YsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCgpID0+IHtcclxuICBkMy5zZWxlY3RBbGwoJy5uYXYtYnV0dG9uJylcclxuICAub24oJ2NsaWNrJyxmdW5jdGlvbihkLGkpe1xyXG4gICAgYWxlcnQoXCJjbGlja1wiKTtcclxuICAgICAgdmFyIHRhcmdldCA9IGQzLnNlbGVjdCgnLm1haW4tbmF2W2RhdGEtc2YtbmFtZT1cIicgKyBkMy5zZWxlY3QodGhpcykuYXR0cignZGF0YS1zZi10YXJnZXQnKSArICdcIl0gLm5hdi1pdGVtcycpO1xyXG4gICAgICBpZih0YXJnZXQpe1xyXG4gICAgICAgIGlmKHRhcmdldC5zdHlsZSgnZGlzcGxheScpID09PSAnbm9uZScpe1xyXG4gICAgICAgICAgdGFyZ2V0LnN0eWxlKHsnZGlzcGxheSc6J2ZsZXgnfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRhcmdldC5zdHlsZSh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9KS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBkMy5zZWxlY3Qod2luZG93KS5vbigncmVzaXplJyxmdW5jdGlvbigpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZDMuc2VsZWN0KCcubWFpbi1uYXZbZGF0YS1zZi1uYW1lPVwiJyArIGQzLnNlbGVjdChzZWxmKS5hdHRyKCdkYXRhLXNmLXRhcmdldCcpICsgJ1wiXSAubmF2LWl0ZW1zJyk7XHJcbiAgICAgIGlmKHRhcmdldC5zdHlsZSgnZmxleC1kaXJlY3Rpb24nKSA9PT0gJ3Jvdycpe1xyXG4gICAgICAgICAgdGFyZ2V0LnN0eWxlKHsnZGlzcGxheSc6J2ZsZXgnfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59KSgpO1xyXG4iXX0=
