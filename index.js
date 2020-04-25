new Vue({
    el: '#root',
    data: {
        dividend: 0,
        divider: 0,
        quotient: 0,
        answer: '',
        failed: false,
        wrongAnswer: false,
        counter: 0
    },
    methods: {
        handleAnswerBtnClick(answer) {
            if ((answer === this.quotient) && !this.failed) {
                this.counter += 1;
                this.generateNewExpression();
            } else {
                this.highlightWrongAnswer();
                this.counter = 0;
            }
        },
        handleCanNotAnswerBtnClick() {
            if (!this.failed) {
                this.answer = this.dividend / this.divider;
                this.failed = true;
            } else {
                this.generateNewExpression();
            }
        },
        generateNewExpression() {
            this.divider = this.getRandom(10);
            this.quotient = this.getRandom(10);
            this.dividend = this.divider * this.quotient;
            this.answer = "?";
            this.failed = false;
        },
        getRandom(max) {
            return Math.floor(Math.random() * max) + 1;
        },
        highlightWrongAnswer() {
            const instance = this;
            instance.wrongAnswer = true;
            setTimeout(() => (instance.wrongAnswer = false), 500);
        }
    },
    mounted() {
        this.generateNewExpression();
    }
})