'use strict';

/* Controllers */
function SelectLanguagesCtrl($scope, languages, contents) {
  $scope.languages = languages.lggs

  var _contents;

  contents.async().then(function(contents) {
    _contents = contents.languages;
  });

  $scope.title = function() {
    if (_contents) {
      return languages.translate(_contents.title);
    }
  };

  $scope.setLanguage = function(lgg) {
    console.log("Selecting language : " + lgg.name);
    languages.selected = lgg;
  };
}
SelectLanguagesCtrl.$inject = ["$scope", "languages", "contents"];


function oLookup(o, path) {
  var i,
      k = path.shift();
  if (i = k.match(/(.*)\[([0-9]*)\]/)) {
    o = o[i[1]][parseInt(i[2])]
  } else {
    o = o[k];
  }

  if (path.length == 0) {
    return o;
  } else {
    return oLookup(o, path);
  }
}

function translate(languages, contents, path) {
  if (contents) {
    var c = oLookup(contents, path);
    return languages.translate(c);
  }
}


function NavBarCtrl($scope, languages, contents) {

  var _contents;

  contents.async()
          .then(function(contents) {
            _contents = contents.navbar;
          });

  $scope.contents = {
    home:     function() {
                return translate(languages, _contents, ["home"]);
              },
    mission:  function() {
                return translate(languages, _contents, ["mission"]);
              },
    events:   function() {
                return translate(languages, _contents, ["events"]);
              }
  };

}
NavBarCtrl.$inject = ["$scope", "languages", "contents"];

function FooterCtrl($scope, languages, contents, sponsors) {

  var _contents;

  contents.async()
          .then(function(contents) {
            _contents = contents;
          });

  sponsors.then(function(sponsors) {
            $scope.sponsors  = sponsors;
          });

  $scope.translate = function(o) {
    if (angular.isObject(o)) {
      return languages.translate(o);
    }
  };

  $scope.contents = function(pathString, absolute) {
    var path = pathString.split(/\./g);
    if (!absolute) {
      path.unshift("footer");
    }
    return translate(languages, _contents, path);
  }

}
FooterCtrl.$inject = ["$scope", "languages", "contents", "sponsors"];

function StartCtrl($scope, languages, contents, talks) {

  var _contents;

  contents.async()
          .then(function(contents) {
            _contents = contents;
          });

  talks.then(function(talks) {
          $scope.talks = talks;
          $scope.lastTalk = talks[talks.length-1];
        });

  $scope.translate = function(o) {
    if (angular.isObject(o)) {
      return languages.translate(o);
    }
  };

  $scope.contents = function(pathString, absolute) {
    var path = pathString.split(/\./g);
    if (!absolute) {
      path.unshift("start");
    }
    return translate(languages, _contents, path);
  }

}
StartCtrl.$inject = ["$scope", "languages", "contents", "talks"];


function MissionCtrl($scope, languages, contents) {
  var _contents;

  contents.async()
          .then(function(contents) {
            _contents = contents;
          });

  $scope.contents = function(pathString, absolute) {
    var path = pathString.split(/\./g);
    if (!absolute) {
      path.unshift("mission");
    }
    return translate(languages, _contents, path);
  }
}
MissionCtrl.$inject = ["$scope", "languages", "contents"];

function EventsCtrl(talks) {
  _.each(talks.talks, function(i) {console.dir(i)});
}
EventsCtrl.$inject = ["talks"];
