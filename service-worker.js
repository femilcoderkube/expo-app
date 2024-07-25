// service-worker.js

self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "./assets/images/favicon.png", // Replace with your icon path
  };
  event.waitUntil(self.registration.showNotification("Expo App", options));
});
