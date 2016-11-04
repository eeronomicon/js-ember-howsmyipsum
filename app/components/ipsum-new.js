import Ember from 'ember';

export default Ember.Component.extend({
  displayIpsumForm: false,
  actions: {
    showIpsumForm() {
      this.set('displayIpsumForm', true);
    },
    hideIpsumForm() {
      this.set('author', '');
      this.set('title', '');
      this.set('content', '');
      this.set('displayIpsumForm', false);
    },
    saveIpsum() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        title: this.get('title') ? this.get('title') : "",
        content: this.get('content') ? this.get('content') : "",
        dateCreated: new Date()
      };
      this.sendAction('saveIpsum', params);
      this.send('hideIpsumForm');
    }
  }
});
