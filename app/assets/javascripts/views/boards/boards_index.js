TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  template: JST['boards/index'],

  initialize: function (options) {
    this.collection = options.collection;

    this.addBoards(this.collection);
    var boardForm = new TrelloClone.Views.BoardForm({
      model: new TrelloClone.Models.Board(),
      collection: this.collection
    });
    this.addSubview('.new-board', boardForm);

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
    var view = this;
    this.collection.each(function (model) {
      view.addBoard(model);
    });
  },

  addBoard: function (model) {
    var indexItemView = new TrelloClone.Views.BoardsIndexItem({
      model: model
    });
    this.addSubview('.boards', indexItemView);
  }

});
