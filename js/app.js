new Vue({
  el: '#app',
  data() {
    return {
      current: '',
      operator: null,
      operatorClicked: false
    }
  },
  methods: {
    clear() {
      this.current = ''
    },
    append(num) {
      if (this.operatorClicked) {
        this.current = ''
        this.operatorClicked = false
      }
      this.current = `${this.current}${num}`
      
    },
    dot() {
      if (this.current.indexOf('.') === -1) {
        this.append('.')
      }
    },
    setPrevious() {
      this.previous = this.current
      this.operatorClicked = true
      
    },
    divide() { 
      this.operator = (a, b) => a / b
      this.setPrevious()
    },
    times() {
      this.operator = (a, b) => a * b
       this.setPrevious()
     },
    add() { 
      this.operator = (a, b) => a + b
  this.setPrevious()
  
    },
    minus() {
      this.operator = (a, b) => a - b
  this.setPrevious()
    },
    equal() {
      this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`
      this.previous = null
    }
    
  },
})






