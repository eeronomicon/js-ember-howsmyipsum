import Ember from 'ember';

// Note: installing ember-moment caused the entire project to crash on server start, ergo this helper with the old-school format-tweaking

export function dateFormatter(params) {
  var inputDate = params[0];
  var mo = inputDate.getMonth() + 1;
  var dd = inputDate.getDate();
  var yyyy = inputDate.getFullYear();
  var hh = inputDate.getHours();
  var mm = inputDate.getMinutes();
  mm = mm < 10 ? "0" + mm : mm;
  var ampm = hh < 12 ? "AM" : "PM";
  return mo + '/' + dd + '/' + yyyy + ' ' + hh + ':' + mm + ampm;
}

export default Ember.Helper.helper(dateFormatter);
