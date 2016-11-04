import Ember from 'ember';

export default Ember.Component.extend({
  average: Ember.computed(function() {
    var returnArray = [];
    var thisModel = this;
    var returnValue = this.get('reviews').then(function(reviews) {
      reviews.forEach(function(review) {
        returnArray.push(review.get('rating'));
      });
      var average = (returnArray.length > 0 ? returnArray.reduce(function(a, b) { return a + b; }, 0) / returnArray.length : 0);
      thisModel.set('average', average.toFixed(2));
    });
  })
});
