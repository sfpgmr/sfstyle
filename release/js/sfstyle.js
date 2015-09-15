(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  d3.selectAll('.nav-button').on('click', function (d, i) {
    var target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
    console.log(target);
    if (target) {
      if (target.style('display') === 'none') {
        target.style({ 'display': 'flex', 'flex-direction': 'column' });
      } else {
        target.style({ 'display': 'none', 'flex-direction': 'row' });
      }
    }
  });
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9wai91aS9zZnN0eWxlL3NyYy9qcy9zZnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQU07QUFDTCxJQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUMxQixFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUNyQixRQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFDOUcsV0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwQixRQUFHLE1BQU0sRUFBQztBQUNSLFVBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLEVBQUM7QUFDcEMsY0FBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztPQUM1RCxNQUFNO0FBQ0wsY0FBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsZ0JBQWdCLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztPQUN6RDtLQUNGO0dBQ0osQ0FBQyxDQUFDO0NBQ0osQ0FBQSxFQUFHLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKCgpID0+IHtcclxuICBkMy5zZWxlY3RBbGwoJy5uYXYtYnV0dG9uJylcclxuICAub24oJ2NsaWNrJyxmdW5jdGlvbihkLGkpe1xyXG4gICAgICB2YXIgdGFyZ2V0ID0gZDMuc2VsZWN0KCcubWFpbi1uYXZbZGF0YS1zZi1uYW1lPVwiJyArIGQzLnNlbGVjdCh0aGlzKS5hdHRyKCdkYXRhLXNmLXRhcmdldCcpICsgJ1wiXSAubmF2LWl0ZW1zJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgIGlmKHRhcmdldCl7XHJcbiAgICAgICAgaWYodGFyZ2V0LnN0eWxlKCdkaXNwbGF5JykgPT09ICdub25lJyl7XHJcbiAgICAgICAgICB0YXJnZXQuc3R5bGUoeydkaXNwbGF5JzonZmxleCcsJ2ZsZXgtZGlyZWN0aW9uJzonY29sdW1uJ30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0YXJnZXQuc3R5bGUoeydkaXNwbGF5Jzonbm9uZScsJ2ZsZXgtZGlyZWN0aW9uJzoncm93J30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0pO1xyXG59KSgpO1xyXG4iXX0=
