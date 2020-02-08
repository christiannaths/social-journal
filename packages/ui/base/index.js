import _styled, { createGlobalStyle } from 'styled-components';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  *, *:before, *:after {\n    box-sizing: inherit;\n    font-size: inherit;\n    line-height: inherit;\n    font-family: inherit;\n  }\n\n   html {\n    font-size: 100%;\n  }\n\n  body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, blockquote, q {\n    margin: 0;\n    padding: 0;\n    font-weight: normal;\n    font-style: normal;\n  }\n\n  strong {\n    font-weight: bold;\n  }\n\n  em {\n    font-style: italic\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ResetStyles = createGlobalStyle(_templateObject());

var fontSize = 18;
var fontSizes = [
	12,
	18,
	30
];
var lineHeight = 28;
var fontFamily = "'Amiri', Georgia, serif";
var fontUrl = "https://fonts.googleapis.com/css?family=Amiri:400,700&display=swap";
var theme = {
	fontSize: fontSize,
	fontSizes: fontSizes,
	lineHeight: lineHeight,
	fontFamily: fontFamily,
	fontUrl: fontUrl
};

var TypeScale = _styled.div.withConfig({
  displayName: "utils__TypeScale",
  componentId: "sc-13leq04-0"
})(["background:linear-gradient(to bottom,#00ff00,white 1px);background-size:100% ", "px;max-width:30rem;padding:0 2rem;padding-top:1px;margin-top:-1px;"], theme.lineHeight);

var Utils = {
  TypeScale: TypeScale
};

export { ResetStyles, Utils as utils };
