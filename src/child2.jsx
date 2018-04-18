// const ChildComponent = {
//   name: 'ChildComponent',
//   props: ['name'],
//   render () {
//     return (
//       <div>
//         <h2>子组件 { this.name } </h2>
//       </div>
//     )
//   }
// }

const ChildComponent = ({ props, listeners }) => {
  console.log(listeners)
  return (
    <div class="child-jsx">
      <h2 onClick={ listeners.testEvent}>hi1 {props.name}</h2>
    </div>
  )
}

export default{
  // components: {
  //   ChildComponent
  // },
  render () {
    return (
      <div>
        <ChildComponent name="test" onTestEvent={this.clickHandler}/>
      </div>
    )
  },
  methods: {
    clickHandler () {
      console.log('click')
    }
  }
}
