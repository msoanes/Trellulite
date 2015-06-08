TrelloClone.Views.CardForm = Backbone.View.extend({
  template: JST['cards/form'],

  initialize: function (options) {
    this.list = options.list;
  },

  tagName: 'form',

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
    data.list_id = this.list.id;
    this.model.save(data, {
      success: this.successfulSubmit.bind(this)
    });
  },

  successfulSubmit: function () {
    this.$el[0].reset();
    this.collection.add(this.model);
    this.model = new TrelloClone.Models.Card();
  }
});
