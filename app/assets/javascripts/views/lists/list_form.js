TrelloClone.Views.ListForm = Backbone.View.extend({
  template: JST['lists/form'],

  tagName: 'form',

  events: {
    'submit': 'submit'
  },

  render: function () {
    console.log('rendering');
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON();
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
