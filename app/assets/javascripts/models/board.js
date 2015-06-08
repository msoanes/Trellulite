TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: '/api/boards',

  parse: function (payload) {
    var board = this;
    if (payload.lists) {
      _.each(payload.lists, function (listData) {
        var list = new TrelloClone.Models.List(listData, { parse: true });
        board.lists().add(list);
      });
      delete payload.lists;
    }
    return payload;
  },

  lists: function () {
    if (!this._lists) {
      this._lists = new TrelloClone.Collections.Lists();
    }
    return this._lists;
  }
});
