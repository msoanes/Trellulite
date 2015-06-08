TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.addLists();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.lists(), 'add', this.addLists);
  },

  render: function () {
    var renderedContent = this.template({ board: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addLists: function () {
    var view = this;
    this.model.lists().each(function (model) {
      view.addList(model);
    });
  },

  addList: function (model) {
    var listView = new TrelloClone.Views.ListShow({
      model: model
    });
    this.addSubview('.lists', listView);
  }
});
