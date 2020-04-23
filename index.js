new Vue({
    el: '#root',
    data: {
      dividend: 0,
      divider: 0,
      answer: "",
      failed: false,
      wrongAnswer: false,
      counter: 0
    },
    methods: {
      handleAnswerBtnClick(answer) {
        if((answer === this.dividend / this.divider) && !this.failed) {
          this.counter+=1;
          this.generateNewExpression();
        } else {
          this.turnOnWrongAnswer();
          this.counter = 0;
        }
      },
      handleCanNotAnswerBtnClick() {
        if(!this.failed) {
          this.answer = this.dividend / this.divider;
          this.failed = true;
        } else {
          this.generateNewExpression();
        }
      },
      generateNewExpression() {
        this.divider = this.getRandomInt();
        this.dividend = this.divider * this.getRandomInt();
        this.answer = "?";
        this.failed = false;
      },
      getRandomInt() {
        return Math.floor(Math.random() * 10) + 1;
      },
      turnOnWrongAnswer() {
        const instance = this;
        instance.wrongAnswer = true;
        setTimeout(() => (instance.wrongAnswer = false), 500);
      }
    },
    mounted() {
      this.generateNewExpression();
    }
  })