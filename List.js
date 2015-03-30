var List = React.createClass({
  getInitialState: function() {
    return {
      entries: []
    };
  },
  
  componentDidMount: function() {
    var self = this;
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(event){
      if((request.readyState === 4) && (request.status === 200)) {
        var responseJSON = JSON.parse(request.responseText);
        var entries = responseJSON.data.children.map(function(child) {
          return {
            id: child.data.id,
            title: child.data.title,
            url: child.data.url
          };
        });

        self.setState({
          entries: self.state.entries.concat(entries)
        });
      }
    };
    request.open("GET", "http://www.reddit.com/r/programming.json");
    request.send();
  },
  
  render: function() {
    var entries = this.state.entries.map(function(entry) {
      return <Entry key={entry.id} title={entry.title} url={entry.url} />
    });
    
    var style = {
      listStyleType: "none",
      margin: 0,
      padding: 0
    };
    
    return <ul style={style}>{entries}</ul>;
  }
});
    
React.render(
  <List />,
  document.body
);