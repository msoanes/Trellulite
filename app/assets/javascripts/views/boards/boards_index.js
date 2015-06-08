TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  initialize: function (options) {
    this.collection = options.collection;
    this.addBoards(this.collection);
    this.listenTo(this.collection, 'reset', this.addBoards);
    this.listenTo(this.collection, 'add', this.addBoard);
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  removeBoards: function () {
    this.collection.each
  },

  addBoards: function () {
    this.collection.each(function (model) {
      this.addBoard(model);
    });
  },

  addBoard: function (model) {
    var indexItemView = new TrelloClone.Views.BoardsIndexItem({
      model: model
    });
    this.addSubview('.boards', indexItemView);
  }

});
