import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr('string'),
  title: DS.attr('string'),
  content: DS.attr('string'),
  dateCreated: DS.attr('date'),
  reviews: DS.hasMany('review')
});
