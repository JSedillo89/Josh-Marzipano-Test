var APP_DATA = {
  "scenes": [
    {
      "id": "0-u-train-of-imagination",
      "name": "(U) Train of IMAGINATION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -2.2647573948252138,
        "pitch": -0.06386997424571916,
        "fov": 1.49683515616117
      },
      "linkHotspots": [
        {
          "yaw": -1.7230122317343763,
          "pitch": -0.06266466121557102,
          "rotation": 0,
          "target": "1-u-inside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.495450093026225,
          "pitch": -0.06366594864319985,
          "title": "Inside of Train",
          "text": "(U) The inside of this train is actually not the inside of a train. It is an illusion. This is a test to see how the Info Hotspot tool behaves with larger bodies of text. TEST TEST TEST TEST TEST TEST!!!"
        }
      ]
    },
    {
      "id": "1-u-inside",
      "name": "(U) INSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.9385115289130344,
        "pitch": 0.12359189362798162,
        "fov": 1.49683515616117
      },
      "linkHotspots": [
        {
          "yaw": 0.19042144967972874,
          "pitch": -0.06940904148559213,
          "rotation": 6.283185307179586,
          "target": "2-u-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0013262793667508,
          "pitch": -0.11604968135353921,
          "title": "(U) Large Hole",
          "text": "(U) The person who lives here has some anger issues. Poor Wall..."
        }
      ]
    },
    {
      "id": "2-u-outside",
      "name": "(U) OUTSIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.656599192515671,
        "pitch": -0.027464865250662385,
        "fov": 1.49683515616117
      },
      "linkHotspots": [
        {
          "yaw": -2.65233250133036,
          "pitch": 1.2390199123462686,
          "rotation": 3.141592653589793,
          "target": "3-u-space-brain"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6340029973602146,
          "pitch": -0.4619738339665851,
          "title": "(U) Now THIS is peak...",
          "text": "(U) Seriously though..it's a peak"
        },
        {
          "yaw": -2.46539850278724,
          "pitch": 1.059427123677624,
          "title": "(U) Well hello there",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-u-space-brain",
      "name": "(U) SPACE BRAIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.038870677852514746,
        "pitch": 1.2120132535676973,
        "fov": 1.49683515616117
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": -0.3093729135888985,
          "pitch": 0.8502715669546248,
          "title": "(U) Earth",
          "text": "(U) Hellllllo from Earth"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
