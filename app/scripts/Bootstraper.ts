///<reference path="Reference.ts"/>
module tarentoApp {
    export class Bootstraper {
        constructor(public module: ng.IModule, public router: tarentoApp.Router) {
        }
        bootstrap() {
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider",
                (RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: any) =>
                    this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider)]);
        }
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        }
        initRestangular(RestangularProvider: any) {
            RestangularProvider.setParentless(true, []);
        }
    }

}