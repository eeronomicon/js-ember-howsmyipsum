import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeFromFavorites(ipsum) {
      if (confirm('You sure?')) {
        this.sendAction('removeFromFavorites', ipsum);
      }
    }
  }
});
