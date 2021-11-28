//"search" in different languages.
const languages = {
  "en": "search",
  "af": "Soek",
  "sq": "kërkimi",
  "am": "ፍለጋ",
  "hye": "որոնում",
  "az": "Suche",
  "eu": "bilatu",
  "uk": "пошук",
  "bn": "অনুসন্ধান",
  "my": "ရှာဖွေ",
  "hr": "traži",
  "bg": "Търсене",
  "ny": "fufuzani",
  "zh": "搜索",
  "da": "Søg",
  "de": "Suche",
  "eo": "serĉi",
  "et": "otsing",
  "tl": "paghahanap",
  "fi": "Hae",
  "fr": "chercher",
  "fy": "sykje",
  "es": "buscar",
  "ka": "ძებნა",
  "el": "Αναζήτηση",
  "gu": "શોધ",
  "ha": "bincika",
  "he": "לחפש",
  "hi": "खोज",
  "ig": "chọọ",
  "id": "Cari",
  "ga": "cuardach",
  "ja": "探す",
  "yi": "זוכן",
  "kn": "ಹುಡುಕಿ",
  "kk": "іздеу",
  "it": "cerca",
  "km": "ស្វែងរក",
  "rw": "gushakisha",
  "ky": "издөө",
  "kw": "검색",
  "hr": "traži",
  "lo": "ຊອກຫາ",
  "la": "Quaerere",
  "lv": "Meklēt",
  "lt": "Paieška",
  "lb": "sichen",
  "mg": "karohy",
  "ml": "തിരയുക",
  "id": "cari",
  "mt": "tfittxija",
  "mi": "rapu",
  "mr": "शोध",
  "mk": "пребарување",
  "mn": "хайх",
  "hi": "खोज",
  "nl": "zoeken",
  "nb": "Søk",
  "pl": "Szukaj",
  "pt": "procurar",
  "pa": "ਖੋਜ",
  "ro": "căutare",
  "ru": "поиск",
  "ja": "Sök",
  "sr": "Претрага",
  "st": "batla",
  "sn": "tsvaga",
  "sd": "ڳولا",
  "si": "සෙවීම",
  "sk": "Vyhľadávanie",
  "sl": "Iskanje",
  "su": "milarian",
  "tg": "ҷустуҷӯ",
  "ta": "தேடல்",
  "tt": "эзләү",
  "te": "వెతకండి",
  "th": "ค้นหา",
  "ce": "Vyhledávání",
  "tr": "arama",
  "tk": "gözlemek",
  "ug": "ئىزدەش",
  "hu": "keresés",
  "ur": "تلاش",
  "uz": "qidirmoq",
  "vi": "Tìm kiếm",
  "cy": "chwilio",
};
//1.1 Main functions: the function analyzes the website URL according to some parameters and then makes the decision which search function to use.
function getURL() {
  var getURL = window.location.href;
  var host = window.location.hostname;
  if (getURL.toUpperCase().includes("GOOGLE") && getURL.toUpperCase().includes("SEARCH")) {
    if (!host.toUpperCase().includes("WWW.") || !host.toUpperCase().includes("GOOGLE")) {
      if (subdomain() == true) {
        isSub();
      } else {
        noSearchBar();
      }
    } else {
      if (document.querySelectorAll("*[jsname=RNNXgb]").length > 0) {
        document.querySelectorAll("*[jsname=RNNXgb]")[0].style.display = "none";
      }
    }
  } else if (getURL.toUpperCase().includes("APPLE") && getURL.toUpperCase().includes("SEARCH") == false) {
    document.querySelectorAll("#ac-gn-link-search")[0].style.display = "none";
  } else if (getURL.toUpperCase().includes("INSTAGRAM")) {
    document.getElementsByClassName('_0aCwM')[0].style.display = "none";
  } else if (getURL.toUpperCase().includes("EBAY") && getURL.toUpperCase().includes("KLEIN") == false) {
    document.getElementsByClassName('gh-td-s')[0].style.display = "none";
  } else if (getURL.toUpperCase().includes("AMAZON") && getURL.toUpperCase().includes("S?K")) {
    document.getElementById('nav-search').style.display = "none";
  } else if (getURL.toUpperCase().includes("GOOGLE") && getURL.toUpperCase().includes("EARTH")) {
    setTimeout(function() {
      document.getElementById('search').style.display = "none";
    }, 4000);
  } else {
    if (subdomain() == true && getURL.toUpperCase().includes("GOOGLE") == false && getURL.toUpperCase().includes("G2A") == false) {
      isSub();
    } else {
      noSearchBar();
    }
  }
}
//1.2 uses Window.location.pathname to check whether the website is a homepage or not.
function subdomain() {
  var pathname = window.location.pathname;
  if (pathname == "/") {
    return false
  } else if (pathname.toUpperCase().includes(getLocal().toUpperCase()) && pathname.split("/").length - 1 <= 2) {
    return false
  } else if (pathname.toUpperCase().includes(getLocal().toUpperCase()) && pathname.split("/").length - 1 >= 2) {
    return true
  } else if (pathname != "/" && pathname.toUpperCase().includes(getLocal().toUpperCase()) == false) {
    return true
  }
}
//1.2.1 Main function to search the website for a search bar, through the attributes of the HTML tags after the word "search" and the translated word "search" depending on the website language.
function noSearchBar() {
  var z = 0;
  getTemplate();
  getSVG();
  var nodes = [];
  values = [];
  var len = languages.length;
  var dom = document.querySelectorAll('*');
  var xx = document.querySelectorAll('*').length;
  for (var j = 0; j < xx; j++) {
    atts = dom[j].attributes;
    for (var att, i = 0; i < atts.length; i++) {
      att = atts[i];
      nodes.push(att.nodeName);
      values.push(att.nodeValue);
      if (dom[j].nodeName !== "BODY" && dom[j].nodeName !== "HTML") {
        if (att.nodeName.toUpperCase().includes("SEARCH") && att.nodeName.toUpperCase().includes("WRAPPER") == false && att.nodeName.toUpperCase().includes("RESULTS") == false) {
          dom[j].style.display = "none";
          if (att.nodeName.toUpperCase().includes("OMNIBOX")) {
            dom[j].style.display = "none";
          }
        } else if (att.nodeValue.toUpperCase().includes("SEARCH") && att.nodeValue.toUpperCase().includes("RESULT") == false && att.nodeValue.toUpperCase().includes("PRODUCT") == false) {
          dom[j].style.display = "none";
        } else if (att.nodeValue.toUpperCase().includes(getLocal().toUpperCase())) {
          dom[j].style.display = "none";
        }
      }
    }
  }
}
//1.2.2 If the page is not a homepage, the website is searched in a modified form, as a homepage.
function isSub() {
  var z = 0;
  getTemplate();
  getSVG();
  var nodes = [];
  values = [];
  var len = languages.length;
  var dom = document.querySelectorAll('*');
  var xx = document.querySelectorAll('*').length;
  for (var j = 0; j < xx; j++) {
    atts = dom[j].attributes;
    for (var att, i = 0; i < atts.length; i++) {
      att = atts[i];
      nodes.push(att.nodeName);
      values.push(att.nodeValue);
      if (dom[j].nodeName !== "BODY" && dom[j].nodeName !== "HTML" && dom[j].nodeName !== "IMG") {
        if (att.nodeName.toUpperCase().includes("SEARCH") && att.nodeName.toUpperCase().includes("WRAPPER") == false && att.nodeName.toUpperCase().includes("RESULTS") == false && att.nodeName.toUpperCase().includes("IMAGE") == false && att.nodeName.toUpperCase().includes("FRAGMENT") == false && att.nodeName.toUpperCase().includes("PRODUCT") == false) {
          if (dom[j].nodeName === "DIV") {
            checkchildnode(j);
          } else if (dom[j].nodeName !== "DIV") {
            dom[j].style.display = "none";
          }
        } else if (att.nodeValue.toUpperCase().includes("SEARCH") && att.nodeValue.toUpperCase().includes("RESULT") == false && att.nodeValue.toUpperCase().includes("PRODUCT") == false) {
          if (dom[j].nodeName === "DIV") {
            checkchildnode(j);
          } else if (dom[j].nodeName !== "DIV") {
            dom[j].style.display = "none";
          }
        } else if (att.nodeValue.toUpperCase().includes(getLocal().toUpperCase())) {
          if (dom[j].nodeName === "DIV") {
            checkchildnode(j);
          } else if (dom[j].nodeName !== "DIV") {
            dom[j].style.display = "none";
          }
        }
      }
    }
  }
}
//1.2.2.1 checks whether a div containing the word "search" has an input as a child tag.
function checkchildnode(j) {
  var div = document.querySelectorAll("*")[j];
  var length = div.querySelectorAll("*").length;
  var child = div.querySelectorAll("*");
  var i = 0;
  while (i < length) {
    if (child[i].tagName == "INPUT") {
      div.style.display = "none";
    } else if (child[i].tagName == "A") {}
    i++;
  }
}
//1.3 searches the website for SVGs, due to performance only the first forty svg.
function getSVG() {
  var nn = 0;
  var length = document.getElementsByTagName('svg').length;
  for (var i = 0; i < length; i++) {
    if (nn < 40) {
      svgbody(i)
      nn++;
    }
  }
}
//1.4 converts the svg body into an image which is in a canvas, prepares the template matchching.
function svgbody(int_j) {
  const canvas = document.getElementById('createSVG');
  var x = canvas.cloneNode();
  x.id = `${int_j}`;
  document.body.appendChild(x);
  const ctx = x.getContext('2d');
  var svg = document.querySelectorAll('svg')[int_j];
  let img = new Image();
  let b64 = "data:image/svg+xml;base64,";
  let xml = new XMLSerializer().serializeToString(svg);
  b64 += btoa(unescape(encodeURIComponent(xml)));
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
  };
  img.src = b64;
  var zzz = int_j;
  setTimeout(function() {
    templateMatching(zzz);
  }, 3000);
}
//1.5 grap the template image and put it in a canvas.
function getTemplate() {
  var src_template = chrome.extension.getURL('Download.png');
  var creation2 = document.createElement("canvas");
  creation2.id = "template";
  creation2.style.display = "none";
  document.body.appendChild(creation2);
  var context2 = document.querySelector("#template").getContext("2d");
  var cnv = document.querySelector("#template");
  base_image = new Image();
  base_image.src = src_template;
  base_image.onload = function() {
    cnv.width = base_image.width;
    cnv.height = base_image.height;
    context2.drawImage(base_image, 0, 0);
  }
}
//1.6 When the website is loaded, a "Reference_Canvas" is created which can then be used by other functions and calls the main functions.
window.onload = function() {
  var creation = document.createElement("canvas");
  creation.id = "createSVG";
  creation.style.display = "none";
  document.body.appendChild(creation);
  getURL();
  setTimeout(getURL, 3000);
}
//1.7 The function grabs the SVG canvases and compares them with a template; if there is a certain truth value, it is deleted.
function templateMatching(j_X) {
  let src = cv.imread(`${j_X}`);
  var template = cv.imread("template");
  var dst = new cv.Mat();
  var mask = new cv.Mat();
  var res = cv.matchTemplate(template, src, dst, cv.TM_CCOEFF, mask);
  var result = cv.minMaxLoc(dst, mask);
  var maxPoint = result.maxLoc;
  if (result.maxVal == 2933705.25 || result.maxVal == 3094075.25) {
    document.querySelectorAll("svg")[j_X].style.display = "none";
  }
}
//1.8 reads the Navigator Language and outputs the correct translation. If no language is defined, output the English translation.
function getLocal() {
  if (navigator.language != undefined) {
    const obj = JSON.parse(JSON.stringify(languages));
    var x = navigator.language.slice(0, 2);
    return obj[x];
  } else {
    return "search";
  }
}
