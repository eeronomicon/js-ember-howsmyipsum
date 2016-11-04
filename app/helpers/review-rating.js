import Ember from 'ember';

export function reviewRating(params) {
  var rating = params[0];
  var returnHearts = "";
  for (var i = 1; i <= rating; i++) {
    returnHearts += '<i class="heart icon"></i>';
  }

  return Ember.String.htmlSafe(returnHearts);
}

export default Ember.Helper.helper(reviewRating);
