import React, { useState, useEffect } from 'react';
import Entry from './Entry';

export default () => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    (async () => {
      // Load entries from Reddit.
      let response = await fetch('https://www.reddit.com/r/programming.json');
      let json = await response.json();

      const newListItems = json.data.children.slice(0, 10).map(child => {
        return {
          id: 'reddit-' + child.data.id,
          title: child.data.title,
          url: child.data.url,
          time: child.data.created_utc
        };
      });

      setListItems(listItems => listItems.concat(newListItems));

      // Load entries from Hacker News.
      response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
      json = await response.json();

      const addHackerNewsStory = async id => {
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        const storyJson = await storyResponse.json();

        setListItems(listItems => {
          var isAlreadyListed = listItems.some(function (entry) {
            return entry.url === storyResponse.url;
          });

          if (isAlreadyListed) {
            return listItems;
          } else {
            return listItems.concat({
              id: 'hackernews-' + storyJson.id,
              title: storyJson.title,
              url: storyJson.url,
              time: storyJson.time
            });
          }
        });
      };

      for(let index = 0; index < 10; index++) {
        await addHackerNewsStory(json.shift());
      }
    })();
  }, []);

  var entries = listItems.filter(entry => {
    return entry.title && entry.url && entry.time;
  }).sort((firstEntry, secondEntry) => {
    var value;
    if (firstEntry.time < secondEntry.time) {
      value = -1;
    } else if (firstEntry.time > secondEntry.time) {
      value = 1;
    } else {
      value = 0;
    }
    return value;
  }).map(entry => {
    return (
      <Entry key={entry.id} source={entry.source} title={entry.title} url={entry.url} />
    );
  });

  var style = {
    listStyleType: 'none',
    margin: 0,
    padding: 0
  };

  return (
    <ul style={style}>{entries}</ul>
  );
};
