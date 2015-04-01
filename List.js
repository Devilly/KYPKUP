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
          source: "reddit",
          id: "reddit-" + child.data.id,
          title: child.data.title,
          url: child.data.url,
          time: child.data.created_utc
        };
      });

      self.setState({
        entries: self.state.entries.concat(entries)
      });
    });
    
    request("https://hacker-news.firebaseio.com/v0/topstories.json", function(topStoryIds) {
      var numberOfHackerNewsStories = 0;
      function addHackerNewsStory(id) {
        request("https://hacker-news.firebaseio.com/v0/item/" + id + ".json", function(story) {
          self.setState({
            entries: self.state.entries.concat({
              source: "hackernews",
              id: "hackernews-" + story.id,
              title: story.title,
              url: story.url,
              time: story.time
            })
          });
          
          numberOfHackerNewsStories++;
          if(numberOfHackerNewsStories < 10) {
            addHackerNewsStory(topStoryIds.shift());
          }
        });
      }
      
      addHackerNewsStory(topStoryIds.shift());
    });
  },
  
  render: function() {
    var entries = this.state.entries.filter(function(entry) {
      return entry.source && entry.title && entry.url && entry.time;
    }).sort(function(firstEntry, secondEntry) {
      var value;
      if(firstEntry.time < secondEntry.time) {
        value = -1;
      } else if(firstEntry.time > secondEntry.time) {
        value = 1;
      } else {
        value = 0;
      }
      return value;
    }).map(function(entry) {
      return <Entry key={entry.id} source={entry.source} title={entry.title} url={entry.url} />
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