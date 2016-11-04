import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash ({
      ipsum: this.store.findAll('ipsum')
    });
  },
  actions: {
    saveIpsum(params) {
      var newIpsum = this.store.createRecord('ipsum', params);
      newIpsum.save();
      this.transitionTo('index');
    }
  }
});
