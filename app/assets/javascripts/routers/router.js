TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.collection = options.collection;
  },

  routes: {
    '': 'boardsIndex',
    'boards/:id': 'boardsShow'
  },

  boardsIndex: function () {
    this.collection.fetch();
    var view = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
