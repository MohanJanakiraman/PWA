//initialize
document.addEventListener('click', function() {
	var elems = document.querySelectorAll('.collapsible');
	var options=[]
	var instances = M.Collapsible.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var options=[]
  var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.sidenav');
	var options=[]
	var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.timepicker');
	var options = []
	var instances = M.Timepicker.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.datepicker');
	var options = []
	var instances = M.Datepicker.init(elems, options);
});