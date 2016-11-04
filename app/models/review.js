import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  rating: DS.attr('number'),
  content: DS.attr('string'),
  created: DS.attr('date'),
  ipsum: DS.belongsTo('ipsum')
});
