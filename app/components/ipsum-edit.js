import Ember from 'ember';

export default Ember.Component.extend({
  showIpsumForm: false,
  actions: {
    showIpsumForm() {
      this.set('displayIpsumForm', true);
    },
    hideIpsumForm() {
      this.set('displayIpsumForm', false);
    },
    updateIpsum(ipsum) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content')
      };
      this.set('displayIpsumForm', false);
      this.sendAction('updateIpsum', ipsum, params);
    }
  }
});
