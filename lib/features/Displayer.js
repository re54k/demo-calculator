import _classCallCheck from "@babel/runtime-corejs3/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/esm/createClass";
export var Displayer = /*#__PURE__*/function () {
  function Displayer() {
    _classCallCheck(this, Displayer);
  }

  _createClass(Displayer, [{
    key: "flush",
    value: function flush(msg) {
      console.log(msg);
    }
  }]);

  return Displayer;
}();