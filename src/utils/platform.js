const platform = /*#__PURE__*/ (() => navigator.platform)()
export const UA = /*#__PURE__*/ (() => navigator.userAgent)();
export const isMac = /*#__PURE__*/ /mac/i.test(platform);
export const isWindows = /*#__PURE__*/ /win32/i.test(platform);
