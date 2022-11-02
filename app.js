const app = Vue.createApp({
  data() {
    return {
      enteredText: "",
      tasks: [],
      Visible: true,
    };
  },
  methods: {
    addText(event) {
      this.enteredText = event.target.value;
    },
    buttonClick() {
      this.tasks.push(this.enteredText);
    },
    showTask() {
      this.Visible = !this.Visible;
    },
  },
}).mount("#assignment");
