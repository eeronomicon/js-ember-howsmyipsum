import Ember from 'ember';

export default Ember.Component.extend({
  displayReviewForm: false,
  actions: {
    showReviewForm() {
      this.set('displayReviewForm', true);
    },
    hideReviewForm() {
      this.set('author', '');
      this.set('rating', '');
      this.set('content', '');
      this.set('displayReviewForm', false);
    },
    saveReview() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        rating: this.get('rating') ? parseInt(this.get('rating')) : "",
        content: this.get('content') ? this.get('content') : "",
        ipsum: this.get('ipsum'),
        dateCreated: new Date()
      };
      this.sendAction('saveReview', params);
      this.send('hideReviewForm');
    }
  }
});
