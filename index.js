// Initiate a new Embedded App instance
const app = new window.Webex.Application();

// onReady fires once the SDK has initialized with the client
app.onReady().then(() => {
  console.log("onReady() has completed.");
});

/**
 * Sets the share url to the value entered in the "shareUrl" element.
 */
function handleSetShare() {
  if (app.isShared) {
    console.error("ERROR: setShareUrl() should not be called while session is active");
    return;
  }
  let url = document.URL;

  app
    .setShareUrl(url, url, "Webex Embedded App Lab")
    .then(() => {
      console.log("setShareUrl() has shared url to participants");
    })
    .catch((error) => {
      console.error("setShareUrl() failed with error", Webex.Application.ErrorCodes[error]);
    });
}

/**
 * Clears the share url
 */
function handleClearShare() {
  app
    .clearShareUrl()
    .then(() => {
      console.log("clearShareUrl() has cleared share url");
    })
    .catch((error) => {
      console.error("clearShareUrl() failed with error", Webex.Application.ErrorCodes[error]);
    });
}
/**
 * Calls and logs the user data from `app.context.getUser()`
 */
function handleGetUser() {
  app.context
    .getUser()
    .then((user) => {
      let userTextArea = document.getElementById("userData");
      userTextArea.value = JSON.stringify(user, "", 2);
    })
    .catch((error) => {
      console.error("getUser() promise failed with error",Webex.Application.ErrorCodes[error]);
    });
}
