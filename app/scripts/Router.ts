///<reference path="Reference.ts"/>
module tarentoApp {
    export class Router {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/tarentoList");
            $stateProvider
                .state('tarentoList', {
                    "url": "/tarentoList",
                    templateUrl: 'views/tarrento-assignment.html',
                    controller: 'TarentoAppController as vm'
                });
        }
    }
}