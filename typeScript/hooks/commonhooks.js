"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const webPage_1 = require("../pages/webPage");
const sessionId = protractor_1.browser.sessionId;
const loginPage = new webPage_1.WebPage();
cucumber_1.BeforeAll(() => {
    cucumber_1.setDefaultTimeout(100000);
});
cucumber_1.Before((scenario) => __awaiter(this, void 0, void 0, function* () {
    console.log("Before scenario");
}));
cucumber_1.After((scenario) => __awaiter(this, void 0, void 0, function* () {
    console.log("after scenario");
}));
