/*globals Vue */
var card = new Vue({
  el: '#card',
  data: {
    title: 'Title',
    totalRows: 0,
    items: [{
      text: 'star wars'
    }, {
      text: 'propulsion'
    }, {
      text: 'gravity'
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
  },
  filters: {
    capitalise: function (value) {
      if (!value) return ''
      value = value.toString()

      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    lowercase: function (value) {
      if (!value) return ''
      value = value.toString()

      return value.toLowerCase()
    },
    url: function (value) {
      if (!value) return ''
      value = value.toString()

      return 'https://en.wikipedia.org/wiki/' + value
    }
  },
  computed: {
    totalRows: function () {
      return this.items.length
    }
  }
})
