var List = React.createClass({
  getInitialState: function() {
    return {
      entries: []
    };
  },
  
  componentDidMount: function() {
    var self = this;
    
    function request(url, callback) {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function(event){
        if((request.readyState === 4) && (request.status === 200)) {
          var responseJSON = JSON.parse(request.responseText);
          callback(responseJSON);
        }
      };
      request.open("GET", url);
      request.send();
    }
    
    request("http://www.reddit.com/r/programming.json", function(responseJSON) {
      var entries = responseJSON.data.children.slice(0, 10).map(function(child) {
        return {
          id: child.data.id,
          title: child.data.title,
          url: child.data.url
        };
      });

      self.setState({
        entries: self.state.entries.concat(entries)
      });
    });
    
    request("https://hacker-news.firebaseio.com/v0/topstories.json", function(responseJSON) {
      responseJSON.every(function(id, index) {
        if(index > 9) {
          return false;
        }
        
        request("https://hacker-news.firebaseio.com/v0/item/" + id + ".json", function(responseJSON) {
          self.setState({
            entries: self.state.entries.concat({
              id: responseJSON.id,
              title: responseJSON.title,
              url: responseJSON.url
            })
          });
        });
        
        return true;
      });
    });
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