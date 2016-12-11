/*globals Vue, _ */
var card = new Vue({
  el: '#card',
  data: {
    title: 'Title',
    input: '',
    buttonText: 'Add Item',
    totalRows: 0,
    items: [{
      text: 'star wars'
    }, {
      text: 'propulsion'
    }, {
      text: 'gravity'
    }],
    isLarge: false
  },
  watch: {
    input: _.debounce(function () {
      this.buttonText = this.input !== '' ? 'Add ' + this.input : 'Add Item'
    }, 250)
  },
  methods: {
    addItem: function () {
      console.log(this.input)
      if (this.input !== '') {
        this.items.push({
          text: this.input
        })
        this.input = ''
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
