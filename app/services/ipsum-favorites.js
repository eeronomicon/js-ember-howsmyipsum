import Ember from 'ember';

export default Ember.Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(item) {
    item.set('favorited', true);
    this.get('items').pushObject(item);
  },

  remove(item) {
    item.set('favorited', false);
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  }
});
