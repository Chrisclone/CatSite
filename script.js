var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var search = document.getElementsByClassName("sbutton")[0];

search.addEventListener("click", function () {
    var text = document.getElementById("query");
    console.log(text.value);
    text.value = "";
});

function catGet() {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            var cat = req.responseText;
        }
    };

    req.open("GET", "https://api.thecatapi.com/v1/images/search?size=full", true);
    req.send();
}

var Cat = function (_React$Component) {
    _inherits(Cat, _React$Component);

    function Cat() {
        _classCallCheck(this, Cat);

        return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).apply(this, arguments));
    }

    _createClass(Cat, [{
        key: "render",
        value: function render() {
            var a = new catGet();
            return a.cat;
        }
    }]);

    return Cat;
}(React.Component);

ReactDOM.render(React.createElement(Cat, null), document.getElementById("carea"));