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
const protractor_1 = require("protractor");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const expect = chai.expect;
const util = require("util");
const execFile = util.promisify(require('child_process').execFile);
chai.use(chaiAsPromised);
class WebPage {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            // await browser.driver.manage().window().maximize();
            yield protractor_1.browser.get('https://jquery.com/download/');
            yield expect(yield protractor_1.browser.getTitle()).equal('Download jQuery | jQuery');
        });
    }
    downloadFile() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(protractor_1.$("a[href='https://code.jquery.com/jquery-3.3.1.min.js']")));
            // return await $("a[href='https://code.jquery.com/jquery-3.3.1.min.js']").click();
            yield protractor_1.browser.executeScript("arguments[0].click();", protractor_1.$("a[href='https://code.jquery.com/jquery-3.3.1.min.js']"));
            // await browser.switchTo().activeElement();
            // await browser.actions().keyDown(Key.ALT).perform();
            // console.log("Before S");
            // await browser.actions().sendKeys('S').perform();
            // console.log("Before alt");
            // await browser.actions().keyUp(Key.ALT).perform();
            // console.log("After alt");
            // await browser.actions().mouseMove(element).perform();
            const oldfilePath = require("path").resolve(__dirname + `/../dowloadFileInIE.exe`);
            console.log("Before alt" + oldfilePath);
            const { stdout } = yield execFile(oldfilePath);
            console.log(stdout);
            // return new Promise(function (resolve, reject) {
            //     // Execute the command, reject if we exit non-zero (i.e. error)
            //     const oldfilePath = require("path").resolve(
            //         __dirname + `/../../dowloadFileInIE.bat`);
            //     exec(oldfilePath, (err, stdout, stderr) => {
            //         if (err) {
            //             console.error(err);
            //             return reject(new Error(stderr));
            //         }
            //         console.log(stdout);
            //         return resolve(stdout);
            //     });
            // shell.exec(oldfilePath, function (code, stdout, stderr) {
            //     console.log(code);
            //     if (code != 0) return reject(new Error(stderr));
            //     return resolve(stdout);
            // });
            // });
            // var task = shell.exec(cmd);
            // if (task.code !== 0) {
            //     shell.echo("execute AutoIt script fail: " + task.stdout);
            //     shell.exit(1);
            // }
            // await browser.sleep(10000);
        });
    }
    droppedItemInvisible() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(protractor_1.$("#one")));
        });
    }
}
exports.WebPage = WebPage;
