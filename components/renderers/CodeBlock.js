import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import a11y from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language = "language-js", value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={a11y}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;