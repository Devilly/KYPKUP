var Entry = React.createClass({
  render: function() {    
    return (<li>
              <Icon source={this.props.source} />
              <a href={this.props.url}>{this.props.title}</a>
            </li>);
  }
});