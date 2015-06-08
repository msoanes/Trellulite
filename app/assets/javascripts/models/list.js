TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',
  //
  // parse: function (payload) {
  //   if (payload.lists) {
  //     _.each(payload.lists, function (listData) {
  //       var list = new TrelloClone.Models.List(listData, { parse: true });
  //       this.lists().add(list);
  //     });
  //   }
  // },
  //
  // lists: function () {
  //   if (!this._lists) {
  //     this._lists = new TrelloClone.Collections.Lists();
  //   }
  //   return this._lists;
  // }
});
