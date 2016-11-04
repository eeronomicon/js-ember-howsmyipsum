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
    }
  }
});
