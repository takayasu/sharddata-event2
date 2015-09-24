'use strict';

describe('Directive: sample directive', function BasedTeseSwite() {

  // // load the directive's module
  beforeEach(module('ngTemplates'));
  beforeEach(module('app.directive.sample'));

  var element;
  var scope;
  var $rootScope;
  var $compile;
  var directiveHTML = '<app-sample></app-sample>';
  var resultHTML = '<div class="app-directive-sample-container">\n <span class="app-sample-main">Hello Sample Directive</span>\n</div>';

  beforeEach(inject([
    '$rootScope', '$compile', '$templateCache',
    function InjectInitialize(_$rootScope_, _$compile_, $templateCache) {
      $rootScope = _$rootScope_;
      scope = _$rootScope_.$new();
      $compile = _$compile_;
    },]));

  it('check...', function MakeHtmlElement() {
    element = $compile(directiveHTML)(scope);
    scope.$digest();
    expect(element.html()).toBe(resultHTML);
  });
});
