"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function, nativescript-angular module, code to integrate NativeScript and Angular app version of platformBrowserDynamic()
var platform_1 = require("nativescript-angular/platform");
var status_bar_util_1 = require("./utils/status-bar-util");
// typescript class .. both defined in seperate files
var app_module_1 = require("./app.module");
// bootstrapModule expects an Angular module that contains the main configuration for your application,
// in this case AppModule module defiend in app.module.ts
status_bar_util_1.setStatusBarColors();
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0SEFBNEg7QUFDNUgsMERBQTRFO0FBQzVFLDJEQUE2RDtBQUM3RCxxREFBcUQ7QUFDckQsMkNBQXlDO0FBRXpDLHVHQUF1RztBQUN2Ryx5REFBeUQ7QUFDekQsb0NBQWtCLEVBQUUsQ0FBQztBQUNyQixzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiwgbmF0aXZlc2NyaXB0LWFuZ3VsYXIgbW9kdWxlLCBjb2RlIHRvIGludGVncmF0ZSBOYXRpdmVTY3JpcHQgYW5kIEFuZ3VsYXIgYXBwIHZlcnNpb24gb2YgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IHNldFN0YXR1c0JhckNvbG9ycyB9IGZyb20gXCIuL3V0aWxzL3N0YXR1cy1iYXItdXRpbFwiO1xuLy8gdHlwZXNjcmlwdCBjbGFzcyAuLiBib3RoIGRlZmluZWQgaW4gc2VwZXJhdGUgZmlsZXNcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuLy8gYm9vdHN0cmFwTW9kdWxlIGV4cGVjdHMgYW4gQW5ndWxhciBtb2R1bGUgdGhhdCBjb250YWlucyB0aGUgbWFpbiBjb25maWd1cmF0aW9uIGZvciB5b3VyIGFwcGxpY2F0aW9uLFxuLy8gaW4gdGhpcyBjYXNlIEFwcE1vZHVsZSBtb2R1bGUgZGVmaWVuZCBpbiBhcHAubW9kdWxlLnRzXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIl19