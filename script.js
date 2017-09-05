function exchange(){
  var _EsperantoCharacter =
  ["\\!", "\\?", "_eno","￥","\\\\",
   "c\\^", "g\\^", "h\\^", "j\\^", "s\\^", "u\\^",
   "ĉ", "ĝ", "ĥ", "ĵ", "ŝ", "ŭ",
   "cx", "gx", "hx", "jx", "sx", "ux",
   "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
   "C\\^", "G\\^", "H\\^", "J\\^", "S\\^", "U\\^",
   "Ĉ", "Ĝ", "Ĥ", "Ĵ", "Ŝ", "Ŭ",
   "Cx", "Gx", "Hx", "Jx", "Sx", "Ux",
   "A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

 var _JuliamoCharacter =
 ["㍉", "㍑", "㍊","㍊","㍊",
  "㍍", "㌔", "㌃", "㌍", "㌫", "㌦",
  "㍍", "㌔", "㌃", "㌍", "㌫", "㌦",
  "㍍", "㌔", "㌃", "㌍", "㌫", "㌦",
  "ａ", "ｂ", "ｃ", "ｄ", "ｅ", "ｆ", "ｇ", "ｈ", "ｉ", "ｊ", "ｋ", "ｌ", "ｍ", "ｎ", "ｏ", "ｐ", "ｑ", "ｒ", "ｓ", "ｔ", "ｕ", "ｖ", "ｗ", "ｘ", "ｙ", "ｚ",
  "㌢", "㌘", "㌶", "㌻", "㍗", "㌧",
  "㌢", "㌘", "㌶", "㌻", "㍗", "㌧",
  "㌢", "㌘", "㌶", "㌻", "㍗", "㌧",
  "Ａ", "Ｂ", "Ｃ", "Ｄ", "Ｅ", "Ｆ", "Ｇ", "Ｈ", "Ｉ", "Ｊ", "Ｋ", "Ｌ", "Ｍ", "Ｎ", "Ｏ", "Ｐ", "Ｑ", "Ｒ", "Ｓ", "Ｔ", "Ｕ", "Ｖ", "Ｗ", "Ｘ", "Ｙ", "Ｚ"];

  var _Esperanto = document.fm1.Esperanto;
  var _Juliamo = document.fm1.Juliamo;

  var _InputText = _Esperanto.value;

  for(var i = 0; i < _EsperantoCharacter.length; i++){
    var regExp = new RegExp(_EsperantoCharacter[i], "g");
    _InputText = _InputText.replace(regExp, _JuliamoCharacter[i]);
  }

  _Juliamo.value =_InputText;
}
