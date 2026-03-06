let browserName = 4;
let testType = "smoke";

launchBrowser(browserName);
runTests(testType);

function launchBrowser(browserName) {

    if (browserName == "chrome") {
        console.log("Chrome browser launched");
    } 
    else {
        console.log("Unsupported browser");
    }

}

function runTests(testType) {

  switch (testType) {
    case "smoke":
      console.log("Running smoke tests");
    case "sanity":
      console.log("Running sanity tests");
    case "regression":
       console.log("Running regression tests");
    default:
      console.log("Default test type is smoke tests");
  }

}