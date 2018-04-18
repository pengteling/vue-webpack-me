webpackJsonp([0],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child2_jsx__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child2_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__child2_jsx__);

// import App from './App.vue'

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el:'#app',
  data:{
    msg:'hi,vue'
  },
  components:{
    App: __WEBPACK_IMPORTED_MODULE_1__child2_jsx___default.a
  },
  render: h=>h(__WEBPACK_IMPORTED_MODULE_1__child2_jsx___default.a)
})

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var ChildComponent = {
  functional: true,
  render: function render(h, _ref) {
    var props = _ref.props,
        listeners = _ref.listeners;

    console.log(listeners);
    return h(
      "div",
      { "class": "child-jsx" },
      [h(
        "h2",
        {
          on: {
            "click": listeners.testEvent
          }
        },
        ["hi ", props.name]
      )]
    );
  }
};
exports.default = {
  // components: {
  //   ChildComponent
  // },
  render: function render() {
    var h = arguments[0];

    return h("div", [h(ChildComponent, {
      attrs: { name: "test" },
      on: {
        "testEvent": this.clickHandler
      }
    })]);
  },

  methods: {
    clickHandler: function clickHandler() {
      console.log('click');
    }
  }
};

/***/ })

},[2]);