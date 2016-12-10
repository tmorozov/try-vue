/*globals Vue */
var card = new Vue({
  el: '#card',
  data: {
    title: 'Title',
    items: [{
      text: 'one'
    }, {
      text: 'two'
    }, {
      text: 'three'
    }]
  },
  methods: {
    addItem: function () {
      var input = document.getElementById('itemForm')
      if (input.value !== '') {
        this.items.push({
          text: input.value
        })
        input.value = ''
      }
    },
    removeItem: function (index) {
      this.items.splice(index, 1)
    }
  }
})
