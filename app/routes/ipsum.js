import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      ipsum: this.store.findRecord('ipsum', params.ipsum_id)
    });
  },
  actions: {
    updateIpsum(ipsum, params) {
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          ipsum.set(key,params[key]);
        }
      });
      ipsum.save();
      this.transitionTo('ipsum', ipsum.id);
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var ipsum = params.ipsum;
      ipsum.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return ipsum.save();
      });
      this.transitionTo('index');
    },
    deleteIpsum(ipsum) {
      var review_deletions = ipsum.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return ipsum.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
