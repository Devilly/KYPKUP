var Entry = React.createClass({
  render: function() {
    var icon;
    if(this.props.source === "reddit") {
      icon = <IconReddit />;
    } else if(this.props.source === "hackernews") {
      icon = <IconHackerNews />;
    }
    
    return (<li>
              {icon}
              <a href={this.props.url}>{this.props.title}</a>
            </li>);
  }
});