var tarentoApp;
(function (tarentoApp) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/tarentoList");
            $stateProvider
                .state('tarentoList', {
                "url": "/tarentoList",
                templateUrl: 'views/tarrento-assignment.html',
                controller: 'TarentoAppController as vm'
            });
        };
        return Router;
    }());
    tarentoApp.Router = Router;
})(tarentoApp || (tarentoApp = {}));
var tarentoApp;
(function (tarentoApp) {
    var Bootstraper = (function () {
        function Bootstraper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstraper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider",
                function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstraper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        };
        Bootstraper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
        };
        return Bootstraper;
    }());
    tarentoApp.Bootstraper = Bootstraper;
})(tarentoApp || (tarentoApp = {}));
var tarentoApp;
(function (tarentoApp) {
    var Controllers;
    (function (Controllers) {
        var TarentoAppController = (function () {
            function TarentoAppController($scope) {
                var vm = this;
                vm.addForm = false;
                vm.selectedItem = { header: "", content: "" };
                vm.dataToBind = [
                    { header: 'Elastic Cloud', content: 'If you have not followed the release cadednce over the past few months, you may be surprised by todays announcements' }
                ];
                vm.addToList = function (headerContent, innerContent) {
                    vm.dataToBind.push({
                        header: headerContent,
                        content: innerContent
                    });
                };
                vm.openAddForm = function () {
                    vm.addForm = true;
                };
                vm.showItem = function (item) {
                    vm.selectedItem = item;
                    vm.addForm = false;
                };
            }
            TarentoAppController.$inject = ["$scope"];
            return TarentoAppController;
        }());
        Controllers.TarentoAppController = TarentoAppController;
    })(Controllers = tarentoApp.Controllers || (tarentoApp.Controllers = {}));
})(tarentoApp || (tarentoApp = {}));
angular.module('tarentoApp.Controllers', []).controller(tarentoApp.Controllers);
var tarentoApp;
(function (tarentoApp) {
    var App = (function () {
        function App() {
            this.module = angular.module('tarentoApp', ['tarentoApp.Controllers', 'restangular', 'ui.router',
                'ngMaterial']);
            var router = new tarentoApp.Router();
            var bootstrapper = new tarentoApp.Bootstraper(this.module, router);
            bootstrapper.bootstrap();
        }
        return App;
    }());
    tarentoApp.App = App;
    new App();
})(tarentoApp || (tarentoApp = {}));
//# sourceMappingURL=tarentoApp.js.map