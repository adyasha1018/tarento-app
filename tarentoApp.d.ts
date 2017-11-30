/// <reference path="node_modules/definitely-typed-jquery/jquery.d.ts" />
/// <reference path="node_modules/definitely-typed-angular/angular.d.ts" />
/// <reference path="app/scripts/Misc.d.ts" />
declare module tarentoApp {
    class Router {
        initialize($stateProvider: any, $urlRouteProvider: any): void;
    }
}
declare module tarentoApp {
    class Bootstraper {
        module: ng.IModule;
        router: tarentoApp.Router;
        constructor(module: ng.IModule, router: tarentoApp.Router);
        bootstrap(): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
        initRestangular(RestangularProvider: any): void;
    }
}
declare module tarentoApp.Controllers {
    class TarentoAppController {
        addForm: boolean;
        selectedItem: any;
        dataToBind: Array<any>;
        addToList: (headerContent: string, innerContent: string) => any;
        openAddForm: () => any;
        showItem: (item: any) => any;
        static $inject: string[];
        constructor($scope: any);
    }
}
declare module tarentoApp {
    class App {
        module: ng.IModule;
        constructor();
    }
}
