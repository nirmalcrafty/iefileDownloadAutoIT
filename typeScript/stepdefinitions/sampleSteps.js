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
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const webPage_1 = require("../pages/webPage");
const expect = chai.expect;
chai.use(chaiAsPromised);
const webPage = new webPage_1.WebPage();
cucumber_1.Given("I open the page", { timeout: 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield webPage.get();
}));
cucumber_1.When("I download file", { timeout: 200000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield webPage.downloadFile();
}));
cucumber_1.Then("I should see the downloaded file", { timeout: 100000 }, () => __awaiter(this, void 0, void 0, function* () {
    yield expect(webPage.droppedItemInvisible()).to.eventually.be.true;
    yield protractor_1.browser.sleep(10000);
}));
