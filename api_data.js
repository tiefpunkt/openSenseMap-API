define({ "api": [
  {
    "type": "delete",
    "url": "/boxes/:senseBoxId",
    "title": "Delete a senseBox and its measurements",
    "name": "deleteBox",
    "group": "Boxes",
    "version": "0.1.0",
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-apikey",
            "description": "<p>the secret API key which corresponds to the <code>senseBoxId</code> parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-apikey header example:",
          "content": "x-apikey: 576efef4cb9b9ebe057bf7b4",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p>the request has invalid or missing credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\"code\":\"NotAuthorized\",\"message\":\"ApiKey is invalid or missing\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/boxes?date=:date&phenomenon=:phenomenon&format=:format",
    "title": "Get all senseBoxes",
    "description": "<p>With the optional <code>date</code> and <code>phenomenon</code> parameters you can find senseBoxes that have submitted data around that time, +/- 2 hours, or specify two dates separated by a comma.</p>",
    "name": "findAllBoxes",
    "group": "Boxes",
    "version": "0.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "date",
            "description": "<p>One or two ISO8601 timestamps at which boxes should provide measurements. Use in combination with <code>phenomenon</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "phenomenon",
            "description": "<p>A sensor phenomenon (determined by sensor name) such as temperature, humidity or UV intensity. Use in combination with <code>date</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"json\"",
              "\"geojson\""
            ],
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>the format the sensor data is returned in.</p>"
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "https://api.opensensemap.org/boxes"
      },
      {
        "url": "https://api.opensensemap.org/boxes?date=2015-03-07T02:50Z&phenomenon=Temperatur"
      },
      {
        "url": "https://api.opensensemap.org/boxes?date=2015-03-07T02:50Z,2015-04-07T02:50Z&phenomenon=Temperatur"
      }
    ],
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "get",
    "url": "/boxes/:boxId",
    "title": "Get one senseBox",
    "name": "findBox",
    "version": "0.0.1",
    "group": "Boxes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"json\"",
              "\"geojson\""
            ],
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>the format the sensor data is returned in.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n  \"_id\": \"57000b8745fd40c8196ad04c\",\n  \"boxType\": \"fixed\",\n  \"createdAt\": \"2016-06-02T11:22:51.817Z\",\n  \"exposure\": \"outdoor\",\n  \"grouptag\": \"\",\n  \"image\": \"57000b8745fd40c8196ad04c.png?1466435154159\",\n  \"loc\": [\n    {\n      \"geometry\": {\n        \"coordinates\": [\n          7.64568,\n          51.962372\n        ],\n        \"type\": \"Point\"\n      },\n      \"type\": \"feature\"\n    }\n  ],\n  \"name\": \"Oststr/Mauritzsteinpfad\",\n  \"sensors\": [\n    {\n      \"_id\": \"57000b8745fd40c8196ad04e\",\n      \"lastMeasurement\": {\n        \"value\": \"0\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"sensorType\": \"VEML6070\",\n      \"title\": \"UV-Intensität\",\n      \"unit\": \"μW/cm²\"\n    },\n    {\n      \"_id\": \"57000b8745fd40c8196ad04f\",\n      \"lastMeasurement\": {\n        \"value\": \"0\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"sensorType\": \"TSL45315\",\n      \"title\": \"Beleuchtungsstärke\",\n      \"unit\": \"lx\"\n    },\n    {\n      \"_id\": \"57000b8745fd40c8196ad050\",\n      \"lastMeasurement\": {\n        \"value\": \"1019.21\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"sensorType\": \"BMP280\",\n      \"title\": \"Luftdruck\",\n      \"unit\": \"hPa\"\n    },\n    {\n      \"_id\": \"57000b8745fd40c8196ad051\",\n      \"lastMeasurement\": {\n        \"value\": \"99.38\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"sensorType\": \"HDC1008\",\n      \"title\": \"rel. Luftfeuchte\",\n      \"unit\": \"%\"\n    },\n    {\n      \"_id\": \"57000b8745fd40c8196ad052\",\n      \"lastMeasurement\": {\n        \"value\": \"0.21\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"sensorType\": \"HDC1008\",\n      \"title\": \"Temperatur\",\n      \"unit\": \"°C\"\n    },\n    {\n      \"_id\": \"576996be6c521810002479dd\",\n      \"sensorType\": \"WiFi\",\n      \"unit\": \"dBm\",\n      \"title\": \"Wifi-Stärke\",\n      \"lastMeasurement\": {\n        \"value\": \"-66\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      }\n    },\n    {\n      \"_id\": \"579f9eae68b4a2120069edc8\",\n      \"sensorType\": \"VCC\",\n      \"unit\": \"V\",\n      \"title\": \"Eingangsspannung\",\n      \"lastMeasurement\": {\n        \"value\": \"2.73\",\n        \"createdAt\": \"2016-11-11T21:22:01.675Z\"\n      },\n      \"icon\": \"osem-shock\"\n    }\n  ],\n  \"updatedAt\": \"2016-11-11T21:22:01.686Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "get",
    "url": "/boxes/:senseBoxId/script",
    "title": "Download the Arduino script for your senseBox",
    "name": "getScript",
    "group": "Boxes",
    "version": "0.1.0",
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-apikey",
            "description": "<p>the secret API key which corresponds to the <code>senseBoxId</code> parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-apikey header example:",
          "content": "x-apikey: 576efef4cb9b9ebe057bf7b4",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p>the request has invalid or missing credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\"code\":\"NotAuthorized\",\"message\":\"ApiKey is invalid or missing\"}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/boxes",
    "title": "Post new senseBox",
    "description": "<p>Create a new senseBox. This method allows you to submit a new senseBox.</p> <p>Along with the senseBox, an user is created which then owns the senseBox.</p> <p>If you specify <code>mqtt</code> parameters, the openSenseMap API will try to connect to the MQTT broker specified by you. The parameter <code>messageFormat</code> tells the API in which format you are sending measurements in.</p> <p>For <code>json</code>, the format is:</p> <pre><code>{   &quot;sensorId&quot;: &lt;value&gt;,   &quot;sensorId&quot;: [&lt;value&gt;,&lt;createdAt&gt;]   ... } </code></pre> <p>For <code>csv</code>, the format is:</p> <pre><code>sensorId,value sensorId,value,createdAt ... </code></pre>",
    "version": "0.0.1",
    "group": "Boxes",
    "name": "postNewBox",
    "parameter": {
      "fields": {
        "JSON request body": [
          {
            "group": "RequestBody",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>the user for this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "orderID",
            "description": "<p>the apiKey of the user for the senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "grouptag",
            "description": "<p>the grouptag of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "allowedValues": [
              "\"indoor\"",
              "\"outdoor\""
            ],
            "optional": false,
            "field": "exposure",
            "description": "<p>the exposure of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "allowedValues": [
              "\"fixed\""
            ],
            "optional": false,
            "field": "boxType",
            "description": "<p>the type of the senseBox. Currently only 'fixed' is supported.</p>"
          },
          {
            "group": "RequestBody",
            "type": "Sensor[]",
            "optional": false,
            "field": "sensors",
            "description": "<p>an array containing the sensors of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "Location",
            "optional": false,
            "field": "loc",
            "description": "<p>the location of this senseBox. Must be a GeoJSON Point Feature. (RFC7946)</p>"
          }
        ],
        "Parameter for creating the user for a senseBox": [
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>the firstname of the user.</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>the ths lastname of the user.</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email for the user. is used for sending the arduino sketch.</p>"
          },
          {
            "group": "User",
            "type": "String",
            "optional": false,
            "field": "lang",
            "description": "<p>the language of the user.</p>"
          }
        ],
        "A single sensor for the nested Sensor parameter": [
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>the title of the phenomenon the sensor observes.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>the unit of the phenomenon the sensor observes.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "sensorType",
            "description": "<p>the type of the sensor.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>the visual representation for the openSenseMap of this sensor.</p>"
          }
        ],
        "Settings for a senseBox connected through MQTT": [
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>the url to the mqtt server.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>the topic to subscribe to.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "allowedValues": [
              "\"json\"",
              "\"csv\""
            ],
            "optional": false,
            "field": "messageFormat",
            "description": "<p>the format the mqtt messages are in.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "decodeOptions",
            "description": "<p>a json encoded string with options for decoding the message. 'jsonPath' for 'json' messageFormat.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "connectionOptions",
            "description": "<p>a json encoded string with options to supply to the mqtt client (https://github.com/mqttjs/MQTT.js#client)</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes"
  },
  {
    "type": "put",
    "url": "/boxes/:senseBoxId",
    "title": "Update a senseBox: Image and sensor names",
    "description": "<p>Modify the specified senseBox.</p>",
    "parameter": {
      "fields": {
        "JSON request body": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the updated description of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>the updated image of this senseBox encoded as base64 data uri.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "grouptag",
            "description": "<p>the grouptag of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "allowedValues": [
              "\"indoor\"",
              "\"outdoor\""
            ],
            "optional": false,
            "field": "exposure",
            "description": "<p>the exposure of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "String",
            "allowedValues": [
              "\"fixed\""
            ],
            "optional": false,
            "field": "boxType",
            "description": "<p>the type of the senseBox. Currently only 'fixed' is supported.</p>"
          },
          {
            "group": "RequestBody",
            "type": "Sensor[]",
            "optional": false,
            "field": "sensors",
            "description": "<p>an array containing the sensors of this senseBox.</p>"
          },
          {
            "group": "RequestBody",
            "type": "Location",
            "optional": false,
            "field": "loc",
            "description": "<p>the location of this senseBox. Must be a GeoJSON Point Feature. (RFC7946)</p>"
          }
        ],
        "A single sensor for the nested Sensor parameter": [
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>the title of the phenomenon the sensor observes.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "unit",
            "description": "<p>the unit of the phenomenon the sensor observes.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": false,
            "field": "sensorType",
            "description": "<p>the type of the sensor.</p>"
          },
          {
            "group": "Sensor",
            "type": "String",
            "optional": true,
            "field": "icon",
            "description": "<p>the visual representation for the openSenseMap of this sensor.</p>"
          }
        ],
        "Settings for a senseBox connected through MQTT": [
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>the url to the mqtt server.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "topic",
            "description": "<p>the topic to subscribe to.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "allowedValues": [
              "\"json\"",
              "\"csv\""
            ],
            "optional": false,
            "field": "messageFormat",
            "description": "<p>the format the mqtt messages are in.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "decodeOptions",
            "description": "<p>a json encoded string with options for decoding the message. 'jsonPath' for 'json' messageFormat.</p>"
          },
          {
            "group": "MqttOption",
            "type": "String",
            "optional": false,
            "field": "connectionOptions",
            "description": "<p>a json encoded string with options to supply to the mqtt client (https://github.com/mqttjs/MQTT.js#client)</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n \"_id\": \"56e741ff933e450c0fe2f705\",\n \"name\": \"my senseBox\",\n \"description\": \"this is just a description\",\n \"weblink\": \"https://opensensemap.org/explore/561ce8acb3de1fe005d3d7bf\",\n \"grouptag\": \"senseBoxes99\",\n \"exposure\": \"indoor\",\n \"sensors\": [\n   {\n     \"_id\": \"56e741ff933e450c0fe2f707\",\n     \"title\": \"UV-Intensität\",\n     \"unit\": \"μW/cm²\",\n     \"sensorType\": \"VEML6070\",\n     \"icon\": \"osem-sprinkles\"\n   }\n ],\n \"loc\": {\n   \"lng\": 8.6956,\n   \"lat\": 50.0430\n },\n \"image\": \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIVBMVEUAAABKrkMGteh0wW5Ixu931vKy3bO46fj/7hr/+J36/vyFw5EiAAAAAXRSTlMAQObYZgAAAF5JREFUeAFdjdECgzAIA1kIUvP/HzyhdrPe210L2GLYzhjj7VvRefmpn1MKFbdHUOzA9qRQEhIw3xMzEVeJDqkOrC9IJqWE7hFDLZ0Q6+zh7odsoU/j9qeDPXDf/cEX1xsDKIqAkK8AAAAASUVORK5CYII=\",\n \"mqtt\": {\n   \"url\": \"some url\",\n   \"topic\": \"some topic\",\n   \"messageFormat\": \"json\",\n   \"decodeOptions\": \"{\\\"jsonPath\\\":\\\"$.bla\\\"}\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.1",
    "group": "Boxes",
    "name": "updateBox",
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Boxes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-apikey",
            "description": "<p>the secret API key which corresponds to the <code>senseBoxId</code> parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-apikey header example:",
          "content": "x-apikey: 576efef4cb9b9ebe057bf7b4",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p>the request has invalid or missing credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\"code\":\"NotAuthorized\",\"message\":\"ApiKey is invalid or missing\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:senseBoxId",
    "title": "Validate authorization",
    "group": "Boxes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "returnBox",
            "description": "<p>if supplied and non-empty, returns the senseBox with the senseBoxId with hidden fields</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    },
    "description": "<p>Validate authorization through API key and senseBoxId. Will return status code 403 if invalid, 200 if valid.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Response",
            "description": "<p><code>{&quot;code&quot;: &quot;Authorized&quot;, &quot;message&quot;:&quot;ApiKey is valid&quot;}</code></p>"
          }
        ]
      }
    },
    "version": "0.0.1",
    "name": "validApiKey",
    "filename": "./lib/controllers/usersController.js",
    "groupTitle": "Boxes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-apikey",
            "description": "<p>the secret API key which corresponds to the <code>senseBoxId</code> parameter.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "x-apikey header example:",
          "content": "x-apikey: 576efef4cb9b9ebe057bf7b4",
          "type": "String"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "403",
            "description": "<p>the request has invalid or missing credentials.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\"code\":\"NotAuthorized\",\"message\":\"ApiKey is invalid or missing\"}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/statistics/idw",
    "title": "Get a Inverse Distance Weighting Interpolation as FeatureCollection",
    "description": "<p>Retrieve a JSON object containing a GeoJSON FeatureCollection with a computed Inverse Distance Interpolation for a certain region of interest and phenomenon and an array with equal interval breaks. Please be aware that requests with (areaSquareKilometers / cellWidth) &gt; 2500 will be rejected.</p>",
    "version": "0.0.1",
    "group": "Interpolation",
    "name": "calculateIdw",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phenomenon",
            "description": "<p>the name of the phenomenon you want to download the data for.</p>"
          },
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "from-date",
            "description": "<p>Beginning date of measurement data (default: 2 days ago from now)</p>"
          },
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "to-date",
            "description": "<p>End date of measurement data (default: now)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"indoor\"",
              "\"outdoor\""
            ],
            "optional": true,
            "field": "exposure",
            "description": "<p>only return sensors of boxes with the specified exposure. Can be indoor or outdoor. Default undecided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"hex\"",
              "\"square\"",
              "\"triangle\""
            ],
            "optional": true,
            "field": "gridType",
            "defaultValue": "hex",
            "description": "<p>The type of the grid for IDW calculation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"kilometers\"",
              "\"miles\""
            ],
            "optional": true,
            "field": "cellUnit",
            "defaultValue": "kilometers",
            "description": "<p>The unit for the width of the grid cells</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cellWidth",
            "defaultValue": "50",
            "description": "<p>The width of the grid cells in the unit given by the cellUnit parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "power",
            "defaultValue": "1",
            "description": "<p>The power of the IDW calculation</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "numClasses",
            "defaultValue": "6",
            "description": "<p>Number of classes in the breaks array</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bbox",
            "description": "<p>A bounding box containing 4 WGS84 coordinates separated by comata (,). Order is latitude, longitude and southwest, northeast.</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/statisticsController.js",
    "groupTitle": "Interpolation"
  },
  {
    "type": "get",
    "url": "/boxes/:senseBoxId/data/:sensorId?from-date=fromDate&to-datetoDate&download=true&format=json",
    "title": "Get the 10000 latest measurements for a sensor",
    "description": "<p>Get up to 10000 measurements from a sensor for a specific time frame, parameters <code>from-date</code> and <code>to-date</code> are optional. If not set, the last 48 hours are used. The maximum time frame is 1 month. If <code>download=true</code> <code>Content-disposition</code> headers will be set. Allows for JSON or CSV format.</p>",
    "version": "0.0.1",
    "group": "Measurements",
    "name": "getData",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "from-date",
            "description": "<p>Beginning date of measurement data (default: 48 hours ago from now)</p>"
          },
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "to-date",
            "description": "<p>End date of measurement data (default: now)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"json\"",
              "\"csv\""
            ],
            "optional": true,
            "field": "format",
            "defaultValue": "json",
            "description": "<p>Can be 'json' (default) or 'csv' (default: json)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "allowedValues": [
              "\"true\"",
              "\"false\""
            ],
            "optional": true,
            "field": "download",
            "description": "<p>if specified, the api will set the <code>content-disposition</code> header thus forcing browsers to download instead of displaying. Is always true for format csv.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":sensorId",
            "description": "<p>the ID of the sensor you are referring to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"comma\""
            ],
            "optional": true,
            "field": "separator",
            "description": "<p>Only for csv: the separator for csv. Possible values: <code>comma</code> for comma as separator, everything else: semicolon. Per default a semicolon is used. Alternatively you can use delimiter as parameter name.</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Measurements"
  },
  {
    "type": "get,post",
    "url": "/boxes/data?boxid=:senseBoxIds&from-date=:fromDate&to-date:toDate&phenomenon=:phenomenon",
    "title": "Get latest measurements for a phenomenon as CSV",
    "description": "<p>Download data of a given phenomenon from multiple selected senseBoxes as CSV</p>",
    "version": "0.1.0",
    "group": "Measurements",
    "name": "getDataMulti",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "senseBoxIds",
            "description": "<p>Comma separated list of senseBox IDs.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phenomenon",
            "description": "<p>the name of the phenomenon you want to download the data for.</p>"
          },
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "from-date",
            "description": "<p>Beginning date of measurement data (default: 15 days ago from now)</p>"
          },
          {
            "group": "Parameter",
            "type": "ISO8601Date",
            "optional": true,
            "field": "to-date",
            "description": "<p>End date of measurement data (default: now)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "columns",
            "defaultValue": "createdAt,value,lat,lng",
            "description": "<p>(optional) Comma separated list of columns to export. If omitted, columns createdAt, value, lat, lng are returned. Possible allowed values are createdAt, value, lat, lng, unit, boxId, sensorId, phenomenon, sensorType, boxName, exposure. The columns in the csv are like the order supplied in this parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"indoor\"",
              "\"outdoor\""
            ],
            "optional": true,
            "field": "exposure",
            "description": "<p>(optional) only return sensors of boxes with the specified exposure. Can be indoor or outdoor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"comma\""
            ],
            "optional": true,
            "field": "separator",
            "description": "<p>Only for csv: the separator for csv. Possible values: <code>comma</code> for comma as separator, everything else: semicolon. Per default a semicolon is used. Alternatively you can use delimiter as parameter name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bbox",
            "description": "<p>A bounding box containing 4 WGS84 coordinates separated by comata (,). Order is latitude, longitude and southwest, northeast.</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Measurements"
  },
  {
    "type": "get",
    "url": "/boxes/:senseBoxId/sensors",
    "title": "Get latest measurements of a senseBox",
    "description": "<p>Get the latest measurements of all sensors of the specified senseBox.</p>",
    "version": "0.0.1",
    "group": "Measurements",
    "name": "getMeasurements",
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Measurements",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/boxes/:senseBoxId/:sensorId",
    "title": "Post new measurement",
    "description": "<p>Posts a new measurement to a specific sensor of a box.</p>",
    "version": "0.0.1",
    "group": "Measurements",
    "name": "postNewMeasurement",
    "parameter": {
      "fields": {
        "JSON request body": [
          {
            "group": "RequestBody",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>the measured value of the sensor. Also accepts JSON float numbers.</p>"
          },
          {
            "group": "RequestBody",
            "type": "ISO8601Date",
            "optional": true,
            "field": "createdAt",
            "description": "<p>the timestamp of the measurement. Should be parseable by JavaScript.</p>"
          }
        ],
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":sensorId",
            "description": "<p>the ID of the sensor you are referring to.</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Measurements"
  },
  {
    "type": "post",
    "url": "/boxes/:boxId/data",
    "title": "Post multiple new measurements",
    "description": "<p>Post multiple new measurements in multiple formats to a box. Allows the use of csv, json array and json object notation.</p> <p><strong>CSV:</strong><br/> For data in csv format, first use <code>content-type: text/csv</code> as header, then submit multiple values as lines in <code>sensorId,value,[createdAt]</code> form. Timestamp is optional. Do not submit a header.</p> <p><strong>JSON Array:</strong><br/> You can submit your data as array. Your measurements should be objects with the keys <code>sensor</code>, <code>value</code> and optionally <code>createdAt</code>. Specify the header <code>content-type: application/json</code>.</p> <p><strong>JSON Object:</strong><br/> The third form is to encode your measurements in an object. Here, the keys of the object are the sensorIds, the values of the object are either just the <code>value</code> of your measurement or an array of the form <code>[value, createdAt]</code></p> <p>For all encodings, the maximum count of values in one request is 2500.</p>",
    "version": "0.1.0",
    "group": "Measurements",
    "name": "postNewMeasurements",
    "parameter": {
      "examples": [
        {
          "title": "JSON-Object:",
          "content": "{\n  \"sensorID\": \"value\",\n  \"anotherSensorID\": [\"value\", \"createdAt as ISO8601-timestamp\"],\n  \"sensorIDtheThird\": [\"value\"]\n  ...\n}",
          "type": "application/json"
        },
        {
          "title": "JSON-Array:",
          "content": "[\n  {\"sensor\":\"sensorID\", \"value\":\"value\"},\n  {\"sensor\":\"anotherSensorId\", \"value\":\"value\", \"createdAt\": \"ISO8601-timestamp\"}\n  ...\n]",
          "type": "application/json"
        },
        {
          "title": "CSV:",
          "content": "sensorID,value\nanotherSensorId,value,ISO8601-timestamp\nsensorIDtheThird,value\n...",
          "type": "text/csv"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": ":senseBoxId",
            "description": "<p>the ID of the senseBox you are referring to.</p>"
          }
        ]
      }
    },
    "filename": "./lib/controllers/boxesController.js",
    "groupTitle": "Measurements"
  },
  {
    "type": "get",
    "url": "/stats",
    "title": "Get some statistics about the database",
    "description": "<p>returns an array with three numbers which denominates the count of senseBoxes, the count of measurements and the count of measurements in the last minute.</p>",
    "name": "getStatistics",
    "group": "Misc",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "[8,13, 2]",
          "content": "[8,13, 2]",
          "type": "json"
        }
      ]
    },
    "filename": "./lib/controllers/statisticsController.js",
    "groupTitle": "Misc"
  }
] });