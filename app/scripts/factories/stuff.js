angular.module('angularDrupalApp')
  .factory('Stuff', function () {
    return {
      "stories": [
        {
          "title": "Awesome News Story",
          "img": "http://lorempixel.com/650/650",
          "text": "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
          "link": "http://www.cnn.com",
          "timestamp": "Sat, 04/18/2015 - 18:25",
          "featured": true,
          "author": 1,
          "terms": [
            1,
            2
          ]
        },
        {
          "title": "Fusce Dapibus Nibh Ipsum Parturient",
          "img": "http://lorempixel.com/660/660",
          "text": "Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.",
          "link": "http://www.example.com",
          "timestamp": "Sat, 03/29/2015 - 12:47",
          "featured": false,
          "author": 2,
          "terms": [
            2
          ]
        },
        {
          "title": "Cursus Nibh Fermentum Ullamcorper",
          "img": "http://lorempixel.com/620/620",
          "text": "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui.",
          "link": "http://www.test.com",
          "timestamp": "Sat, 04/21/2015 - 19:02",
          "featured": false,
          "author": 2,
          "terms": [
            1
          ]
        },
        {
          "title": "Bibendum Condimentum Malesuada Vulputate Pharetra",
          "img": "http://lorempixel.com/640/640",
          "text": "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.",
          "link": "http://www.tumblr.com",
          "timestamp": "Sat, 03/25/2015 - 22:10",
          "featured": true,
          "author": 2,
          "terms": [
            1
          ]
        },
        {
          "title": "Inceptos Aenean",
          "img": "http://lorempixel.com/750/750",
          "text": "Donec sed odio dui.",
          "link": "http://www.google.com",
          "timestamp": "Sat, 04/05/2015 - 09:25",
          "featured": false,
          "author": 1,
          "terms": [
            2
          ]
        },
        {
          "title": "April Fools!",
          "img": "http://lorempixel.com/450/450",
          "text": "Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
          "link": "http://www.twitter.com",
          "timestamp": "Sat, 04/01/2015 - 1:05",
          "featured": true,
          "author": 2,
          "terms": [
            2
          ]
        },
        {
          "title": "Parturient Amet Nullam",
          "img": "http://lorempixel.com/600/600",
          "text": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "link": "http://www.facebook.com",
          "timestamp": "Sat, 04/05/2015 - 6:00",
          "featured": false,
          "author": 1,
          "terms": [
            1,
            2
          ]
        }
      ],
      "topics": [
        {
          "tid": 1,
          "name": "Science",
          "description": "Awesome sciency stuff!"
        },
        {
          "tid": 2,
          "name": "Technology",
          "description": "They have the internet on computers now?"
        }
      ],
      "authors": [
        {
          "uid": 1,
          "name": "Testy McTesterson",
          "image": "http://lorempixel.com/50/50"
        },
        {
          "uid": 2,
          "name": "User M. Name",
          "image": "http://lorempixel.com/50/50"
        }
      ]
    }
  });
