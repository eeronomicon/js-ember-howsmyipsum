import Ember from 'ember';

export default Ember.Component.extend({
  ipsumSort: ['dateCreated:desc'],
  sortedIpsum: Ember.computed.sort('ipsums', 'ipsumSort')
});
