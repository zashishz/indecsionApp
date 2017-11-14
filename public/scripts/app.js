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
        _this.deleteOptionsHandler = _this.deleteOptionsHandler.bind(_this);
        _this.addOptionHandler = _this.addOptionHandler.bind(_this);

        _this.state = {
            options: props.options
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
                return { options: prevState.options.concat(option) };
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
        value: function deleteOptionHandler(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return option !== optionToRemove;
                    })
                };
            });
        }
    }, {
        key: "deleteOptionsHandler",
        value: function deleteOptionsHandler() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            try {
                var options = JSON.parse(localStorage.getItem("options"));
                if (options) this.setState(function () {
                    return { options: options };
                });
            } catch (e) {}
            console.log("componentDidMount");
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                localStorage.setItem("options", JSON.stringify(this.state.options));
            }
            console.log("componentDidUpdate");
        }
    }, {
        key: "render",
        value: function render() {

            var subtitle = "Put Your Life in Hands of Computer !";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { pickOption: this.pickOptionHandler, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    deleteOptions: this.deleteOptionsHandler,
                    deleteOption: this.deleteOptionHandler
                }),
                React.createElement(AddOption, { addOption: this.addOptionHandler })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision App"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.pickOption, disabled: !props.hasOptions },
            "What Should i Do..?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        props.options.length == 0 && React.createElement(
            "p",
            null,
            "Please Add an  Option"
        ),
        React.createElement(
            "button",
            { onClick: props.deleteOptions },
            "Delete Options"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    option: option,
                    deleteOption: props.deleteOption
                });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "li",
        null,
        props.option,
        React.createElement(
            "button",
            { onClick: function onClick() {
                    props.deleteOption(props.option);
                } },
            "remove"
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.formHandler = _this2.formHandler.bind(_this2);
        _this2.state = {
            errorMessage: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "formHandler",
        value: function formHandler(e) {
            e.preventDefault();

            var task = e.target.elements.task.value.trim();

            var errorMessage = this.props.addOption(task);

            if (!errorMessage) e.target.elements.task.value = "";

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
