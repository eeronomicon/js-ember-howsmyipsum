import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      ipsum: this.store.findRecord('ipsum', params.ipsum_id)
    });
  },
});
