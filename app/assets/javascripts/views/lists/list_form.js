TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/form'],

  initialize: function (options) {
    this.board = options.board;
  },

  tagName: 'form',

  className: 'col-md-3 my-panel',

  events: {
    'submit': 'submit'
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
    data.board_id = this.board.id;
    this.model.save(data, {
      success: this.successfulSubmit.bind(this)
    });
  },

  successfulSubmit: function () {
    this.$el[0].reset();
    this.collection.add(this.model);
    this.model = new TrelloClone.Models.List();
  }
});
