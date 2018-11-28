sap.ui.controller("ztable.Employees", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ztable.Employees
*/
	onInit: function() {
		
		 var oModel = new sap.ui.model.json.JSONModel();
         oModel.loadData("model/employeeData.json");
         //default
         this.getView().setModel(oModel);
         
        sap.ui.localResources("i18n"); 
         //i18n
         var oRModel = new sap.ui.model.resource.ResourceModel({
        	 bundleName : "i18n.mySource"
         });
         //named model
         this.getView().setModel(oRModel, "m2");
         
         
         
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ztable.Employees
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ztable.Employees
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ztable.Employees
*/
//	onExit: function() {
//
//	}

});