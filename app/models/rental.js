import Model from 'ember-data/model';

export default Model.extend({
  title: attr(),
  owner: attr(),
  city: attr(),
  type: attr(),
  bedrooms: attr(),
  image: attr()
});
