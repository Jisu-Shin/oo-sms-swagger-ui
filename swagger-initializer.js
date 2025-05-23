window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
          {
          url: "https://raw.githubusercontent.com/Jisu-Shin/oo-sms-swagger-ui/refs/heads/master/oo-sms-sms-swagger.json",
          name: "SMS Service"
        },
        {
          url: "https://raw.githubusercontent.com/Jisu-Shin/oo-sms-swagger-ui/refs/heads/master/oo-sms-cust-swagger.json",
          name: "Customer Service"
        },
       {
          url: "https://raw.githubusercontent.com/Jisu-Shin/oo-sms-swagger-ui/refs/heads/master/oo-sms-booking-swagger.json",
          name: "Booking Service"
        }
    ],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
