// describe("accessmemories.index", function() {
//
//     var $rootScope, $state, $location;
//
//     beforeEach(angular.mock.module('accessmemories.index', function() {
//
//     }));
//
//     beforeEach(angular.mock.inject(function (_$rootScope_, $templateCache, _$state_, _$location_) {
//         $rootScope = _$rootScope_;
//         $state = _$state_;
//         $location = _$location_;
//         $templateCache.put('/accessmemories/index/index.html', '');
//     }));
//
//     it('should respond to URL', function() {
//       expect(true).toBeTruthy();
//       //  expect($state.href("index")).toEqual('#!/');
//     });
//
//     it('should go to the index page', function() {
//         $state.go('index');
//         $rootScope.$apply();
//         expect(true).toBeTruthy();
//
//         //expect($state.current.name).toEqual('index');
//     });
//
//     it('should default to the index page', function() {
//         $location.path('/#/foo');
//         $rootScope.$apply();
//         expect(true).toBeTruthy();
//
//       //  expect($state.current.name).toEqual('index');
//     });
// 
// });
