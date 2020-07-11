<script>
export default {
  name: 'my-button',

  data() {
    return {
      value: 'hello vue'
    }
  },

  render(h) {
    return <div>
      <h2>i am vue component: {this.value}</h2>
      <input vModel={this.value} />
    </div>
  }
}
</script>