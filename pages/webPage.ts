import { $, by, browser, element, ExpectedConditions, Key } from "protractor";
import { code as dragAndDrop } from "html-dnd";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
const expect = chai.expect;
import * as util from "util";
const execFile = util.promisify(require('child_process').execFile);



chai.use(chaiAsPromised);
export class WebPage {
    public async get() {
        await browser.waitForAngularEnabled(false);
        // await browser.driver.manage().window().maximize();
        await browser.get('https://jquery.com/download/');
        await expect(await browser.getTitle()).equal('Download jQuery | jQuery');
    }
    public async downloadFile() {
        await browser.wait(ExpectedConditions.visibilityOf($("a[href='https://code.jquery.com/jquery-3.3.1.min.js']")));

        // return await $("a[href='https://code.jquery.com/jquery-3.3.1.min.js']").click();
        await browser.executeScript("arguments[0].click();", $("a[href='https://code.jquery.com/jquery-3.3.1.min.js']"));

        const oldfilePath = require("path").resolve(
            __dirname + `/../dowloadFileInIE.exe`);
        console.log("Before alt" + oldfilePath);
        const { stdout } = await execFile(oldfilePath);
        console.log(stdout);
    }

    public async droppedItemInvisible() {
        return await browser.wait(ExpectedConditions.stalenessOf($("#one")));
    }
}