'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('wajug.services', []).
  value('version', '0.1').
  factory("languages", [function() {
    function Languages() {
      this.lggs = [];
      this.lggs[0] = {id:"en", name: "English"};
      this.lggs[1] = {id:"fr", name: "Français"};

      this.selected = this.lggs[0];

      this.translate = function (content) {
        return content[this.selected.id];
      }
    };
    return new Languages();
  }]).
  factory("contents", ["$http", function($http) {
    function Contents() {
      var promise = $http.get('/assets/data/contents.json').
                      then(function(resource) {
                        return resource.data;
                      });
      return promise;
    };
    return {
      async: Contents
    };
  }]).
  factory("speakers", ["$http", function($http) {
    var promise = $http.get('/assets/data/speakers.json').
                    then(function(resource) {
                      return resource.data;
                    });
    return promise;
  }]).
  factory("talks", ["$q", "$http", "speakers", function($q, $http, speakers) {
    var talks = $http.get('/assets/data/talks.json').
                    then(function(resource) {
                      return resource.data;
                    });
    var promise = $q.all([talks, speakers])
                    .then(function(talksAndSpeakers) {
                      var talks = talksAndSpeakers[0];
                      var speakers = talksAndSpeakers[1];
                      angular.forEach(talks, function(talk) {
                        var speakerId = talk.speaker;
                        for (var spId in speakers) {
                          if (spId === speakerId) {
                            talk.speaker = speakers[spId];
                            break;
                          }
                        }
                      });
                      return talks;
                    });

    return promise;
  }]).
  factory("sponsors", ["$http", function($http) {
    var promise = $http.get('/assets/data/sponsors.json').
                    then(function(resource) {
                      return resource.data;
                    });
    return promise;
  }]).
  factory("places", [function() {
    function Places() {
      this.places = [];
      this.places[0] = {name: "wsl"};
    };
    return new Places();
  }])
;
