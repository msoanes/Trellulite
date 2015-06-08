TrelloClone.Collections.Boards = Backbone.Collection.extend({
  url: '/api/boards',

  model: TrelloClone.Models.Board,

  getOrFetch: function (id) {
    var collection = this;
    var model = collection.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch({
      success: function () {
        collection.add(model);
      }
    });
    return model;
  }
});
