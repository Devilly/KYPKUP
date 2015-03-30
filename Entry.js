var Entry = React.createClass({
  render: function() {
    var className;
    if(this.props.source === "reddit") {
      className = "fa fa-reddit";
    } else if(this.props.source === "hackernews") {
      className = "devicons devicons-hackernews";
    }
    
    return (<li>
              <span className={className}></span>
              <a href={this.props.url}>{this.props.title}</a>
            </li>);
  }
});