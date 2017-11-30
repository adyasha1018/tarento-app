///<reference path="Reference.ts"/>
module tarentoApp {
    export class App {
        module: ng.IModule;
        constructor() {
            this.module = angular.module('tarentoApp',['tarentoApp.Controllers','restangular','ui.router',
            'ngMaterial']);
            let router = new tarentoApp.Router();
            let bootstrapper = new tarentoApp.Bootstraper(this.module,router);
            bootstrapper.bootstrap();
        }
    }
    new App();
}