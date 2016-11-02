import DS from 'ember-data';

export default DS.Model.extend({
  publisher: DS.attr(),
  notes: DS.attr(),
  content: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
