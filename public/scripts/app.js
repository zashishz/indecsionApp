"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.pickOptionHandler = _this.pickOptionHandler.bind(_this);
        _this.deleteOptionHandler = _this.deleteOptionHandler.bind(_this);
        _this.addOptionHandler = _this.addOptionHandler.bind(_this);

        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "addOptionHandler",
        value: function addOptionHandler(option) {

            if (!option.trim()) {
                return "please enter Task Name";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Task already Exists!";
            }
            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "pickOptionHandler",
        value: function pickOptionHandler() {
            var randOption = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randOption]);
        }
    }, {
        key: "deleteOptionHandler",
        value: function deleteOptionHandler() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "render",
        value: function render() {

            var title = "Indecision App";
            var subtitle = "Put Your Life in Hands of Computer !";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { pickOption: this.pickOptionHandler, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { options: this.state.options, deleteOptions: this.deleteOptionHandler }),
                React.createElement(AddOption, { addOption: this.addOptionHandler })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.pickOption, disabled: !this.props.hasOptions },
                    "What Should i Do..?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.deleteOptions },
                    "Delete Options"
                ),
                React.createElement(
                    "ol",
                    null,
                    this.props.options.map(function (option) {
                        return React.createElement(Option, { key: option, option: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                null,
                this.props.option
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this6.formHandler = _this6.formHandler.bind(_this6);
        _this6.state = {
            errorMessage: undefined
        };
        return _this6;
    }

    _createClass(AddOption, [{
        key: "formHandler",
        value: function formHandler(e) {
            e.preventDefault();

            var task = e.target.elements.task.value.trim();

            var errorMessage = this.props.addOption(task);
            e.target.elements.task.value = "";

            this.setState(function () {
                return { errorMessage: errorMessage };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.errorMessage && React.createElement(
                    "p",
                    null,
                    this.state.errorMessage
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.formHandler },
                    React.createElement("input", { type: "text", name: "task" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
