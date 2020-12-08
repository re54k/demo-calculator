var platform = /*#__PURE__*/function () {
  return navigator.platform;
}();

export var UA = /*#__PURE__*/function () {
  return navigator.userAgent;
}();
export var isMac = /*#__PURE__*/ /mac/i.test(platform);
export var isWindows = /*#__PURE__*/ /win32/i.test(platform);