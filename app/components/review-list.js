import Ember from 'ember';

export default Ember.Component.extend({
  reviewSort: ['dateCreated:desc'],
  sortedReviews: Ember.computed.sort('ipsum.reviews', 'reviewSort')
});
