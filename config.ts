import { Config, protractor } from "protractor";
import * as webDrivers from "../node_modules/protractor/node_modules/webdriver-manager/selenium/update-config.json";

export const config: Config = {
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  capabilities: {
    "id": "ie",
    "browserName": "internet explorer",
    "version": "11",
    "platform": "ANY",
    "ignoreProtectedModeSettings": true,
    "ignoreZoomSetting": true,
    "nativeEvents": true,
    "enablePersistentHover": true,
    "disable-popup-blocking": true,
    "unexpectedAlertBehaviour": "accept",
  },
  specs: [
    "../features/*.feature",
  ],
  // sauceUser: process.env.SAUCE_USERNAME ,
  // sauceKey:  process.env.SAUCE_ACCESS_KEY ,
  localSeleniumStandaloneOpts: {
    jvmArgs: [`-Dwebdriver.gecko.driver=${(webDrivers as any).gecko.last}`,
        "-Dwebdriver.firefox.profile=webdriver",
        "-Dwebdriver.firefox.logfile=firefox.log",
    `-Dwebdriver.ie.driver=${(webDrivers as any).ie.last}`,
        "-Dwebdriver.ie.driver.loglevel=DEBUG",
        "-Dwebdriver.ie.driver.logfile=ie.log",
    `-Dwebdriver.edge.driver=${process.env["ProgramFiles(x86)"]}\\Microsoft Web Driver\\MicrosoftWebDriver.exe`,
        "-Dwebdriver.chrome.logfile=chrome.log"],
},
  SELENIUM_PROMISE_MANAGER: false,
  cucumberOpts: {
    "require-module": "ts-node/register",
    "format": "progress",
    "require": ["../stepdefinitions/*.ts", "../hooks/*.ts"],
    "strict": true,

    "tags": "not @WIP",
  },

  disableChecks: true,
  ignoreUncaughtExceptions: true,
}