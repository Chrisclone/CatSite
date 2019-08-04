var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cat = function (_React$Component) {
    _inherits(Cat, _React$Component);

    function Cat(props) {
        _classCallCheck(this, Cat);

        var _this = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, props));

        _this.state = { cat: null };
        return _this;
    }

    _createClass(Cat, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var randomButton = document.getElementById("big");
            var srandomButton = document.getElementById("small");

            randomButton.addEventListener("click", function () {
                randomButton.style.display = "none";
                srandomButton.style.display = "block";
            });
        }
    }, {
        key: "rcatget",
        value: function rcatget() {
            var _this2 = this;

            var req = new XMLHttpRequest();

            req.onreadystatechange = function () {
                if (req.readyState == 4 && req.status == 200) {

                    console.log(req.responseText);
                    _this2.response = req.responseText;
                }
            };

            req.open("GET", "https://api.thecatapi.com/v1/images/search?size=full", true);

            req.send();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.cat
            );
        }
    }]);

    return Cat;
}(React.Component);

ReactDOM.render(React.createElement(Cat, null), document.getElementById("carea"));