import Ember from 'ember';

export function active(params/*, hash*/) {
  console.log(params[0]);
  if (params[0] === 0) {
    return "active";
  }else{
    return "";
  }
}

export default Ember.Helper.helper(active);
