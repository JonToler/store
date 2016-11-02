import DS from 'ember-data';

export default DS.Model.extend({
  publisher: DS.attr(),
  notes: DS.attr(),
  content: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});
