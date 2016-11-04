import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service('ipsum-favorites'),
  actions: {
    addToFavorites(ipsum) {
      this.get('favorites').add(ipsum);
    },
    removeFromFavorites(ipsum) {
      this.get('favorites').remove(ipsum);
    },
    clearFavorites(){
      if (confirm('You sure?')) {
        this.get('favorites').empty();
      }
    }
  }
});
