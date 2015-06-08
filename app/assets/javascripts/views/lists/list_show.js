TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  template: JST['lists/show'],

  className: 'col-md-3 my-panel',

  initialize: function () {
    this.addCards();

    var cardForm = new TrelloClone.Views.CardForm({
      list: this.model,
      model: new TrelloClone.Models.Card(),
      collection: this.model.cards()
    });
    this.addSubview('.new-card', cardForm);

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
  },

  render: function () {
    var renderedContent = this.template({ list: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  addCards: function () {
    var view = this;
    this.model.cards().each(function (model) {
      view.addCard(model);
    });
  },

  addCard: function (model) {
    var cardView = new TrelloClone.Views.CardShow({
      model: model
    });
    this.addSubview('.cards', cardView);
  }
});
