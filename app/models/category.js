import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  notes: DS.attr(),
  publisher: DS.attr(),
  categories: DS.hasMany('category', { async: true })
});
