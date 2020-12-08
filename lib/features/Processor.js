import _Promise from "@babel/runtime-corejs3/core-js/promise";
import _classCallCheck from "@babel/runtime-corejs3/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/esm/createClass";
export var Processor = /*#__PURE__*/function () {
  function Processor() {
    _classCallCheck(this, Processor);
  }

  _createClass(Processor, [{
    key: "compute",
    value: function compute(a, b) {
      return _Promise.resolve(a + b);
    }
  }]);

  return Processor;
}();