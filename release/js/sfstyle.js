(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

(function () {
  d3.selectAll('.nav-button').on('click', function (d, i) {
    var target = d3.select('.main-nav[data-sf-name="' + d3.select(this).attr('data-sf-target') + '"] .nav-items');
    if (target) {
      alert(target.style('display'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJFOi9wai91aS9zZnN0eWxlL3NyYy9qcy9zZnN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQU07QUFDTCxJQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUMxQixFQUFFLENBQUMsT0FBTyxFQUFDLFVBQVMsQ0FBQyxFQUFDLENBQUMsRUFBQztBQUNyQixRQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLDBCQUEwQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7QUFDOUcsUUFBRyxNQUFNLEVBQUM7QUFDUixXQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQy9CLFVBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxNQUFNLEVBQUM7QUFDcEMsY0FBTSxDQUFDLEtBQUssQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO09BQ2xDLE1BQU07QUFDTCxjQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7T0FDbEM7S0FDRjtHQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBVTtBQUNqQixRQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsTUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDLFlBQVU7QUFDdEMsVUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0FBQzlHLFVBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEtBQUssRUFBQztBQUN4QyxjQUFNLENBQUMsS0FBSyxDQUFDLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7T0FDcEM7S0FDRixDQUFDLENBQUM7R0FDSixDQUFDLENBQUM7Q0FDSixDQUFBLEVBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoKCkgPT4ge1xyXG4gIGQzLnNlbGVjdEFsbCgnLm5hdi1idXR0b24nKVxyXG4gIC5vbignY2xpY2snLGZ1bmN0aW9uKGQsaSl7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBkMy5zZWxlY3QoJy5tYWluLW5hdltkYXRhLXNmLW5hbWU9XCInICsgZDMuc2VsZWN0KHRoaXMpLmF0dHIoJ2RhdGEtc2YtdGFyZ2V0JykgKyAnXCJdIC5uYXYtaXRlbXMnKTtcclxuICAgICAgaWYodGFyZ2V0KXtcclxuICAgICAgICBhbGVydCh0YXJnZXQuc3R5bGUoJ2Rpc3BsYXknKSk7XHJcbiAgICAgICAgaWYodGFyZ2V0LnN0eWxlKCdkaXNwbGF5JykgPT09ICdub25lJyl7XHJcbiAgICAgICAgICB0YXJnZXQuc3R5bGUoeydkaXNwbGF5JzonZmxleCd9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGFyZ2V0LnN0eWxlKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH0pLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGQzLnNlbGVjdCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uKCl7XHJcbiAgICAgIHZhciB0YXJnZXQgPSBkMy5zZWxlY3QoJy5tYWluLW5hdltkYXRhLXNmLW5hbWU9XCInICsgZDMuc2VsZWN0KHNlbGYpLmF0dHIoJ2RhdGEtc2YtdGFyZ2V0JykgKyAnXCJdIC5uYXYtaXRlbXMnKTtcclxuICAgICAgaWYodGFyZ2V0LnN0eWxlKCdmbGV4LWRpcmVjdGlvbicpID09PSAncm93Jyl7XHJcbiAgICAgICAgICB0YXJnZXQuc3R5bGUoeydkaXNwbGF5JzonZmxleCd9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdfQ==
