"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function, nativescript-angular module, code to integrate NativeScript and Angular app version of platformBrowserDynamic()
var platform_1 = require("nativescript-angular/platform");
// typescript class .. both defined in seperate files
var app_module_1 = require("./app.module");
// bootstrapModule expects an Angular module that contains the main configuration for your application,
// in this case AppModule module defiend in app.module.ts
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0SEFBNEg7QUFDNUgsMERBQTRFO0FBRTVFLHFEQUFxRDtBQUNyRCwyQ0FBeUM7QUFFekMsdUdBQXVHO0FBQ3ZHLHlEQUF5RDtBQUN6RCxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiwgbmF0aXZlc2NyaXB0LWFuZ3VsYXIgbW9kdWxlLCBjb2RlIHRvIGludGVncmF0ZSBOYXRpdmVTY3JpcHQgYW5kIEFuZ3VsYXIgYXBwIHZlcnNpb24gb2YgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuLy8gdHlwZXNjcmlwdCBjbGFzcyAuLiBib3RoIGRlZmluZWQgaW4gc2VwZXJhdGUgZmlsZXNcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuLy8gYm9vdHN0cmFwTW9kdWxlIGV4cGVjdHMgYW4gQW5ndWxhciBtb2R1bGUgdGhhdCBjb250YWlucyB0aGUgbWFpbiBjb25maWd1cmF0aW9uIGZvciB5b3VyIGFwcGxpY2F0aW9uLFxuLy8gaW4gdGhpcyBjYXNlIEFwcE1vZHVsZSBtb2R1bGUgZGVmaWVuZCBpbiBhcHAubW9kdWxlLnRzXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdfQ==