import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  dateCreated: DS.attr('date'),
  reviews: DS.hasMany('review'),
  averageRating: Ember.computed(function() {
    var returnArray = [];
    var thisModel = this;
    var returnValue = this.get('reviews').then(function(reviews) {
      reviews.forEach(function(review) {
        returnArray.push(review.get('rating'));
      });
      var average = (returnArray.length > 0 ? returnArray.reduce(function(a, b) { return a + b; }, 0) / returnArray.length : 0);
      thisModel.set('averageRating', average.toFixed(2));
    });
  })
});
