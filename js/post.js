
angular.module('app', ['hc.marked'])

angular.module('app').config(function(markedProvider) {
    markedProvider.setOptions({
        gfm: true,
        tables: true,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        }
    });
})

angular.module('app').controller('ctrl', function($scope) {
      $scope.my_markdown = '#앵귤러로 ajax를 호출 한다면? \n > 돔이 로드되기 전 가져올 수 있지 않을까..  \n\n ``` java \n public void int func { \n \t int a = 0; \n } \n ```';

      //     Tab Support for Text-area
      function enableTab(id) {
          var el = document.getElementById(id);
          el.onkeydown = function(e) {
              if (e.keyCode === 9) {
                  var val = this.value,
                      start = this.selectionStart,
                      end = this.selectionEnd;
                  this.value = val.substring(0, start) + '\t' + val.substring(end);

                  this.selectionStart = this.selectionEnd = start + 1;

                  return false;

              }
          };
      };
      enableTab('txt');
});
