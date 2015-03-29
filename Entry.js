var Entry = React.createClass({
  render: function() {
    return (<li>
              <a href={this.props.url}>{this.props.title}</a>
            </li>);
  }
});