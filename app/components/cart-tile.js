import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions:
  {
    removeHandler(){
      this.get("shoppingCart").remove(this.get("item"));
    }
  }
});
