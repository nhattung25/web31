let counter = {
  value: 0,
  up() {
    this.value++;
    return this;
  },
  down() {
    this.value--;
    return this;
  },
  get() {
    alert("Value: " + this.value);
    return this;
  },
  reset() {
    this.value = 0;
    return this;
  },
};

counter.down().down().up().down().down().get();
