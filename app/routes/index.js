import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveIpsum(params) {
      var newIpsum = this.store.createRecord('ipsum', params);
      newIpsum.save();
      this.transitionTo('index');
    }
  }
});
