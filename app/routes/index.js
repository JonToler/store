import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      products: this.store.findAll('product'),
      games: this.store.query('product', {
        orderBy: 'category',
        equalTo: '0'
      }),
      movies: this.store.query('product', {
        orderBy: 'category',
        equalTo: '1'
      })
    });
  },
});
