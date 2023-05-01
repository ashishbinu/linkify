(() => {
  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/version.js
  var version = "4.0.0";

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/utils.js
  function isUndefined(value) {
    return value === void 0;
  }
  function isBoolean(value) {
    return typeof value === "boolean";
  }
  function defaults(dest, src) {
    for (var prop in src) {
      if (src.hasOwnProperty(prop) && isUndefined(dest[prop])) {
        dest[prop] = src[prop];
      }
    }
    return dest;
  }
  function ellipsis(str, truncateLen, ellipsisChars) {
    var ellipsisLength;
    if (str.length > truncateLen) {
      if (ellipsisChars == null) {
        ellipsisChars = "&hellip;";
        ellipsisLength = 3;
      } else {
        ellipsisLength = ellipsisChars.length;
      }
      str = str.substring(0, truncateLen - ellipsisLength) + ellipsisChars;
    }
    return str;
  }
  function remove(arr, item) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
  }
  function removeWithPredicate(arr, fn) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (fn(arr[i]) === true) {
        arr.splice(i, 1);
      }
    }
  }
  function assertNever(theValue) {
    throw new Error("Unhandled case for value: '".concat(theValue, "'"));
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/regex-lib.js
  var letterRe = /[A-Za-z]/;
  var digitRe = /[\d]/;
  var whitespaceRe = /\s/;
  var quoteRe = /['"]/;
  var controlCharsRe = /[\x00-\x1F\x7F]/;
  var alphaCharsStr = /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source;
  var emojiStr = /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source;
  var marksStr = /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source;
  var alphaCharsAndMarksStr = alphaCharsStr + emojiStr + marksStr;
  var decimalNumbersStr = /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source;
  var alphaNumericCharsRe = new RegExp("[".concat(alphaCharsStr + decimalNumbersStr, "]"));
  var alphaNumericAndMarksCharsStr = alphaCharsAndMarksStr + decimalNumbersStr;
  var alphaNumericAndMarksRe = new RegExp("[".concat(alphaNumericAndMarksCharsStr, "]"));

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/html-tag.js
  var HtmlTag = (
    /** @class */
    function() {
      function HtmlTag2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.tagName = "";
        this.attrs = {};
        this.innerHTML = "";
        this.tagName = cfg.tagName || "";
        this.attrs = cfg.attrs || {};
        this.innerHTML = cfg.innerHtml || cfg.innerHTML || "";
      }
      HtmlTag2.prototype.setTagName = function(tagName) {
        this.tagName = tagName;
        return this;
      };
      HtmlTag2.prototype.getTagName = function() {
        return this.tagName || "";
      };
      HtmlTag2.prototype.setAttr = function(attrName, attrValue) {
        var tagAttrs = this.getAttrs();
        tagAttrs[attrName] = attrValue;
        return this;
      };
      HtmlTag2.prototype.getAttr = function(attrName) {
        return this.getAttrs()[attrName];
      };
      HtmlTag2.prototype.setAttrs = function(attrs) {
        Object.assign(this.getAttrs(), attrs);
        return this;
      };
      HtmlTag2.prototype.getAttrs = function() {
        return this.attrs || (this.attrs = {});
      };
      HtmlTag2.prototype.setClass = function(cssClass) {
        return this.setAttr("class", cssClass);
      };
      HtmlTag2.prototype.addClass = function(cssClass) {
        var classAttr = this.getClass(), classes = !classAttr ? [] : classAttr.split(whitespaceRe), newClasses = cssClass.split(whitespaceRe), newClass;
        while (newClass = newClasses.shift()) {
          if (classes.indexOf(newClass) === -1) {
            classes.push(newClass);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      };
      HtmlTag2.prototype.removeClass = function(cssClass) {
        var classAttr = this.getClass(), classes = !classAttr ? [] : classAttr.split(whitespaceRe), removeClasses = cssClass.split(whitespaceRe), removeClass;
        while (classes.length && (removeClass = removeClasses.shift())) {
          var idx = classes.indexOf(removeClass);
          if (idx !== -1) {
            classes.splice(idx, 1);
          }
        }
        this.getAttrs()["class"] = classes.join(" ");
        return this;
      };
      HtmlTag2.prototype.getClass = function() {
        return this.getAttrs()["class"] || "";
      };
      HtmlTag2.prototype.hasClass = function(cssClass) {
        return (" " + this.getClass() + " ").indexOf(" " + cssClass + " ") !== -1;
      };
      HtmlTag2.prototype.setInnerHTML = function(html) {
        this.innerHTML = html;
        return this;
      };
      HtmlTag2.prototype.setInnerHtml = function(html) {
        return this.setInnerHTML(html);
      };
      HtmlTag2.prototype.getInnerHTML = function() {
        return this.innerHTML || "";
      };
      HtmlTag2.prototype.getInnerHtml = function() {
        return this.getInnerHTML();
      };
      HtmlTag2.prototype.toAnchorString = function() {
        var tagName = this.getTagName(), attrsStr = this.buildAttrsStr();
        attrsStr = attrsStr ? " " + attrsStr : "";
        return ["<", tagName, attrsStr, ">", this.getInnerHtml(), "</", tagName, ">"].join("");
      };
      HtmlTag2.prototype.buildAttrsStr = function() {
        if (!this.attrs)
          return "";
        var attrs = this.getAttrs(), attrsArr = [];
        for (var prop in attrs) {
          if (attrs.hasOwnProperty(prop)) {
            attrsArr.push(prop + '="' + attrs[prop] + '"');
          }
        }
        return attrsArr.join(" ");
      };
      return HtmlTag2;
    }()
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/truncate/truncate-smart.js
  function truncateSmart(url, truncateLen, ellipsisChars) {
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
      ellipsisChars = "&hellip;";
      ellipsisLength = 3;
      ellipsisLengthBeforeParsing = 8;
    } else {
      ellipsisLength = ellipsisChars.length;
      ellipsisLengthBeforeParsing = ellipsisChars.length;
    }
    var parse_url = function(url2) {
      var urlObj2 = {};
      var urlSub = url2;
      var match = urlSub.match(/^([a-z]+):\/\//i);
      if (match) {
        urlObj2.scheme = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^(.*?)(?=(\?|#|\/|$))/i);
      if (match) {
        urlObj2.host = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^\/(.*?)(?=(\?|#|$))/i);
      if (match) {
        urlObj2.path = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^\?(.*?)(?=(#|$))/i);
      if (match) {
        urlObj2.query = match[1];
        urlSub = urlSub.substr(match[0].length);
      }
      match = urlSub.match(/^#(.*?)$/i);
      if (match) {
        urlObj2.fragment = match[1];
      }
      return urlObj2;
    };
    var buildUrl = function(urlObj2) {
      var url2 = "";
      if (urlObj2.scheme && urlObj2.host) {
        url2 += urlObj2.scheme + "://";
      }
      if (urlObj2.host) {
        url2 += urlObj2.host;
      }
      if (urlObj2.path) {
        url2 += "/" + urlObj2.path;
      }
      if (urlObj2.query) {
        url2 += "?" + urlObj2.query;
      }
      if (urlObj2.fragment) {
        url2 += "#" + urlObj2.fragment;
      }
      return url2;
    };
    var buildSegment = function(segment, remainingAvailableLength3) {
      var remainingAvailableLengthHalf = remainingAvailableLength3 / 2, startOffset = Math.ceil(remainingAvailableLengthHalf), endOffset = -1 * Math.floor(remainingAvailableLengthHalf), end2 = "";
      if (endOffset < 0) {
        end2 = segment.substr(endOffset);
      }
      return segment.substr(0, startOffset) + ellipsisChars + end2;
    };
    if (url.length <= truncateLen) {
      return url;
    }
    var availableLength = truncateLen - ellipsisLength;
    var urlObj = parse_url(url);
    if (urlObj.query) {
      var matchQuery = urlObj.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
      if (matchQuery) {
        urlObj.query = urlObj.query.substr(0, matchQuery[1].length);
        url = buildUrl(urlObj);
      }
    }
    if (url.length <= truncateLen) {
      return url;
    }
    if (urlObj.host) {
      urlObj.host = urlObj.host.replace(/^www\./, "");
      url = buildUrl(urlObj);
    }
    if (url.length <= truncateLen) {
      return url;
    }
    var str = "";
    if (urlObj.host) {
      str += urlObj.host;
    }
    if (str.length >= availableLength) {
      if (urlObj.host.length == truncateLen) {
        return (urlObj.host.substr(0, truncateLen - ellipsisLength) + ellipsisChars).substr(0, availableLength + ellipsisLengthBeforeParsing);
      }
      return buildSegment(str, availableLength).substr(0, availableLength + ellipsisLengthBeforeParsing);
    }
    var pathAndQuery = "";
    if (urlObj.path) {
      pathAndQuery += "/" + urlObj.path;
    }
    if (urlObj.query) {
      pathAndQuery += "?" + urlObj.query;
    }
    if (pathAndQuery) {
      if ((str + pathAndQuery).length >= availableLength) {
        if ((str + pathAndQuery).length == truncateLen) {
          return (str + pathAndQuery).substr(0, truncateLen);
        }
        var remainingAvailableLength = availableLength - str.length;
        return (str + buildSegment(pathAndQuery, remainingAvailableLength)).substr(0, availableLength + ellipsisLengthBeforeParsing);
      } else {
        str += pathAndQuery;
      }
    }
    if (urlObj.fragment) {
      var fragment = "#" + urlObj.fragment;
      if ((str + fragment).length >= availableLength) {
        if ((str + fragment).length == truncateLen) {
          return (str + fragment).substr(0, truncateLen);
        }
        var remainingAvailableLength2 = availableLength - str.length;
        return (str + buildSegment(fragment, remainingAvailableLength2)).substr(0, availableLength + ellipsisLengthBeforeParsing);
      } else {
        str += fragment;
      }
    }
    if (urlObj.scheme && urlObj.host) {
      var scheme = urlObj.scheme + "://";
      if ((str + scheme).length < availableLength) {
        return (scheme + str).substr(0, truncateLen);
      }
    }
    if (str.length <= truncateLen) {
      return str;
    }
    var end = "";
    if (availableLength > 0) {
      end = str.substr(-1 * Math.floor(availableLength / 2));
    }
    return (str.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/truncate/truncate-middle.js
  function truncateMiddle(url, truncateLen, ellipsisChars) {
    if (url.length <= truncateLen) {
      return url;
    }
    var ellipsisLengthBeforeParsing;
    var ellipsisLength;
    if (ellipsisChars == null) {
      ellipsisChars = "&hellip;";
      ellipsisLengthBeforeParsing = 8;
      ellipsisLength = 3;
    } else {
      ellipsisLengthBeforeParsing = ellipsisChars.length;
      ellipsisLength = ellipsisChars.length;
    }
    var availableLength = truncateLen - ellipsisLength;
    var end = "";
    if (availableLength > 0) {
      end = url.substr(-1 * Math.floor(availableLength / 2));
    }
    return (url.substr(0, Math.ceil(availableLength / 2)) + ellipsisChars + end).substr(0, availableLength + ellipsisLengthBeforeParsing);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/truncate/truncate-end.js
  function truncateEnd(anchorText, truncateLen, ellipsisChars) {
    return ellipsis(anchorText, truncateLen, ellipsisChars);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/anchor-tag-builder.js
  var AnchorTagBuilder = (
    /** @class */
    function() {
      function AnchorTagBuilder2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.newWindow = false;
        this.truncate = {};
        this.className = "";
        this.newWindow = cfg.newWindow || false;
        this.truncate = cfg.truncate || {};
        this.className = cfg.className || "";
      }
      AnchorTagBuilder2.prototype.build = function(match) {
        return new HtmlTag({
          tagName: "a",
          attrs: this.createAttrs(match),
          innerHtml: this.processAnchorText(match.getAnchorText())
        });
      };
      AnchorTagBuilder2.prototype.createAttrs = function(match) {
        var attrs = {
          href: match.getAnchorHref()
          // we'll always have the `href` attribute
        };
        var cssClass = this.createCssClass(match);
        if (cssClass) {
          attrs["class"] = cssClass;
        }
        if (this.newWindow) {
          attrs["target"] = "_blank";
          attrs["rel"] = "noopener noreferrer";
        }
        if (this.truncate) {
          if (this.truncate.length && this.truncate.length < match.getAnchorText().length) {
            attrs["title"] = match.getAnchorHref();
          }
        }
        return attrs;
      };
      AnchorTagBuilder2.prototype.createCssClass = function(match) {
        var className = this.className;
        if (!className) {
          return "";
        } else {
          var returnClasses = [className], cssClassSuffixes = match.getCssClassSuffixes();
          for (var i = 0, len = cssClassSuffixes.length; i < len; i++) {
            returnClasses.push(className + "-" + cssClassSuffixes[i]);
          }
          return returnClasses.join(" ");
        }
      };
      AnchorTagBuilder2.prototype.processAnchorText = function(anchorText) {
        anchorText = this.doTruncate(anchorText);
        return anchorText;
      };
      AnchorTagBuilder2.prototype.doTruncate = function(anchorText) {
        var truncate = this.truncate;
        if (!truncate || !truncate.length)
          return anchorText;
        var truncateLength = truncate.length, truncateLocation = truncate.location;
        if (truncateLocation === "smart") {
          return truncateSmart(anchorText, truncateLength);
        } else if (truncateLocation === "middle") {
          return truncateMiddle(anchorText, truncateLength);
        } else {
          return truncateEnd(anchorText, truncateLength);
        }
      };
      return AnchorTagBuilder2;
    }()
  );

  // node_modules/.pnpm/tslib@2.5.0/node_modules/tslib/tslib.es6.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function() {
    __assign = Object.assign || function __assign2(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
      }
      return t;
    };
    return __assign.apply(this, arguments);
  };

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/abstract-match.js
  var AbstractMatch = (
    /** @class */
    function() {
      function AbstractMatch2(cfg) {
        this._ = null;
        this.matchedText = "";
        this.offset = 0;
        this.tagBuilder = cfg.tagBuilder;
        this.matchedText = cfg.matchedText;
        this.offset = cfg.offset;
      }
      AbstractMatch2.prototype.getMatchedText = function() {
        return this.matchedText;
      };
      AbstractMatch2.prototype.setOffset = function(offset) {
        this.offset = offset;
      };
      AbstractMatch2.prototype.getOffset = function() {
        return this.offset;
      };
      AbstractMatch2.prototype.getCssClassSuffixes = function() {
        return [this.type];
      };
      AbstractMatch2.prototype.buildTag = function() {
        return this.tagBuilder.build(this);
      };
      return AbstractMatch2;
    }()
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/tld-regex.js
  var tldRegexStr = "(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)";
  var tldRegex = new RegExp("^" + tldRegexStr + "$");

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/uri-utils.js
  var urlSuffixStartCharsRe = /[\/?#]/;
  var urlSuffixAllowedSpecialCharsRe = /[-+&@#/%=~_()|'$*\[\]{}\u2713]/;
  var urlSuffixNotAllowedAsLastCharRe = /[?!:,.;^]/;
  var httpSchemeRe = /https?:\/\//i;
  var httpSchemePrefixRe = new RegExp("^" + httpSchemeRe.source, "i");
  var urlSuffixedCharsNotAllowedAtEndRe = new RegExp(urlSuffixNotAllowedAsLastCharRe.source + "$");
  var invalidSchemeRe = /^(javascript|vbscript):/i;
  var schemeUrlRe = /^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/;
  var tldUrlHostRe = /^(?:\/\/)?([^/#?:]+)/;
  function isSchemeStartChar(char) {
    return letterRe.test(char);
  }
  function isSchemeChar(char) {
    return letterRe.test(char) || digitRe.test(char) || char === "+" || char === "-" || char === ".";
  }
  function isDomainLabelStartChar(char) {
    return alphaNumericAndMarksRe.test(char);
  }
  function isDomainLabelChar(char) {
    return char === "_" || isDomainLabelStartChar(char);
  }
  function isPathChar(char) {
    return alphaNumericAndMarksRe.test(char) || urlSuffixAllowedSpecialCharsRe.test(char) || urlSuffixNotAllowedAsLastCharRe.test(char);
  }
  function isUrlSuffixStartChar(char) {
    return urlSuffixStartCharsRe.test(char);
  }
  function isKnownTld(tld) {
    return tldRegex.test(tld.toLowerCase());
  }
  function isValidSchemeUrl(url) {
    if (invalidSchemeRe.test(url)) {
      return false;
    }
    var schemeMatch = url.match(schemeUrlRe);
    if (!schemeMatch) {
      return false;
    }
    var isAuthorityMatch = !!schemeMatch[1];
    var host = schemeMatch[2];
    if (isAuthorityMatch) {
      return true;
    }
    if (host.indexOf(".") === -1 || !letterRe.test(host)) {
      return false;
    }
    return true;
  }
  function isValidTldMatch(url) {
    var tldUrlHostMatch = url.match(tldUrlHostRe);
    if (!tldUrlHostMatch) {
      return false;
    }
    var host = tldUrlHostMatch[0];
    var hostLabels = host.split(".");
    if (hostLabels.length < 2) {
      return false;
    }
    var tld = hostLabels[hostLabels.length - 1];
    if (!isKnownTld(tld)) {
      return false;
    }
    return true;
  }
  var ipV4Re = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  var ipV4PartRe = /[:/?#]/;
  function isValidIpV4Address(url) {
    var ipV4Part = url.split(ipV4PartRe, 1)[0];
    return ipV4Re.test(ipV4Part);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/url-match.js
  var wwwPrefixRegex = /^(https?:\/\/)?(www\.)?/i;
  var protocolRelativeRegex = /^\/\//;
  var UrlMatch = (
    /** @class */
    function(_super) {
      __extends(UrlMatch2, _super);
      function UrlMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.type = "url";
        _this.url = "";
        _this.urlMatchType = "scheme";
        _this.protocolRelativeMatch = false;
        _this.stripPrefix = {
          scheme: true,
          www: true
        };
        _this.stripTrailingSlash = true;
        _this.decodePercentEncoding = true;
        _this.protocolPrepended = false;
        _this.urlMatchType = cfg.urlMatchType;
        _this.url = cfg.url;
        _this.protocolRelativeMatch = cfg.protocolRelativeMatch;
        _this.stripPrefix = cfg.stripPrefix;
        _this.stripTrailingSlash = cfg.stripTrailingSlash;
        _this.decodePercentEncoding = cfg.decodePercentEncoding;
        return _this;
      }
      UrlMatch2.prototype.getType = function() {
        return "url";
      };
      UrlMatch2.prototype.getUrlMatchType = function() {
        return this.urlMatchType;
      };
      UrlMatch2.prototype.getUrl = function() {
        var url = this.url;
        if (!this.protocolRelativeMatch && this.urlMatchType !== "scheme" && !this.protocolPrepended) {
          url = this.url = "http://" + url;
          this.protocolPrepended = true;
        }
        return url;
      };
      UrlMatch2.prototype.getAnchorHref = function() {
        var url = this.getUrl();
        return url.replace(/&amp;/g, "&");
      };
      UrlMatch2.prototype.getAnchorText = function() {
        var anchorText = this.getMatchedText();
        if (this.protocolRelativeMatch) {
          anchorText = stripProtocolRelativePrefix(anchorText);
        }
        if (this.stripPrefix.scheme) {
          anchorText = stripSchemePrefix(anchorText);
        }
        if (this.stripPrefix.www) {
          anchorText = stripWwwPrefix(anchorText);
        }
        if (this.stripTrailingSlash) {
          anchorText = removeTrailingSlash(anchorText);
        }
        if (this.decodePercentEncoding) {
          anchorText = removePercentEncoding(anchorText);
        }
        return anchorText;
      };
      return UrlMatch2;
    }(AbstractMatch)
  );
  function stripSchemePrefix(url) {
    return url.replace(httpSchemePrefixRe, "");
  }
  function stripWwwPrefix(url) {
    return url.replace(wwwPrefixRegex, "$1");
  }
  function stripProtocolRelativePrefix(text) {
    return text.replace(protocolRelativeRegex, "");
  }
  function removeTrailingSlash(anchorText) {
    if (anchorText.charAt(anchorText.length - 1) === "/") {
      anchorText = anchorText.slice(0, -1);
    }
    return anchorText;
  }
  function removePercentEncoding(anchorText) {
    var preProcessedEntityAnchorText = anchorText.replace(/%22/gi, "&quot;").replace(/%26/gi, "&amp;").replace(/%27/gi, "&#39;").replace(/%3C/gi, "&lt;").replace(/%3E/gi, "&gt;");
    try {
      return decodeURIComponent(preProcessedEntityAnchorText);
    } catch (e) {
      return preProcessedEntityAnchorText;
    }
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/email-utils.js
  var mailtoSchemePrefixRe = /^mailto:/i;
  var emailLocalPartCharRegex = new RegExp("[".concat(alphaNumericAndMarksCharsStr, "!#$%&'*+/=?^_`{|}~-]"));
  function isEmailLocalPartStartChar(char) {
    return alphaNumericAndMarksRe.test(char);
  }
  function isEmailLocalPartChar(char) {
    return emailLocalPartCharRegex.test(char);
  }
  function isValidEmail(emailAddress) {
    var emailAddressTld = emailAddress.split(".").pop() || "";
    return isKnownTld(emailAddressTld);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/email-match.js
  var EmailMatch = (
    /** @class */
    function(_super) {
      __extends(EmailMatch2, _super);
      function EmailMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.type = "email";
        _this.email = "";
        _this.email = cfg.email;
        return _this;
      }
      EmailMatch2.prototype.getType = function() {
        return "email";
      };
      EmailMatch2.prototype.getEmail = function() {
        return this.email;
      };
      EmailMatch2.prototype.getAnchorHref = function() {
        return "mailto:" + this.email;
      };
      EmailMatch2.prototype.getAnchorText = function() {
        return this.email;
      };
      return EmailMatch2;
    }(AbstractMatch)
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/hashtag-utils.js
  function isHashtagTextChar(char) {
    return char === "_" || alphaNumericAndMarksRe.test(char);
  }
  function isValidHashtag(hashtag) {
    return hashtag.length <= 140;
  }
  var hashtagServices = ["twitter", "facebook", "instagram", "tiktok"];

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/hashtag-match.js
  var HashtagMatch = (
    /** @class */
    function(_super) {
      __extends(HashtagMatch2, _super);
      function HashtagMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.type = "hashtag";
        _this.serviceName = "twitter";
        _this.hashtag = "";
        _this.serviceName = cfg.serviceName;
        _this.hashtag = cfg.hashtag;
        return _this;
      }
      HashtagMatch2.prototype.getType = function() {
        return "hashtag";
      };
      HashtagMatch2.prototype.getServiceName = function() {
        return this.serviceName;
      };
      HashtagMatch2.prototype.getHashtag = function() {
        return this.hashtag;
      };
      HashtagMatch2.prototype.getAnchorHref = function() {
        var serviceName = this.serviceName, hashtag = this.hashtag;
        switch (serviceName) {
          case "twitter":
            return "https://twitter.com/hashtag/" + hashtag;
          case "facebook":
            return "https://www.facebook.com/hashtag/" + hashtag;
          case "instagram":
            return "https://instagram.com/explore/tags/" + hashtag;
          case "tiktok":
            return "https://www.tiktok.com/tag/" + hashtag;
          default:
            assertNever(serviceName);
            throw new Error("Invalid hashtag service: ".concat(serviceName));
        }
      };
      HashtagMatch2.prototype.getAnchorText = function() {
        return "#" + this.hashtag;
      };
      HashtagMatch2.prototype.getCssClassSuffixes = function() {
        var cssClassSuffixes = _super.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
          cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
      };
      return HashtagMatch2;
    }(AbstractMatch)
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/mention-utils.js
  var mentionRegexes = {
    twitter: /^@\w{1,15}$/,
    instagram: /^@[_\w]{1,30}$/,
    soundcloud: /^@[-a-z0-9_]{3,25}$/,
    // TikTok usernames are 1-24 characters containing letters, numbers, underscores
    // and periods, but cannot end in a period: https://support.tiktok.com/en/getting-started/setting-up-your-profile/changing-your-username
    tiktok: /^@[.\w]{1,23}[\w]$/
  };
  var mentionTextCharRe = /[-\w.]/;
  function isMentionTextChar(char) {
    return mentionTextCharRe.test(char);
  }
  function isValidMention(mention, serviceName) {
    var re = mentionRegexes[serviceName];
    return re.test(mention);
  }
  var mentionServices = ["twitter", "instagram", "soundcloud", "tiktok"];

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/mention-match.js
  var MentionMatch = (
    /** @class */
    function(_super) {
      __extends(MentionMatch2, _super);
      function MentionMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.type = "mention";
        _this.serviceName = "twitter";
        _this.mention = "";
        _this.mention = cfg.mention;
        _this.serviceName = cfg.serviceName;
        return _this;
      }
      MentionMatch2.prototype.getType = function() {
        return "mention";
      };
      MentionMatch2.prototype.getMention = function() {
        return this.mention;
      };
      MentionMatch2.prototype.getServiceName = function() {
        return this.serviceName;
      };
      MentionMatch2.prototype.getAnchorHref = function() {
        switch (this.serviceName) {
          case "twitter":
            return "https://twitter.com/" + this.mention;
          case "instagram":
            return "https://instagram.com/" + this.mention;
          case "soundcloud":
            return "https://soundcloud.com/" + this.mention;
          case "tiktok":
            return "https://www.tiktok.com/@" + this.mention;
          default:
            throw new Error("Unknown service name to point mention to: " + this.serviceName);
        }
      };
      MentionMatch2.prototype.getAnchorText = function() {
        return "@" + this.mention;
      };
      MentionMatch2.prototype.getCssClassSuffixes = function() {
        var cssClassSuffixes = _super.prototype.getCssClassSuffixes.call(this), serviceName = this.getServiceName();
        if (serviceName) {
          cssClassSuffixes.push(serviceName);
        }
        return cssClassSuffixes;
      };
      return MentionMatch2;
    }(AbstractMatch)
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/phone-number-utils.js
  var separatorCharRe = /[-. ]/;
  var hasDelimCharsRe = /[-. ()]/;
  var controlCharRe = /[,;]/;
  var mostPhoneNumbers = /(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/;
  var japanesePhoneRe = /(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/;
  var validPhoneNumberRe = new RegExp("^".concat(mostPhoneNumbers.source, "|").concat(japanesePhoneRe.source, "$"));
  function isPhoneNumberSeparatorChar(char) {
    return separatorCharRe.test(char);
  }
  function isPhoneNumberControlChar(char) {
    return controlCharRe.test(char);
  }
  function isValidPhoneNumber(phoneNumberText) {
    var hasDelimiters = phoneNumberText.charAt(0) === "+" || hasDelimCharsRe.test(phoneNumberText);
    return hasDelimiters && validPhoneNumberRe.test(phoneNumberText);
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/match/phone-match.js
  var PhoneMatch = (
    /** @class */
    function(_super) {
      __extends(PhoneMatch2, _super);
      function PhoneMatch2(cfg) {
        var _this = _super.call(this, cfg) || this;
        _this.type = "phone";
        _this.number = "";
        _this.plusSign = false;
        _this.number = cfg.number;
        _this.plusSign = cfg.plusSign;
        return _this;
      }
      PhoneMatch2.prototype.getType = function() {
        return "phone";
      };
      PhoneMatch2.prototype.getPhoneNumber = function() {
        return this.number;
      };
      PhoneMatch2.prototype.getNumber = function() {
        return this.getPhoneNumber();
      };
      PhoneMatch2.prototype.getAnchorHref = function() {
        return "tel:" + (this.plusSign ? "+" : "") + this.number;
      };
      PhoneMatch2.prototype.getAnchorText = function() {
        return this.matchedText;
      };
      return PhoneMatch2;
    }(AbstractMatch)
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/parser/parse-matches.js
  function parseMatches(text, args) {
    var tagBuilder = args.tagBuilder;
    var stripPrefix = args.stripPrefix;
    var stripTrailingSlash = args.stripTrailingSlash;
    var decodePercentEncoding = args.decodePercentEncoding;
    var hashtagServiceName = args.hashtagServiceName;
    var mentionServiceName = args.mentionServiceName;
    var matches = [];
    var textLen = text.length;
    var stateMachines = [];
    var charIdx = 0;
    for (; charIdx < textLen; charIdx++) {
      var char = text.charAt(charIdx);
      if (stateMachines.length === 0) {
        stateNoMatch(char);
      } else {
        for (var stateIdx = stateMachines.length - 1; stateIdx >= 0; stateIdx--) {
          var stateMachine = stateMachines[stateIdx];
          switch (stateMachine.state) {
            case 11:
              stateProtocolRelativeSlash1(stateMachine, char);
              break;
            case 12:
              stateProtocolRelativeSlash2(stateMachine, char);
              break;
            case 0:
              stateSchemeChar(stateMachine, char);
              break;
            case 1:
              stateSchemeHyphen(stateMachine, char);
              break;
            case 2:
              stateSchemeColon(stateMachine, char);
              break;
            case 3:
              stateSchemeSlash1(stateMachine, char);
              break;
            case 4:
              stateSchemeSlash2(stateMachine, char);
              break;
            case 5:
              stateDomainLabelChar(stateMachine, char);
              break;
            case 6:
              stateDomainHyphen(stateMachine, char);
              break;
            case 7:
              stateDomainDot(stateMachine, char);
              break;
            case 13:
              stateIpV4Digit(stateMachine, char);
              break;
            case 14:
              stateIPv4Dot(stateMachine, char);
              break;
            case 8:
              statePortColon(stateMachine, char);
              break;
            case 9:
              statePortNumber(stateMachine, char);
              break;
            case 10:
              statePath(stateMachine, char);
              break;
            case 15:
              stateEmailMailto_M(stateMachine, char);
              break;
            case 16:
              stateEmailMailto_A(stateMachine, char);
              break;
            case 17:
              stateEmailMailto_I(stateMachine, char);
              break;
            case 18:
              stateEmailMailto_L(stateMachine, char);
              break;
            case 19:
              stateEmailMailto_T(stateMachine, char);
              break;
            case 20:
              stateEmailMailto_O(stateMachine, char);
              break;
            case 21:
              stateEmailMailtoColon(stateMachine, char);
              break;
            case 22:
              stateEmailLocalPart(stateMachine, char);
              break;
            case 23:
              stateEmailLocalPartDot(stateMachine, char);
              break;
            case 24:
              stateEmailAtSign(stateMachine, char);
              break;
            case 25:
              stateEmailDomainChar(stateMachine, char);
              break;
            case 26:
              stateEmailDomainHyphen(stateMachine, char);
              break;
            case 27:
              stateEmailDomainDot(stateMachine, char);
              break;
            case 28:
              stateHashtagHashChar(stateMachine, char);
              break;
            case 29:
              stateHashtagTextChar(stateMachine, char);
              break;
            case 30:
              stateMentionAtChar(stateMachine, char);
              break;
            case 31:
              stateMentionTextChar(stateMachine, char);
              break;
            case 32:
              statePhoneNumberOpenParen(stateMachine, char);
              break;
            case 33:
              statePhoneNumberAreaCodeDigit1(stateMachine, char);
              break;
            case 34:
              statePhoneNumberAreaCodeDigit2(stateMachine, char);
              break;
            case 35:
              statePhoneNumberAreaCodeDigit3(stateMachine, char);
              break;
            case 36:
              statePhoneNumberCloseParen(stateMachine, char);
              break;
            case 37:
              statePhoneNumberPlus(stateMachine, char);
              break;
            case 38:
              statePhoneNumberDigit(stateMachine, char);
              break;
            case 39:
              statePhoneNumberSeparator(stateMachine, char);
              break;
            case 40:
              statePhoneNumberControlChar(stateMachine, char);
              break;
            case 41:
              statePhoneNumberPoundChar(stateMachine, char);
              break;
            default:
              assertNever(stateMachine.state);
          }
        }
      }
    }
    for (var i = stateMachines.length - 1; i >= 0; i--) {
      stateMachines.forEach(function(stateMachine2) {
        return captureMatchIfValidAndRemove(stateMachine2);
      });
    }
    return matches;
    function stateNoMatch(char2) {
      if (char2 === "#") {
        stateMachines.push(createHashtagStateMachine(
          charIdx,
          28
          /* HashtagHashChar */
        ));
      } else if (char2 === "@") {
        stateMachines.push(createMentionStateMachine(
          charIdx,
          30
          /* MentionAtChar */
        ));
      } else if (char2 === "/") {
        stateMachines.push(createTldUrlStateMachine(
          charIdx,
          11
          /* ProtocolRelativeSlash1 */
        ));
      } else if (char2 === "+") {
        stateMachines.push(createPhoneNumberStateMachine(
          charIdx,
          37
          /* PhoneNumberPlus */
        ));
      } else if (char2 === "(") {
        stateMachines.push(createPhoneNumberStateMachine(
          charIdx,
          32
          /* PhoneNumberOpenParen */
        ));
      } else {
        if (digitRe.test(char2)) {
          stateMachines.push(createPhoneNumberStateMachine(
            charIdx,
            38
            /* PhoneNumberDigit */
          ));
          stateMachines.push(createIpV4UrlStateMachine(
            charIdx,
            13
            /* IpV4Digit */
          ));
        }
        if (isEmailLocalPartStartChar(char2)) {
          var startState = char2.toLowerCase() === "m" ? 15 : 22;
          stateMachines.push(createEmailStateMachine(charIdx, startState));
        }
        if (isSchemeStartChar(char2)) {
          stateMachines.push(createSchemeUrlStateMachine(
            charIdx,
            0
            /* SchemeChar */
          ));
        }
        if (alphaNumericAndMarksRe.test(char2)) {
          stateMachines.push(createTldUrlStateMachine(
            charIdx,
            5
            /* DomainLabelChar */
          ));
        }
      }
    }
    function stateSchemeChar(stateMachine2, char2) {
      if (char2 === ":") {
        stateMachine2.state = 2;
      } else if (char2 === "-") {
        stateMachine2.state = 1;
      } else if (isSchemeChar(char2)) {
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateSchemeHyphen(stateMachine2, char2) {
      if (char2 === "-") {
      } else if (char2 === "/") {
        remove(stateMachines, stateMachine2);
        stateMachines.push(createTldUrlStateMachine(
          charIdx,
          11
          /* ProtocolRelativeSlash1 */
        ));
      } else if (isSchemeChar(char2)) {
        stateMachine2.state = 0;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateSchemeColon(stateMachine2, char2) {
      if (char2 === "/") {
        stateMachine2.state = 3;
      } else if (char2 === ".") {
        remove(stateMachines, stateMachine2);
      } else if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 5;
        if (isSchemeStartChar(char2)) {
          stateMachines.push(createSchemeUrlStateMachine(
            charIdx,
            0
            /* SchemeChar */
          ));
        }
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateSchemeSlash1(stateMachine2, char2) {
      if (char2 === "/") {
        stateMachine2.state = 4;
      } else if (isPathChar(char2)) {
        stateMachine2.state = 10;
        stateMachine2.acceptStateReached = true;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateSchemeSlash2(stateMachine2, char2) {
      if (char2 === "/") {
        stateMachine2.state = 10;
      } else if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 5;
        stateMachine2.acceptStateReached = true;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateProtocolRelativeSlash1(stateMachine2, char2) {
      if (char2 === "/") {
        stateMachine2.state = 12;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateProtocolRelativeSlash2(stateMachine2, char2) {
      if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 5;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateDomainLabelChar(stateMachine2, char2) {
      if (char2 === ".") {
        stateMachine2.state = 7;
      } else if (char2 === "-") {
        stateMachine2.state = 6;
      } else if (char2 === ":") {
        stateMachine2.state = 8;
      } else if (isUrlSuffixStartChar(char2)) {
        stateMachine2.state = 10;
      } else if (isDomainLabelChar(char2)) {
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateDomainHyphen(stateMachine2, char2) {
      if (char2 === "-") {
      } else if (char2 === ".") {
        captureMatchIfValidAndRemove(stateMachine2);
      } else if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 5;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateDomainDot(stateMachine2, char2) {
      if (char2 === ".") {
        captureMatchIfValidAndRemove(stateMachine2);
      } else if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 5;
        stateMachine2.acceptStateReached = true;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateIpV4Digit(stateMachine2, char2) {
      if (char2 === ".") {
        stateMachine2.state = 14;
      } else if (char2 === ":") {
        stateMachine2.state = 8;
      } else if (digitRe.test(char2)) {
      } else if (isUrlSuffixStartChar(char2)) {
        stateMachine2.state = 10;
      } else if (alphaNumericAndMarksRe.test(char2)) {
        remove(stateMachines, stateMachine2);
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateIPv4Dot(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.octetsEncountered++;
        if (stateMachine2.octetsEncountered === 4) {
          stateMachine2.acceptStateReached = true;
        }
        stateMachine2.state = 13;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function statePortColon(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 9;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function statePortNumber(stateMachine2, char2) {
      if (digitRe.test(char2)) {
      } else if (isUrlSuffixStartChar(char2)) {
        stateMachine2.state = 10;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function statePath(stateMachine2, char2) {
      if (isPathChar(char2)) {
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateEmailMailto_M(stateMachine2, char2) {
      if (char2.toLowerCase() === "a") {
        stateMachine2.state = 16;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailto_A(stateMachine2, char2) {
      if (char2.toLowerCase() === "i") {
        stateMachine2.state = 17;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailto_I(stateMachine2, char2) {
      if (char2.toLowerCase() === "l") {
        stateMachine2.state = 18;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailto_L(stateMachine2, char2) {
      if (char2.toLowerCase() === "t") {
        stateMachine2.state = 19;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailto_T(stateMachine2, char2) {
      if (char2.toLowerCase() === "o") {
        stateMachine2.state = 20;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailto_O(stateMachine2, char2) {
      if (char2.toLowerCase() === ":") {
        stateMachine2.state = 21;
      } else {
        stateEmailLocalPart(stateMachine2, char2);
      }
    }
    function stateEmailMailtoColon(stateMachine2, char2) {
      if (isEmailLocalPartChar(char2)) {
        stateMachine2.state = 22;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateEmailLocalPart(stateMachine2, char2) {
      if (char2 === ".") {
        stateMachine2.state = 23;
      } else if (char2 === "@") {
        stateMachine2.state = 24;
      } else if (isEmailLocalPartChar(char2)) {
        stateMachine2.state = 22;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateEmailLocalPartDot(stateMachine2, char2) {
      if (char2 === ".") {
        remove(stateMachines, stateMachine2);
      } else if (char2 === "@") {
        remove(stateMachines, stateMachine2);
      } else if (isEmailLocalPartChar(char2)) {
        stateMachine2.state = 22;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateEmailAtSign(stateMachine2, char2) {
      if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 25;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateEmailDomainChar(stateMachine2, char2) {
      if (char2 === ".") {
        stateMachine2.state = 27;
      } else if (char2 === "-") {
        stateMachine2.state = 26;
      } else if (isDomainLabelChar(char2)) {
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateEmailDomainHyphen(stateMachine2, char2) {
      if (char2 === "-" || char2 === ".") {
        captureMatchIfValidAndRemove(stateMachine2);
      } else if (isDomainLabelChar(char2)) {
        stateMachine2.state = 25;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateEmailDomainDot(stateMachine2, char2) {
      if (char2 === "." || char2 === "-") {
        captureMatchIfValidAndRemove(stateMachine2);
      } else if (isDomainLabelStartChar(char2)) {
        stateMachine2.state = 25;
        stateMachine2.acceptStateReached = true;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateHashtagHashChar(stateMachine2, char2) {
      if (isHashtagTextChar(char2)) {
        stateMachine2.state = 29;
        stateMachine2.acceptStateReached = true;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateHashtagTextChar(stateMachine2, char2) {
      if (isHashtagTextChar(char2)) {
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function stateMentionAtChar(stateMachine2, char2) {
      if (isMentionTextChar(char2)) {
        stateMachine2.state = 31;
        stateMachine2.acceptStateReached = true;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function stateMentionTextChar(stateMachine2, char2) {
      if (isMentionTextChar(char2)) {
      } else if (alphaNumericAndMarksRe.test(char2)) {
        remove(stateMachines, stateMachine2);
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function statePhoneNumberPlus(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 38;
      } else {
        remove(stateMachines, stateMachine2);
        stateNoMatch(char2);
      }
    }
    function statePhoneNumberOpenParen(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 33;
      } else {
        remove(stateMachines, stateMachine2);
      }
      stateNoMatch(char2);
    }
    function statePhoneNumberAreaCodeDigit1(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 34;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function statePhoneNumberAreaCodeDigit2(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 35;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function statePhoneNumberAreaCodeDigit3(stateMachine2, char2) {
      if (char2 === ")") {
        stateMachine2.state = 36;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function statePhoneNumberCloseParen(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 38;
      } else if (isPhoneNumberSeparatorChar(char2)) {
        stateMachine2.state = 39;
      } else {
        remove(stateMachines, stateMachine2);
      }
    }
    function statePhoneNumberDigit(stateMachine2, char2) {
      stateMachine2.acceptStateReached = true;
      if (isPhoneNumberControlChar(char2)) {
        stateMachine2.state = 40;
      } else if (char2 === "#") {
        stateMachine2.state = 41;
      } else if (digitRe.test(char2)) {
      } else if (char2 === "(") {
        stateMachine2.state = 32;
      } else if (isPhoneNumberSeparatorChar(char2)) {
        stateMachine2.state = 39;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
        if (isSchemeStartChar(char2)) {
          stateMachines.push(createSchemeUrlStateMachine(
            charIdx,
            0
            /* SchemeChar */
          ));
        }
      }
    }
    function statePhoneNumberSeparator(stateMachine2, char2) {
      if (digitRe.test(char2)) {
        stateMachine2.state = 38;
      } else if (char2 === "(") {
        stateMachine2.state = 32;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
        stateNoMatch(char2);
      }
    }
    function statePhoneNumberControlChar(stateMachine2, char2) {
      if (isPhoneNumberControlChar(char2)) {
      } else if (char2 === "#") {
        stateMachine2.state = 41;
      } else if (digitRe.test(char2)) {
        stateMachine2.state = 38;
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function statePhoneNumberPoundChar(stateMachine2, char2) {
      if (isPhoneNumberControlChar(char2)) {
        stateMachine2.state = 40;
      } else if (digitRe.test(char2)) {
        remove(stateMachines, stateMachine2);
      } else {
        captureMatchIfValidAndRemove(stateMachine2);
      }
    }
    function captureMatchIfValidAndRemove(stateMachine2) {
      remove(stateMachines, stateMachine2);
      if (!stateMachine2.acceptStateReached) {
        return;
      }
      var startIdx = stateMachine2.startIdx;
      var matchedText = text.slice(stateMachine2.startIdx, charIdx);
      matchedText = excludeUnbalancedTrailingBracesAndPunctuation(matchedText);
      if (stateMachine2.type === "url") {
        var charBeforeUrlMatch = text.charAt(stateMachine2.startIdx - 1);
        if (charBeforeUrlMatch === "@") {
          return;
        }
        var urlMatchType = stateMachine2.matchType;
        if (urlMatchType === "scheme") {
          var httpSchemeMatch = httpSchemeRe.exec(matchedText);
          if (httpSchemeMatch) {
            startIdx = startIdx + httpSchemeMatch.index;
            matchedText = matchedText.slice(httpSchemeMatch.index);
          }
          if (!isValidSchemeUrl(matchedText)) {
            return;
          }
        } else if (urlMatchType === "tld") {
          if (!isValidTldMatch(matchedText)) {
            return;
          }
        } else if (urlMatchType === "ipV4") {
          if (!isValidIpV4Address(matchedText)) {
            return;
          }
        } else {
          assertNever(urlMatchType);
        }
        matches.push(new UrlMatch({
          tagBuilder,
          matchedText,
          offset: startIdx,
          urlMatchType,
          url: matchedText,
          protocolRelativeMatch: matchedText.slice(0, 2) === "//",
          // TODO: Do these settings need to be passed to the match,
          // or should we handle them here in UrlMatcher?
          stripPrefix,
          stripTrailingSlash,
          decodePercentEncoding
        }));
      } else if (stateMachine2.type === "email") {
        if (isValidEmail(matchedText)) {
          matches.push(new EmailMatch({
            tagBuilder,
            matchedText,
            offset: startIdx,
            email: matchedText.replace(mailtoSchemePrefixRe, "")
          }));
        }
      } else if (stateMachine2.type === "hashtag") {
        if (isValidHashtag(matchedText)) {
          matches.push(new HashtagMatch({
            tagBuilder,
            matchedText,
            offset: startIdx,
            serviceName: hashtagServiceName,
            hashtag: matchedText.slice(1)
          }));
        }
      } else if (stateMachine2.type === "mention") {
        if (isValidMention(matchedText, mentionServiceName)) {
          matches.push(new MentionMatch({
            tagBuilder,
            matchedText,
            offset: startIdx,
            serviceName: mentionServiceName,
            mention: matchedText.slice(1)
            // strip off the '@' character at the beginning
          }));
        }
      } else if (stateMachine2.type === "phone") {
        matchedText = matchedText.replace(/ +$/g, "");
        if (isValidPhoneNumber(matchedText)) {
          var cleanNumber = matchedText.replace(/[^0-9,;#]/g, "");
          matches.push(new PhoneMatch({
            tagBuilder,
            matchedText,
            offset: startIdx,
            number: cleanNumber,
            plusSign: matchedText.charAt(0) === "+"
          }));
        }
      } else {
        assertNever(stateMachine2);
      }
    }
  }
  var openBraceRe = /[\(\{\[]/;
  var closeBraceRe = /[\)\}\]]/;
  var oppositeBrace = {
    ")": "(",
    "}": "{",
    "]": "["
  };
  function excludeUnbalancedTrailingBracesAndPunctuation(matchedText) {
    var braceCounts = {
      "(": 0,
      "{": 0,
      "[": 0
    };
    for (var i = 0; i < matchedText.length; i++) {
      var char_1 = matchedText.charAt(i);
      if (openBraceRe.test(char_1)) {
        braceCounts[char_1]++;
      } else if (closeBraceRe.test(char_1)) {
        braceCounts[oppositeBrace[char_1]]--;
      }
    }
    var endIdx = matchedText.length - 1;
    var char;
    while (endIdx >= 0) {
      char = matchedText.charAt(endIdx);
      if (closeBraceRe.test(char)) {
        var oppositeBraceChar = oppositeBrace[char];
        if (braceCounts[oppositeBraceChar] < 0) {
          braceCounts[oppositeBraceChar]++;
          endIdx--;
        } else {
          break;
        }
      } else if (urlSuffixedCharsNotAllowedAtEndRe.test(char)) {
        endIdx--;
      } else {
        break;
      }
    }
    return matchedText.slice(0, endIdx + 1);
  }
  function createSchemeUrlStateMachine(startIdx, state) {
    return {
      type: "url",
      startIdx,
      state,
      acceptStateReached: false,
      matchType: "scheme"
    };
  }
  function createTldUrlStateMachine(startIdx, state) {
    return {
      type: "url",
      startIdx,
      state,
      acceptStateReached: false,
      matchType: "tld"
    };
  }
  function createIpV4UrlStateMachine(startIdx, state) {
    return {
      type: "url",
      startIdx,
      state,
      acceptStateReached: false,
      matchType: "ipV4",
      octetsEncountered: 1
      // starts at 1 because we create this machine when encountering the first octet
    };
  }
  function createEmailStateMachine(startIdx, state) {
    return {
      type: "email",
      startIdx,
      state,
      acceptStateReached: false
    };
  }
  function createHashtagStateMachine(startIdx, state) {
    return {
      type: "hashtag",
      startIdx,
      state,
      acceptStateReached: false
    };
  }
  function createMentionStateMachine(startIdx, state) {
    return {
      type: "mention",
      startIdx,
      state,
      acceptStateReached: false
    };
  }
  function createPhoneNumberStateMachine(startIdx, state) {
    return {
      type: "phone",
      startIdx,
      state,
      acceptStateReached: false
    };
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/htmlParser/parse-html.js
  function parseHtml(html, _a) {
    var onOpenTag = _a.onOpenTag, onCloseTag = _a.onCloseTag, onText = _a.onText, onComment = _a.onComment, onDoctype = _a.onDoctype;
    var noCurrentTag = new CurrentTag();
    var charIdx = 0, len = html.length, state = 0, currentDataIdx = 0, currentTag = noCurrentTag;
    while (charIdx < len) {
      var char = html.charAt(charIdx);
      switch (state) {
        case 0:
          stateData(char);
          break;
        case 1:
          stateTagOpen(char);
          break;
        case 2:
          stateEndTagOpen(char);
          break;
        case 3:
          stateTagName(char);
          break;
        case 4:
          stateBeforeAttributeName(char);
          break;
        case 5:
          stateAttributeName(char);
          break;
        case 6:
          stateAfterAttributeName(char);
          break;
        case 7:
          stateBeforeAttributeValue(char);
          break;
        case 8:
          stateAttributeValueDoubleQuoted(char);
          break;
        case 9:
          stateAttributeValueSingleQuoted(char);
          break;
        case 10:
          stateAttributeValueUnquoted(char);
          break;
        case 11:
          stateAfterAttributeValueQuoted(char);
          break;
        case 12:
          stateSelfClosingStartTag(char);
          break;
        case 13:
          stateMarkupDeclarationOpen(char);
          break;
        case 14:
          stateCommentStart(char);
          break;
        case 15:
          stateCommentStartDash(char);
          break;
        case 16:
          stateComment(char);
          break;
        case 17:
          stateCommentEndDash(char);
          break;
        case 18:
          stateCommentEnd(char);
          break;
        case 19:
          stateCommentEndBang(char);
          break;
        case 20:
          stateDoctype(char);
          break;
        default:
          assertNever(state);
      }
      charIdx++;
    }
    if (currentDataIdx < charIdx) {
      emitText();
    }
    function stateData(char2) {
      if (char2 === "<") {
        startNewTag();
      }
    }
    function stateTagOpen(char2) {
      if (char2 === "!") {
        state = 13;
      } else if (char2 === "/") {
        state = 2;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isClosing: true }));
      } else if (char2 === "<") {
        startNewTag();
      } else if (letterRe.test(char2)) {
        state = 3;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isOpening: true }));
      } else {
        state = 0;
        currentTag = noCurrentTag;
      }
    }
    function stateTagName(char2) {
      if (whitespaceRe.test(char2)) {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        state = 4;
      } else if (char2 === "<") {
        startNewTag();
      } else if (char2 === "/") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        state = 12;
      } else if (char2 === ">") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { name: captureTagName() }));
        emitTagAndPreviousTextNode();
      } else if (!letterRe.test(char2) && !digitRe.test(char2) && char2 !== ":") {
        resetToDataState();
      } else {
      }
    }
    function stateEndTagOpen(char2) {
      if (char2 === ">") {
        resetToDataState();
      } else if (letterRe.test(char2)) {
        state = 3;
      } else {
        resetToDataState();
      }
    }
    function stateBeforeAttributeName(char2) {
      if (whitespaceRe.test(char2)) {
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (char2 === "=" || quoteRe.test(char2) || controlCharsRe.test(char2)) {
        resetToDataState();
      } else {
        state = 5;
      }
    }
    function stateAttributeName(char2) {
      if (whitespaceRe.test(char2)) {
        state = 6;
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === "=") {
        state = 7;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (quoteRe.test(char2)) {
        resetToDataState();
      } else {
      }
    }
    function stateAfterAttributeName(char2) {
      if (whitespaceRe.test(char2)) {
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === "=") {
        state = 7;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else if (quoteRe.test(char2)) {
        resetToDataState();
      } else {
        state = 5;
      }
    }
    function stateBeforeAttributeValue(char2) {
      if (whitespaceRe.test(char2)) {
      } else if (char2 === '"') {
        state = 8;
      } else if (char2 === "'") {
        state = 9;
      } else if (/[>=`]/.test(char2)) {
        resetToDataState();
      } else if (char2 === "<") {
        startNewTag();
      } else {
        state = 10;
      }
    }
    function stateAttributeValueDoubleQuoted(char2) {
      if (char2 === '"') {
        state = 11;
      } else {
      }
    }
    function stateAttributeValueSingleQuoted(char2) {
      if (char2 === "'") {
        state = 11;
      } else {
      }
    }
    function stateAttributeValueUnquoted(char2) {
      if (whitespaceRe.test(char2)) {
        state = 4;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else {
      }
    }
    function stateAfterAttributeValueQuoted(char2) {
      if (whitespaceRe.test(char2)) {
        state = 4;
      } else if (char2 === "/") {
        state = 12;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else {
        state = 4;
        reconsumeCurrentCharacter();
      }
    }
    function stateSelfClosingStartTag(char2) {
      if (char2 === ">") {
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { isClosing: true }));
        emitTagAndPreviousTextNode();
      } else {
        state = 4;
      }
    }
    function stateMarkupDeclarationOpen(char2) {
      if (html.substr(charIdx, 2) === "--") {
        charIdx += 2;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { type: "comment" }));
        state = 14;
      } else if (html.substr(charIdx, 7).toUpperCase() === "DOCTYPE") {
        charIdx += 7;
        currentTag = new CurrentTag(__assign(__assign({}, currentTag), { type: "doctype" }));
        state = 20;
      } else {
        resetToDataState();
      }
    }
    function stateCommentStart(char2) {
      if (char2 === "-") {
        state = 15;
      } else if (char2 === ">") {
        resetToDataState();
      } else {
        state = 16;
      }
    }
    function stateCommentStartDash(char2) {
      if (char2 === "-") {
        state = 18;
      } else if (char2 === ">") {
        resetToDataState();
      } else {
        state = 16;
      }
    }
    function stateComment(char2) {
      if (char2 === "-") {
        state = 17;
      } else {
      }
    }
    function stateCommentEndDash(char2) {
      if (char2 === "-") {
        state = 18;
      } else {
        state = 16;
      }
    }
    function stateCommentEnd(char2) {
      if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "!") {
        state = 19;
      } else if (char2 === "-") {
      } else {
        state = 16;
      }
    }
    function stateCommentEndBang(char2) {
      if (char2 === "-") {
        state = 17;
      } else if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else {
        state = 16;
      }
    }
    function stateDoctype(char2) {
      if (char2 === ">") {
        emitTagAndPreviousTextNode();
      } else if (char2 === "<") {
        startNewTag();
      } else {
      }
    }
    function resetToDataState() {
      state = 0;
      currentTag = noCurrentTag;
    }
    function startNewTag() {
      state = 1;
      currentTag = new CurrentTag({ idx: charIdx });
    }
    function emitTagAndPreviousTextNode() {
      var textBeforeTag = html.slice(currentDataIdx, currentTag.idx);
      if (textBeforeTag) {
        onText(textBeforeTag, currentDataIdx);
      }
      if (currentTag.type === "comment") {
        onComment(currentTag.idx);
      } else if (currentTag.type === "doctype") {
        onDoctype(currentTag.idx);
      } else {
        if (currentTag.isOpening) {
          onOpenTag(currentTag.name, currentTag.idx);
        }
        if (currentTag.isClosing) {
          onCloseTag(currentTag.name, currentTag.idx);
        }
      }
      resetToDataState();
      currentDataIdx = charIdx + 1;
    }
    function emitText() {
      var text = html.slice(currentDataIdx, charIdx);
      onText(text, currentDataIdx);
      currentDataIdx = charIdx + 1;
    }
    function captureTagName() {
      var startIdx = currentTag.idx + (currentTag.isClosing ? 2 : 1);
      return html.slice(startIdx, charIdx).toLowerCase();
    }
    function reconsumeCurrentCharacter() {
      charIdx--;
    }
  }
  var CurrentTag = (
    /** @class */
    function() {
      function CurrentTag2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.idx = cfg.idx !== void 0 ? cfg.idx : -1;
        this.type = cfg.type || "tag";
        this.name = cfg.name || "";
        this.isOpening = !!cfg.isOpening;
        this.isClosing = !!cfg.isClosing;
      }
      return CurrentTag2;
    }()
  );

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/autolinker.js
  var Autolinker = (
    /** @class */
    function() {
      function Autolinker2(cfg) {
        if (cfg === void 0) {
          cfg = {};
        }
        this.version = Autolinker2.version;
        this.urls = {};
        this.email = true;
        this.phone = true;
        this.hashtag = false;
        this.mention = false;
        this.newWindow = true;
        this.stripPrefix = {
          scheme: true,
          www: true
        };
        this.stripTrailingSlash = true;
        this.decodePercentEncoding = true;
        this.truncate = {
          length: 0,
          location: "end"
        };
        this.className = "";
        this.replaceFn = null;
        this.context = void 0;
        this.sanitizeHtml = false;
        this.tagBuilder = null;
        this.urls = normalizeUrlsCfg(cfg.urls);
        this.email = isBoolean(cfg.email) ? cfg.email : this.email;
        this.phone = isBoolean(cfg.phone) ? cfg.phone : this.phone;
        this.hashtag = cfg.hashtag || this.hashtag;
        this.mention = cfg.mention || this.mention;
        this.newWindow = isBoolean(cfg.newWindow) ? cfg.newWindow : this.newWindow;
        this.stripPrefix = normalizeStripPrefixCfg(cfg.stripPrefix);
        this.stripTrailingSlash = isBoolean(cfg.stripTrailingSlash) ? cfg.stripTrailingSlash : this.stripTrailingSlash;
        this.decodePercentEncoding = isBoolean(cfg.decodePercentEncoding) ? cfg.decodePercentEncoding : this.decodePercentEncoding;
        this.sanitizeHtml = cfg.sanitizeHtml || false;
        var mention = this.mention;
        if (mention !== false && mentionServices.indexOf(mention) === -1) {
          throw new Error("invalid `mention` cfg '".concat(mention, "' - see docs"));
        }
        var hashtag = this.hashtag;
        if (hashtag !== false && hashtagServices.indexOf(hashtag) === -1) {
          throw new Error("invalid `hashtag` cfg '".concat(hashtag, "' - see docs"));
        }
        this.truncate = normalizeTruncateCfg(cfg.truncate);
        this.className = cfg.className || this.className;
        this.replaceFn = cfg.replaceFn || this.replaceFn;
        this.context = cfg.context || this;
      }
      Autolinker2.link = function(textOrHtml, options) {
        var autolinker = new Autolinker2(options);
        return autolinker.link(textOrHtml);
      };
      Autolinker2.parse = function(textOrHtml, options) {
        var autolinker = new Autolinker2(options);
        return autolinker.parse(textOrHtml);
      };
      Autolinker2.prototype.parse = function(textOrHtml) {
        var _this = this;
        var skipTagNames = ["a", "style", "script"], skipTagsStackCount = 0, matches = [];
        parseHtml(textOrHtml, {
          onOpenTag: function(tagName) {
            if (skipTagNames.indexOf(tagName) >= 0) {
              skipTagsStackCount++;
            }
          },
          onText: function(text, offset) {
            if (skipTagsStackCount === 0) {
              var htmlCharacterEntitiesRegex = /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi;
              var textSplit = text.split(htmlCharacterEntitiesRegex);
              var currentOffset_1 = offset;
              textSplit.forEach(function(splitText, i) {
                if (i % 2 === 0) {
                  var textNodeMatches = _this.parseText(splitText, currentOffset_1);
                  matches.push.apply(matches, textNodeMatches);
                }
                currentOffset_1 += splitText.length;
              });
            }
          },
          onCloseTag: function(tagName) {
            if (skipTagNames.indexOf(tagName) >= 0) {
              skipTagsStackCount = Math.max(skipTagsStackCount - 1, 0);
            }
          },
          onComment: function(_offset) {
          },
          onDoctype: function(_offset) {
          }
          // no need to process doctype nodes
        });
        matches = this.compactMatches(matches);
        matches = this.removeUnwantedMatches(matches);
        return matches;
      };
      Autolinker2.prototype.compactMatches = function(matches) {
        matches.sort(function(a, b) {
          return a.getOffset() - b.getOffset();
        });
        var i = 0;
        while (i < matches.length - 1) {
          var match = matches[i], offset = match.getOffset(), matchedTextLength = match.getMatchedText().length, endIdx = offset + matchedTextLength;
          if (i + 1 < matches.length) {
            if (matches[i + 1].getOffset() === offset) {
              var removeIdx = matches[i + 1].getMatchedText().length > matchedTextLength ? i : i + 1;
              matches.splice(removeIdx, 1);
              continue;
            }
            if (matches[i + 1].getOffset() < endIdx) {
              matches.splice(i + 1, 1);
              continue;
            }
          }
          i++;
        }
        return matches;
      };
      Autolinker2.prototype.removeUnwantedMatches = function(matches) {
        if (!this.hashtag)
          removeWithPredicate(matches, function(match) {
            return match.getType() === "hashtag";
          });
        if (!this.email)
          removeWithPredicate(matches, function(match) {
            return match.getType() === "email";
          });
        if (!this.phone)
          removeWithPredicate(matches, function(match) {
            return match.getType() === "phone";
          });
        if (!this.mention)
          removeWithPredicate(matches, function(match) {
            return match.getType() === "mention";
          });
        if (!this.urls.schemeMatches) {
          removeWithPredicate(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "scheme";
          });
        }
        if (!this.urls.tldMatches) {
          removeWithPredicate(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "tld";
          });
        }
        if (!this.urls.ipV4Matches) {
          removeWithPredicate(matches, function(m) {
            return m.getType() === "url" && m.getUrlMatchType() === "ipV4";
          });
        }
        return matches;
      };
      Autolinker2.prototype.parseText = function(text, offset) {
        if (offset === void 0) {
          offset = 0;
        }
        offset = offset || 0;
        var matches = parseMatches(text, {
          tagBuilder: this.getTagBuilder(),
          stripPrefix: this.stripPrefix,
          stripTrailingSlash: this.stripTrailingSlash,
          decodePercentEncoding: this.decodePercentEncoding,
          hashtagServiceName: this.hashtag,
          mentionServiceName: this.mention || "twitter"
        });
        for (var i = 0, numTextMatches = matches.length; i < numTextMatches; i++) {
          matches[i].setOffset(offset + matches[i].getOffset());
        }
        return matches;
      };
      Autolinker2.prototype.link = function(textOrHtml) {
        if (!textOrHtml) {
          return "";
        }
        if (this.sanitizeHtml) {
          textOrHtml = textOrHtml.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        var matches = this.parse(textOrHtml), newHtml = [], lastIndex = 0;
        for (var i = 0, len = matches.length; i < len; i++) {
          var match = matches[i];
          newHtml.push(textOrHtml.substring(lastIndex, match.getOffset()));
          newHtml.push(this.createMatchReturnVal(match));
          lastIndex = match.getOffset() + match.getMatchedText().length;
        }
        newHtml.push(textOrHtml.substring(lastIndex));
        return newHtml.join("");
      };
      Autolinker2.prototype.createMatchReturnVal = function(match) {
        var replaceFnResult;
        if (this.replaceFn) {
          replaceFnResult = this.replaceFn.call(this.context, match);
        }
        if (typeof replaceFnResult === "string") {
          return replaceFnResult;
        } else if (replaceFnResult === false) {
          return match.getMatchedText();
        } else if (replaceFnResult instanceof HtmlTag) {
          return replaceFnResult.toAnchorString();
        } else {
          var anchorTag = match.buildTag();
          return anchorTag.toAnchorString();
        }
      };
      Autolinker2.prototype.getTagBuilder = function() {
        var tagBuilder = this.tagBuilder;
        if (!tagBuilder) {
          tagBuilder = this.tagBuilder = new AnchorTagBuilder({
            newWindow: this.newWindow,
            truncate: this.truncate,
            className: this.className
          });
        }
        return tagBuilder;
      };
      Autolinker2.version = version;
      return Autolinker2;
    }()
  );
  var autolinker_default = Autolinker;
  function normalizeUrlsCfg(urls) {
    if (urls == null)
      urls = true;
    if (isBoolean(urls)) {
      return { schemeMatches: urls, tldMatches: urls, ipV4Matches: urls };
    } else {
      return {
        schemeMatches: isBoolean(urls.schemeMatches) ? urls.schemeMatches : true,
        tldMatches: isBoolean(urls.tldMatches) ? urls.tldMatches : true,
        ipV4Matches: isBoolean(urls.ipV4Matches) ? urls.ipV4Matches : true
      };
    }
  }
  function normalizeStripPrefixCfg(stripPrefix) {
    if (stripPrefix == null)
      stripPrefix = true;
    if (isBoolean(stripPrefix)) {
      return { scheme: stripPrefix, www: stripPrefix };
    } else {
      return {
        scheme: isBoolean(stripPrefix.scheme) ? stripPrefix.scheme : true,
        www: isBoolean(stripPrefix.www) ? stripPrefix.www : true
      };
    }
  }
  function normalizeTruncateCfg(truncate) {
    if (typeof truncate === "number") {
      return { length: truncate, location: "end" };
    } else {
      return defaults(truncate || {}, {
        length: Number.POSITIVE_INFINITY,
        location: "end"
      });
    }
  }

  // node_modules/.pnpm/autolinker@4.0.0/node_modules/autolinker/dist/es2015/index.js
  var es2015_default = autolinker_default;

  // messageDisplay/message-content-script.js
  document.body.innerHTML = es2015_default.link(document.body.innerHTML);
})();
