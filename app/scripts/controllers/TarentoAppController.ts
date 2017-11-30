/// <reference path="Reference.ts" />
 module tarentoApp.Controllers{
     export class TarentoAppController{
         addForm:boolean;
         selectedItem:any;
         dataToBind:Array<any>;
         addToList:(headerContent:string,innerContent:string)=>any;
         openAddForm:()=>any;
         showItem:(item:any)=>any;
         static $inject=["$scope"];
         constructor($scope){
             var vm=this;
                 vm.addForm =false;
                 vm.selectedItem = {header:"",content:""}
                 vm.dataToBind=[
                 {header:'Elastic Cloud',content:'If you have not followed the release cadednce over the past few months, you may be surprised by todays announcements'}                 
                 ];

                 vm.addToList=(headerContent:string,innerContent:string)=>{
                        vm.dataToBind.push({
                            header:headerContent,
                            content:innerContent
                        });
                 }
                 vm.openAddForm=()=>{
                     vm.addForm = true;
                 }
                 vm.showItem=(item)=>{
                     vm.selectedItem=item;
                     vm.addForm = false;
                 }
         }
     }
}