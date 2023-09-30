(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D98AA1FB_D6EA_F0B6_41DA_73AA5F465FF0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_767FC595_604D_CC0A_41D1_FD26BA66B8D7",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_D9A1BE15_D6EA_D372_41C6_353BBC24A55B",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.7,
   "yaw": 179.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74"
  },
  {
   "backwardYaw": 177.2,
   "yaw": -0.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720",
 "thumbnailUrl": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5B0C078C_48C3_2C31_41BA_A96F67BE2744",
  "this.overlay_5B1B3E2A_48C1_1C71_41C4_22642104F9E9",
  "this.overlay_721D740F_601C_2E9A_41C9_4CD192C5181D",
  "this.popup_72891D6A_601C_1E9A_41D7_561F06A7A886"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D867C0C4_D6EA_F0D2_41B9_52E939EE9690",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB1EF4A4_D6EA_F753_41D7_98851882C75C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D90A8731_D6EA_F1B5_41D7_567496601664",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8FB0034_D6EA_CFB3_41D4_0D52BCD8AE07",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D94746E3_D6EA_F0D6_41CF_C9F62F61E5D0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.22,
   "yaw": 176.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F"
  },
  {
   "backwardYaw": -179.52,
   "yaw": -3.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6",
 "thumbnailUrl": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5E4A6C68_4947_1CF1_41AD_FA5CA85EE4B2",
  "this.overlay_5E45EAB5_4941_E453_41C7_15A2D94E8242",
  "this.overlay_702EF513_7EC5_8145_41DF_9B43636CE8C4",
  "this.popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB059495_D6EA_F772_41C0_D57AE67CCE89",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_77ED23DA_600C_29BA_41C2_636C9DE5B749",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB79D3BB_D6EA_F0B6_41AE_BBB653C355A9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9D751B8_D6EA_F0B2_41CA_31692EE45762",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB5DA409_D6EA_F755_41E9_BCB244601C33",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.16,
   "yaw": 0.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB"
  },
  {
   "backwardYaw": -4.66,
   "yaw": 178.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8108BB_45E7_095B_41B1_16C01C691254",
 "thumbnailUrl": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_52A24846_463F_092D_41A3_4C0FAC5F73F0",
  "this.overlay_52B75F55_4639_072F_41CC_B71434508AEE"
 ]
},
{
 "id": "ImageResource_77F773DD_600C_29BE_4192_BA1271E5603C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8B76526_D6EA_F15F_41E4_E07A479A3191",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB73AF7B_D6EA_D1B6_41A6_74C58FDE2A77",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.43,
   "yaw": 177.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079"
  },
  {
   "backwardYaw": 179.59,
   "yaw": -2.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B924F_45EB_393B_41A7_B89773F28069",
 "thumbnailUrl": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_69481EAC_4B5F_1C71_41C6_70C3E3643514",
  "this.overlay_694FD907_4B41_643F_41B9_632C6719CB3D",
  "this.overlay_70215DB9_7EDD_8145_41D8_65C0502A16B9",
  "this.popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24",
  "this.overlay_71F01049_7EC4_9FC2_41DA_14BBF84DB2C7",
  "this.popup_705ADA24_7EC7_8343_41D6_DD1420E26017"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9E2D175_D6EA_F1B2_41CD_B8622CD1FAFE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -5.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9C0762E_D6EA_F3AE_41DD_95D46558A3C6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 64.76,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.7,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_70024505_7EDC_814D_41D6_9579F8550A41",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 9
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -118.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D983268B_D6EA_F356_41E8_1BC98407620D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F84D840_45E9_0925_41BC_23E8F5463726_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 1.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D97CF241_D6EA_F3D2_41DD_8387BC10A1B0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_712894CD_6004_6F9E_41D7_F7ED52F5B0FC",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_0.png",
   "width": 3837,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_1.png",
   "width": 3579,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_2.png",
   "width": 1789,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_3.png",
   "width": 894,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.77,
   "yaw": 0.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED"
  },
  {
   "backwardYaw": -2.87,
   "yaw": -178.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA",
 "thumbnailUrl": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_604880E3_4B41_65F7_41C5_9E3090D5F3E5",
  "this.overlay_60C87ECC_4B7F_1C31_4199_81EF620D010A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -112.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6CEF76A_D6EA_F1D6_41D9_696A364FCDD3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D81C8142_D6EA_F1D6_41E1_85CD6FE18520",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.27,
   "yaw": -2.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E"
  },
  {
   "backwardYaw": -0.48,
   "yaw": 177.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9",
 "thumbnailUrl": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C5E0D58_48DF_FCD1_417C_0642B22680E7",
  "this.overlay_5C377B69_48C1_24F3_41A7_8E2BD21768C7"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 1.15,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.15,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_7108EBCB_600C_399A_41D4_F740A59FD155",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_3.png",
    "width": 895,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 13.18
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D912E2DC_D6EA_F0F2_41EA_32D3974D099B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.98,
   "yaw": -4.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254"
  },
  {
   "backwardYaw": -0.44,
   "yaw": 175.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501"
  }
 ],
 "hfovMin": "150%",
 "audios": [
  "this.audio_6B9A23F2_7F43_80C7_41DF_889456213974"
 ],
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FAE6A11_45E7_0927_41D0_94664647D77B",
 "thumbnailUrl": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5226BF9F_463B_075B_41B8_F412CF157673",
  "this.overlay_522B4705_463B_072F_41C5_5FD64EE533FE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB2BA438_D6EA_F7B2_41AF_5B3F874F996E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_712854CC_6004_6F9E_41C3_60171614D8E6",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_0.png",
   "width": 3837,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_1.png",
   "width": 3579,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_2.png",
   "width": 1789,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_3.png",
   "width": 894,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.52,
   "yaw": 177.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB"
  },
  {
   "backwardYaw": 174.51,
   "yaw": -0.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E",
 "thumbnailUrl": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_52FFBAE8_4941_25F1_41CC_3FA6E9B625B2",
  "this.overlay_52D17055_494F_24D3_41CF_7D791E857B6E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6ED574D_D6EA_F1D2_41E8_CA31A13619CB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB52142A_D6EA_F756_41D5_7F93FD9BB593",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9A891D2_D6EA_F0F6_41D9_1EBE68E570C3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D85FD0F0_D6EA_F0B2_41B2_F24999966339",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.12,
   "yaw": -174.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71"
  },
  {
   "backwardYaw": 177.95,
   "yaw": 6.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803",
 "thumbnailUrl": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_56D9569C_49C1_6C51_41C5_58BA3F2AE7DD",
  "this.overlay_55CEA084_4B43_2431_41CB_AAA6D7A339CC"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB571418_D6EA_F772_41CC_6B182620F826",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB269448_D6EA_F7D2_41CE_AE131944ABA2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D86F7553_D6EA_F1F6_41D6_C5951FB293C9",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -84.59,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.74,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.92
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5"
  },
  {
   "backwardYaw": 170.31,
   "yaw": 1.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9",
 "thumbnailUrl": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7D8DDA53_4B43_24D7_41A7_054569584434",
  "this.overlay_72BCBBA1_4B41_2473_4195_012B734E1425"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.12,
   "yaw": 0.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079"
  },
  {
   "backwardYaw": 6.62,
   "yaw": 177.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8A7728_45EB_0765_41CE_101928D8A27D",
 "thumbnailUrl": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6AAF4815_4B41_6453_41CF_3522DA726EC8",
  "this.overlay_6AF2718A_4B47_2430_41C6_1F7DE812E32F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D805F5C0_D6EA_F0D2_41E2_17EEE98E0C24",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.76,
   "yaw": -177.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254"
  },
  {
   "backwardYaw": 171.77,
   "yaw": 2.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB",
 "thumbnailUrl": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_53305389_4639_7F27_41C1_EF5B5934215C",
  "this.overlay_531A17D6_4627_072C_41C9_CAD354AA845E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 13.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9FD45FC_D6EA_F0B2_41E1_52796DCFD966",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 59.55,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.75,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.3
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -71.76,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.77,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71851EC6_601C_1B8A_4194_4F13CF507CA9",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 2.82
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.05,
   "yaw": 2.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963"
  },
  {
   "backwardYaw": 0.05,
   "yaw": -178.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED",
 "thumbnailUrl": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5B0B5D82_4679_0F81_41B0_6B4B8E76F304",
  "this.overlay_46C9FF78_48C1_1CD1_41C6_4C538C0D2090"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D83275B3_D6EA_F0B6_41CA_E8249EF297DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.71,
   "yaw": -1.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069"
  },
  {
   "backwardYaw": 0.11,
   "yaw": 177.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079",
 "thumbnailUrl": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_68309F64_4B41_1CF0_418B_94996451B2F0",
  "this.overlay_6869E960_4B43_64F1_4190_C938A1C991CF",
  "this.overlay_70250225_7EC4_834D_41B6_FC2F1A17E3AF",
  "this.popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 0, 1)",
   "camera": "this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 1, 2)",
   "camera": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 2, 3)",
   "camera": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 3, 4)",
   "camera": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 4, 5)",
   "camera": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 5, 6)",
   "camera": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 6, 7)",
   "camera": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 7, 8)",
   "camera": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 8, 9)",
   "camera": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 9, 10)",
   "camera": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 10, 11)",
   "camera": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 11, 12)",
   "camera": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 12, 13)",
   "camera": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 13, 14)",
   "camera": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 14, 15)",
   "camera": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 15, 16)",
   "camera": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 16, 17)",
   "camera": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 17, 18)",
   "camera": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 18, 19)",
   "camera": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 19, 20)",
   "camera": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 20, 21)",
   "camera": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 21, 22)",
   "camera": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 22, 23)",
   "camera": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 23, 24)",
   "camera": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 24, 25)",
   "camera": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 25, 26)",
   "camera": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 26, 27)",
   "camera": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 27, 28)",
   "camera": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 28, 29)",
   "camera": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 29, 30)",
   "camera": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 30, 31)",
   "camera": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 31, 32)",
   "camera": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 32, 33)",
   "camera": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 33, 34)",
   "camera": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 34, 35)",
   "camera": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 35, 36)",
   "camera": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 36, 37)",
   "camera": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 37, 38)",
   "camera": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 38, 39)",
   "camera": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 39, 40)",
   "camera": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 40, 41)",
   "camera": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 41, 42)",
   "camera": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 42, 43)",
   "camera": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 43, 44)",
   "camera": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 44, 45)",
   "camera": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 45, 46)",
   "camera": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 46, 47)",
   "camera": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 47, 48)",
   "camera": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 48, 49)",
   "camera": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 49, 50)",
   "camera": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 50, 51)",
   "camera": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 51, 52)",
   "camera": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 52, 53)",
   "camera": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 53, 54)",
   "camera": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 54, 55)",
   "camera": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 55, 56)",
   "camera": "this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 56, 57)",
   "camera": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 57, 58)",
   "camera": "this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 58, 59)",
   "camera": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 59, 60)",
   "camera": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 60, 61)",
   "camera": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 61, 62)",
   "camera": "this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 62, 63)",
   "camera": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 63, 64)",
   "camera": "this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_C3298E16_D13D_A9DE_41CB_E9116BFD6CF5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 64, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 64)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist, 64, 0)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -175.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D91FBEB1_D6EA_D0B2_41EA_5A0075532FF8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_7133E4B9_6004_6FF9_41CA_394BD33F4716",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_0.png",
   "width": 3838,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_1.png",
   "width": 3580,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_2.png",
   "width": 1790,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_3.png",
   "width": 895,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -88.11,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.74,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_725D21B2_6004_298A_41BE_FD9353ED3A4F",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.75
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 86.19,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.77,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.68
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9F5A18A_D6EA_F156_41D8_E4B6FEBB9D2F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.61,
   "yaw": 2.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707"
  },
  {
   "backwardYaw": -3.65,
   "yaw": -179.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF",
 "thumbnailUrl": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5E05CEB2_4619_0D81_41B0_858A6ABE44DE",
  "this.overlay_5E64BA95_461F_1583_41C5_DE244D2F34E4"
 ]
},
{
 "items": [
  {
   "media": "this.video_C3CDE154_D104_5A52_41E6_073C3E45908E",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_D9A11E15_D6EA_D372_41E9_29E2C72F1794, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_D9A11E15_D6EA_D372_41E9_29E2C72F1794, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_D9A11E15_D6EA_D372_41E9_29E2C72F1794",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D85AE58A_D6EA_F156_41D4_0FAB6C5EF653",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB7E9F5D_D6EA_D1F2_41E7_0C4CD61E9831",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -82.39,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.73,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_716DB464_7EC3_87C3_41CF_2197692629E4",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.36
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 116.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB7383CB_D6EA_F0D6_4174_F23834517409",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_712BD4CB_6004_6F9A_41CA_99139B342446",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_0.png",
   "width": 3837,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_1.png",
   "width": 3579,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_2.png",
   "width": 1789,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_3.png",
   "width": 894,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -2.78,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.98,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_7256E174_600C_268E_41D4_67719EAAD59E",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_3.png",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.38
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB537FBF_D6EA_D0AE_41D0_F04A02FD3519",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.87,
   "yaw": 175.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C"
  },
  {
   "backwardYaw": 175.2,
   "yaw": -2.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019",
 "thumbnailUrl": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_580645ED_48C1_2FF3_41AD_1846500D04AC",
  "this.overlay_5855E2C6_48C1_2431_4199_062FD4B47266",
  "this.overlay_71846469_6004_EE86_4196_5ED033B98555",
  "this.popup_71ABB918_6004_2686_41D1_5E03C9C5E102"
 ]
},
{
 "id": "ImageResource_77F853EA_600C_299A_41AE_9C23DABFAA9C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -28.07,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.56,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71B97021_6004_2686_41C6_407E2ECB8B4A",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71B97021_6004_2686_41C6_407E2ECB8B4A_0_3.png",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": -6.27
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6FD275B_D6EA_F1F5_41CD_A2FC21DEC51F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB63AF51_D6EA_D1F2_41D3_DB0664F35904",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8DF64FE_D6EA_F0AE_41BC_BE075B603B4D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.24,
   "yaw": -4.57,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C"
  },
  {
   "backwardYaw": -0.52,
   "yaw": 174.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12",
 "thumbnailUrl": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_55ACBA18_4941_2451_418B_BDACED87B7AA",
  "this.overlay_558A7A70_4943_64D1_41BA_62E55795BDE8",
  "this.overlay_70266E05_7EC5_834D_41B1_CD23FBCE492F",
  "this.popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D92ED28A_D6EA_F356_41D7_5035836F4EE4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D916EEBF_D6EA_D0AE_41CF_4537EDEE352C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 86.59,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.75,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.75
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9CE3613_D6EA_F376_41C6_0EAAE4F5028B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6E579E94_7EC3_8342_41D4_EB1ADB273830",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8F15044_D6EA_CFD2_4191_44585CC661F4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.75,
   "yaw": 177.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53"
  },
  {
   "backwardYaw": 176.49,
   "yaw": 0.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703",
 "thumbnailUrl": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_515C9F7B_4627_07DB_41C2_891C0FDF9180",
  "this.overlay_50ACF6EC_4619_06FD_41B7_FDAF0B1D9431"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB28AFCC_D6EA_D0D3_419A_6D3B513E05E3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6E55BE95_7EC3_8342_41B4_15C6E0FEEAA7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_0.png",
   "width": 4732,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_1.png",
   "width": 3909,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_2.png",
   "width": 1954,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB329476_D6EA_F7BE_41EA_C86E8C5BDFDA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.76,
   "yaw": 129.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D"
  },
  {
   "backwardYaw": 179.43,
   "yaw": -5.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505",
 "thumbnailUrl": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_74377DC6_4941_3C31_41CE_847E751A7891",
  "this.overlay_74DC37CC_4947_2C31_41C4_26B56E7420D0"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -80.95,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.77,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.93
},
{
 "autoplay": true,
 "loop": true,
 "audio": "this.audioresource_6B9A13F2_7F43_80C7_41D3_F9EBE1B2EA29",
 "id": "audio_6B9A23F2_7F43_80C7_41DF_889456213974",
 "class": "PanoramaAudio",
 "data": {
  "label": "Bali-World-Music_-Gus-Teja_-Bali-Jalan-Jalan"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB33AFEA_D6EA_D0D6_41E9_41A3AFDB30C1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.8,
   "yaw": -1.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D"
  },
  {
   "backwardYaw": -3,
   "yaw": -179.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D",
 "thumbnailUrl": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6CD3D6A8_4B40_EC71_41AB_6657A18C04B5",
  "this.overlay_6D0341D7_4B43_27DF_41BC_262A5636F54C"
 ]
},
{
 "id": "ImageResource_713584C8_6004_6F86_41AC_491F786CEA1A",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_0.png",
   "width": 3838,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_1.png",
   "width": 3580,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_2.png",
   "width": 1790,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_3.png",
   "width": 895,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7108EBCB_600C_399A_41D4_F740A59FD155_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D84D10E1_D6EA_F0D5_41D2_708B209A61C8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB0BB485_D6EA_F752_41D6_9FC0FBCE8322",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8895537_D6EA_F1BD_41C0_624ED1C8E2AC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D958B6F6_D6EA_F0BE_41D6_1E6B8EA04F2C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB78FF6C_D6EA_D1D3_41D4_5C727F031EE2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.45,
   "yaw": 1.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B"
  },
  {
   "backwardYaw": 0.55,
   "yaw": -177.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED",
 "thumbnailUrl": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_61A6CC27_4B43_3C70_41C4_4A7BBBD35842",
  "this.overlay_6637F7A0_4B41_EC70_41CD_12E35A78C6DA",
  "this.overlay_70370532_7EC5_8146_41D3_CCE883930E7B",
  "this.popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -66.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9E915E7_D6EA_F0DE_41E5_C1E6A8CBAB41",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8A49519_D6EA_F172_41E3_8670065B9558",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 2.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9A23663_D6EA_F3D6_4188_BC4AC74BA77B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "touchControlMode": "drag_rotation",
 "buttonMoveRight": "this.IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0",
 "buttonToggleGyroscope": "this.Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F",
 "buttonMoveLeft": "this.IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8",
 "buttonZoomOut": "this.IconButton_6EF733E2_604E_C40E_41D3_652414EDD881",
 "buttonPause": "this.IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83",
 "viewerArea": "this.MainViewer",
 "buttonPlayLeft": "this.IconButton_6EF713E2_604E_C40E_41D3_75088808C976",
 "buttonZoomIn": "this.IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E",
 "buttonRestart": "this.IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766",
 "buttonMoveUp": "this.IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256",
 "buttonMoveDown": "this.IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "buttonToggleHotspots": "this.Button_DBF14261_CF3E_70F8_41E2_768DB7613156",
 "mouseControlMode": "drag_acceleration"
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_DAD52E46_CF36_B038_41E8_897E1F6CD704.ogg",
  "mp3Url": "media/audio_DAD52E46_CF36_B038_41E8_897E1F6CD704.mp3",
  "class": "AudioResource"
 },
 "id": "audio_DAD52E46_CF36_B038_41E8_897E1F6CD704",
 "class": "MediaAudio",
 "data": {
  "label": "Bali-World-Music_-Gus-Teja_-Bali-Jalan-Jalan"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonRestart": "this.IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 42.18,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.73,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_705ADA24_7EC7_8343_41D6_DD1420E26017",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.95
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.55,
   "yaw": 1.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2"
  },
  {
   "backwardYaw": -0.96,
   "yaw": -177.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2",
 "thumbnailUrl": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5CF844D0_4669_1D81_41CD_9CADB04204B8",
  "this.overlay_5CE9817B_466B_7486_41C5_636FFFFC99EB"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 123.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB5B5FAD_D6EA_D152_41D8_EA705AB1B4B8",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6EA1BE8B_7EC3_8345_41B1_72EFA4459825",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 176.95,
   "yaw": 1.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7"
  },
  {
   "backwardYaw": -0.02,
   "yaw": -179.03,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C",
 "thumbnailUrl": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_656C0718_4B40_EC51_41C6_D607A08CE0F6",
  "this.overlay_65DE53E3_4B41_2BF0_41C8_0F729CDF3233"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -103.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D848157B_D6EA_F1B6_41E1_1CD43A1B1A9A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.76,
   "yaw": 178.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B"
  },
  {
   "backwardYaw": -179.03,
   "yaw": -0.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB",
 "thumbnailUrl": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_64443542_4B41_6C31_41C2_99BEECA8184D",
  "this.overlay_0DD39CD9_48C1_7DD3_41B7_748611DAD793"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D89C8545_D6EA_F1D2_41D5_D92887A24DCA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -61.39,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.7,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 9.21
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 19.74,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.24,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_3.png",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 7.43
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F893230_45E9_F965_418A_4CD22586F4C2_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "duration": 5000,
 "label": "menu-01-01",
 "id": "album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_0",
 "thumbnailUrl": "media/album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_0_t.png",
 "width": 3837,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_0.png"
   }
  ]
 },
 "class": "Photo",
 "height": 3909
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB4D4F88_D6EA_D152_41D7_752E674453E0",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 8.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D80AA130_D6EA_F1B2_41E6_B5F881AC4B62",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 61.4,
   "yaw": -63.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Spot Foto",
 "id": "panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB",
 "thumbnailUrl": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_719F5314_4BC3_E451_41C8_A72B2BC97CAC",
  "this.overlay_715FB011_600C_2686_41CD_A2005292BC3A",
  "this.popup_7108EBCB_600C_399A_41D4_F740A59FD155"
 ]
},
{
 "id": "ImageResource_7134F4C5_6004_6F8E_41C6_2A9414FC3008",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_0.png",
   "width": 3837,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_1.png",
   "width": 3579,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_2.png",
   "width": 1789,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_3.png",
   "width": 894,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_7256E174_600C_268E_41D4_67719EAAD59E_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D82C1597_D6EA_F17E_41C1_893470113D51",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8C39052_D6EA_CFF6_41E0_A3019CBE5489",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6F3B2FC_D6EA_F0B2_41E8_594543F4DB54",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.61,
   "yaw": -176.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED"
  },
  {
   "backwardYaw": 178.99,
   "yaw": 1.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B",
 "thumbnailUrl": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_66BF22A5_4B47_2473_41D0_4AE7869DF9AE",
  "this.overlay_67030588_4B41_EC31_41C7_7615A613B491",
  "this.overlay_714E1D32_600C_7E8A_4190_EB55B329B942",
  "this.popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB"
 ]
},
{
 "label": "Photo Album menu-01-01",
 "thumbnailUrl": "media/album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_t.png",
 "playList": "this.album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_AlbumPlayList",
 "id": "album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4",
 "class": "PhotoAlbum"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6E1AEDB_D6EA_D0F6_41E7_6DA994F3E81D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D879D0CD_D6EA_F0D2_41C2_D67CD3C28F9A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.07,
   "yaw": -5.99,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53"
  },
  {
   "backwardYaw": 2.06,
   "yaw": 171.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C",
 "thumbnailUrl": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_505FC5EF_462B_7AFB_41C0_B647F7BB9793",
  "this.overlay_53BE9703_4629_072E_41B0_2772E18EF9EE"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB17B4B6_D6EA_F0BE_41E5_C6E7B5A9FA19",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D99AF215_D6EA_F372_41D0_3058B0CEBDEC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C697135C_D6EA_F1F2_4192_9C2EC49A3B4C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.94,
   "yaw": 179.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069"
  },
  {
   "backwardYaw": 177.66,
   "yaw": 0.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6",
 "thumbnailUrl": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6E2D1ED4_4B43_1DD1_41A1_D1D4E3F47392",
  "this.overlay_6ED1C0E0_4B41_25F1_41B7_2D09CEDFA7A4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8E70024_D6EA_CF52_41C3_B0543129F9E3",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D91B773D_D6EA_F1B2_41DA_337D9519629B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_713474C2_6004_6F8A_41CB_DEC9D6FED30D",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_0.png",
   "width": 3837,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_1.png",
   "width": 3579,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_2.png",
   "width": 1789,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_3.png",
   "width": 894,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9D00645_D6EA_F3D2_41DD_A5E668AD7C6D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB4953EA_D6EA_F0D6_41E3_F8082AC6C278",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9C6F1A2_D6EA_F157_41E2_E378161E3A07",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8E364D4_D6EA_F0F2_41E2_8F7825E81B94",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_77E993DC_600C_29BE_41D6_365F67EA99B7",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71851EC6_601C_1B8A_4194_4F13CF507CA9_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB699F43_D6EA_D1D6_41C9_D90D5BF6AB26",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.4,
   "yaw": 44.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893"
  },
  {
   "backwardYaw": 67.59,
   "yaw": 151.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7",
 "thumbnailUrl": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7E2BDFC2_4B41_3C31_41C2_A0A8B297AC1E",
  "this.overlay_7EEC7C9E_4B40_FC51_41CB_5D99075CAAF3",
  "this.overlay_714A24C6_600C_2F8A_41B9_DE25CC5441CD",
  "this.popup_7256E174_600C_268E_41D4_67719EAAD59E"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D928970D_D6EA_F16D_41E1_2120FBC3B2DE",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D88FE095_D6EA_CF72_41DB_B6E148BF6610",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D89520B4_D6EA_F0B2_41E5_07439AE0DD56",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D862855F_D6EA_F1EE_41E9_AC8319605E1C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 11.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D930C2B2_D6EA_F0B6_4198_D2984B8D7418",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8F8E4E3_D6EA_F0D6_41E4_AE16B56E1E46",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C687034C_D6EA_F1D3_4189_B8EA57152466",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D817F5CD_D6EA_F0ED_41E4_DE5E2B739F50",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "camera": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "camera": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "camera": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "camera": "this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "camera": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "camera": "this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.video_C3298E16_D13D_A9DE_41CB_E9116BFD6CF5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 64, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 64)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 64, 0)",
   "player": "this.MainViewerVideoPlayer",
   "end": "this.trigger('tourEnded')",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.49,
   "yaw": -3.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF"
  },
  {
   "backwardYaw": -3.04,
   "yaw": 175.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8AECB9_45E9_0964_419D_0883740A40F4",
 "thumbnailUrl": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5E8371F5_4627_1782_41C3_AB09AFBD9AB7",
  "this.overlay_5EBFB304_461B_1481_41B1_2F83A08338CC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.11,
   "yaw": -176.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C"
  },
  {
   "backwardYaw": 179.33,
   "yaw": 3.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74",
 "thumbnailUrl": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5BCD962F_48C7_2C4F_41CB_1C199B37501C",
  "this.overlay_5BCAD828_48C1_2471_41C1_40BFF910F473"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -4.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB42C3FC_D6EA_F0B2_41DE_09D02758CF89",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "tes2",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C3298E16_D13D_A9DE_41CB_E9116BFD6CF5_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_C3298E16_D13D_A9DE_41CB_E9116BFD6CF5",
 "class": "Video",
 "height": 1050,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1050,
  "mp4Url": "media/video_C3298E16_D13D_A9DE_41CB_E9116BFD6CF5.mp4"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D874956D_D6EA_F1D2_41E0_CADED5425550",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.29,
   "yaw": -2.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C"
  },
  {
   "backwardYaw": -2.66,
   "yaw": 175.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F892420_45E9_3965_41A1_D1A0F209CA02",
 "thumbnailUrl": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_59447F77_48C3_3CD0_41A1_C7B7527CD096",
  "this.overlay_59A98E2D_48C1_3C73_41B3_C150C693885F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6E5D8E9C_7EC3_8342_41DE_3B2334FD7B42",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 63.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB4F23DD_D6EA_F0F2_41D8_9F9AD57FBBE5",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.69,
   "yaw": -2.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0"
  },
  {
   "backwardYaw": 1.81,
   "yaw": 176.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F893230_45E9_F965_418A_4CD22586F4C2",
 "thumbnailUrl": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C7CEAC2_4669_1586_41C9_F0BDB3026767",
  "this.overlay_5C5043C7_466F_1B8E_41CA_AA39D3051ECA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_77EB83DB_600C_29BA_41C0_6A0170382143",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6EB2ECD_D6EA_D0D2_41CD_D5257D623FAC",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.35,
   "yaw": 3.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74"
  },
  {
   "backwardYaw": -2.69,
   "yaw": -177.29,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C",
 "thumbnailUrl": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5AAC10BA_48C0_E451_41A1_6DCA20A436E2",
  "this.overlay_5AA24109_48C1_2433_41BE_E6E2A6081D6B",
  "this.overlay_719B3D40_6004_1E86_41C1_4434F4E58167",
  "this.popup_71851EC6_601C_1B8A_4194_4F13CF507CA9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -62.49,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.26,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71900BF3_6004_398A_41B7_AE6FA4660427",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71900BF3_6004_398A_41B7_AE6FA4660427_0_3.png",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.71
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0,
   "yaw": -174.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963"
  },
  {
   "backwardYaw": 175.72,
   "yaw": 4.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C",
 "thumbnailUrl": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_472CC5EC_48C1_6FF0_41AA_4448ABADCC67",
  "this.overlay_4730FDA5_48C3_3C73_41C5_412CBF09EA01",
  "this.overlay_7242B97B_6004_197A_41D6_3900C7E37F90",
  "this.popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.57,
   "yaw": 179.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF"
  },
  {
   "backwardYaw": 179.82,
   "yaw": 1.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707",
 "thumbnailUrl": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5FEDC0C4_4619_1581_41C1_D5A68F2A68BA",
  "this.overlay_5F90FE90_461B_0D81_41C3_BE9D69C8BBE5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -174.1,
   "yaw": 0,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C"
  },
  {
   "backwardYaw": 2.6,
   "yaw": 179.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963",
 "thumbnailUrl": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_47E05B60_48C7_64F1_41B6_A9122C2AA661",
  "this.overlay_47F1896E_48C0_E4F1_41A7_8ED48FA05EB9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.17,
   "yaw": -2.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB"
  },
  {
   "backwardYaw": 0.88,
   "yaw": 175.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86",
 "thumbnailUrl": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_50F6EAF0_495F_E5D0_41CD_424A7AB3F97C",
  "this.overlay_50D85ED6_4941_1DD0_41C3_3FE567DF22D0",
  "this.overlay_7201765A_6004_6ABA_41CE_38E4F9449F5C",
  "this.popup_725D21B2_6004_298A_41BE_FD9353ED3A4F",
  "this.overlay_71D014CD_7EDD_80C2_41CA_0136F3CF7B83",
  "this.popup_70024505_7EDC_814D_41D6_9579F8550A41"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -128.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D837111F_D6EA_F16E_41C7_5CE9D17A4592",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6EAC5E91_7EC3_8342_417E_C3208FD09FBE",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1,
   "yaw": 179.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C"
  },
  {
   "backwardYaw": -174.78,
   "yaw": -0.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8BAA53_45EB_092B_41AF_894773C86A71",
 "thumbnailUrl": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_57A0D076_4941_64D1_4186_2E45D08B16F0",
  "this.overlay_5790BAE2_4940_E5F1_41C5_CCBA24BBE431"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "buttonRestart": "this.IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766",
 "buttonPause": "this.IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0",
 "id": "MainViewerVideoPlayer",
 "class": "VideoPlayer"
},
{
 "id": "ImageResource_712B44CB_6004_6F9A_41BC_EAC90DCB3CC6",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_0.png",
   "width": 3838,
   "class": "ImageResourceLevel",
   "height": 4391
  },
  {
   "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_1.png",
   "width": 3580,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_2.png",
   "width": 1790,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_3.png",
   "width": 895,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_4.png",
   "width": 447,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.16,
   "yaw": 179.82,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707"
  },
  {
   "backwardYaw": -177.77,
   "yaw": -0.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8BE504_45E9_3B2D_419A_B933E9065526",
 "thumbnailUrl": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5F6AE555_4619_7C83_41C5_33EBAF3E0AA4",
  "this.overlay_5F3D600B_4667_3487_41CC_F9B533BF8EBD",
  "this.overlay_71B80847_600D_E68A_41BA_C13FE034A7AE",
  "this.popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": 95.24,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.76,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.63
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -56.12,
   "yaw": -43.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18",
 "thumbnailUrl": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_09E0BA71_4941_E4D3_41BD_29D5C40204BE",
  "this.overlay_7104F472_6003_EE8A_41A3_4CA08C48BAC4",
  "this.popup_710F14A2_6004_EF8A_41B4_0F22901386E6",
  "this.overlay_71308210_6004_2A86_41D4_13BF2CBEB1D8",
  "this.popup_722F87F0_6004_6987_41D3_557582944A58",
  "this.overlay_714E6F7A_6004_197A_41D5_5F3F0EE3D708",
  "this.popup_71900BF3_6004_398A_41B7_AE6FA4660427"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.61,
   "yaw": 0.88,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86"
  },
  {
   "backwardYaw": -3.3,
   "yaw": -179.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA",
 "thumbnailUrl": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_511336E1_4943_EDF3_41C8_3B875C8623D7",
  "this.overlay_5EDEC71C_4940_EC51_41C0_F00023991816"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -177.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6D5F31B_D6EA_F176_41E3_BBB40D52C07F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_D9A1DE15_D6EA_D372_41C5_37C2F7B33D0B",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.98,
   "yaw": -3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D"
  },
  {
   "backwardYaw": 0.59,
   "yaw": 177.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA",
 "thumbnailUrl": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6FAEB0BC_4B47_2451_41CC_A190E694A6A9",
  "this.overlay_6FC89058_4B47_24D1_41C5_133B822DF2FA"
 ]
},
{
 "id": "ImageResource_6EAE3E8F_7EC3_835E_41DE_F7F91D1BB61C",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_716DB464_7EC3_87C3_41CF_2197692629E4_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB41CFA3_D6EA_D155_41C5_F829FD772D79",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -135.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D90202CC_D6EA_F0D2_41DB_8B09BC2C2336",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -81.43,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.77,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_71ABB918_6004_2686_41D1_5E03C9C5E102",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_71ABB918_6004_2686_41D1_5E03C9C5E102_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.73
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB1DC007_D6EA_CF5E_41D6_7D6513170575",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB11B016_D6EA_CF7E_41D9_573AF5EBC29F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_77F003E0_600C_2986_41D0_59B379E7E160",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_725D21B2_6004_298A_41BE_FD9353ED3A4F_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 178.01,
   "yaw": -1.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F"
  },
  {
   "backwardYaw": -2.66,
   "yaw": 175.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F88F736_45EB_076D_41CC_27306C81C01E",
 "thumbnailUrl": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5D9A7557_48C1_2CDF_41B5_54B8390D0AD4",
  "this.overlay_5D722E1E_48C3_1C51_41CF_F5B40F736B0C",
  "this.overlay_714AEDE4_6004_798E_41CD_0FCB2551C2E6",
  "this.popup_72115716_6004_2A8A_41C0_0C102380AB13"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8D1250B_D6EA_F156_41E1_70A523AED4AA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.74,
   "yaw": 178.01,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E"
  },
  {
   "backwardYaw": 176.77,
   "yaw": -2.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F",
 "thumbnailUrl": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5C239EE6_4943_3DF1_41C9_FE51A1AB51A1",
  "this.overlay_5F41F8A1_4940_E473_41D2_1239CBBCDF37"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6C3B30C_D6EA_F152_41C7_1A5B30C175E1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 102.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D95EC270_D6EA_F3B2_41E3_70C442E377E4",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D881C0A2_D6EA_CF56_41DB_2105751F5B3C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.52,
   "yaw": -168.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5",
 "thumbnailUrl": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7CEDFB1E_4B47_6451_41C8_34354490306E",
  "this.overlay_7CC98A13_4B40_E457_41A4_0D2E7BEC0EEC"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 3.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D994E6A4_D6EA_F352_41D4_1B80EB7E64E6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6E2F2EC_D6EA_F0D2_41E2_3E91F124FCAD",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -63.64,
   "yaw": 61.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB"
  },
  {
   "backwardYaw": -116.45,
   "yaw": -25.58,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D"
  },
  {
   "backwardYaw": 1.96,
   "yaw": 170.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F84D840_45E9_0925_41BC_23E8F5463726",
 "thumbnailUrl": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_72B9778F_4BC0_EC4F_419B_B1E5EC045A06",
  "this.overlay_73CBB14B_4BC3_6430_41B0_EE6471CE89CC",
  "this.overlay_70221EB8_4BC1_1C51_41BF_E9D47A1DF097"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -174.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D96C022B_D6EA_F356_41DB_55DA02EFD868",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.24,
   "yaw": 179.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505"
  },
  {
   "backwardYaw": 113.41,
   "yaw": -77.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3"
  },
  {
   "backwardYaw": -166.43,
   "yaw": 76.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881",
 "thumbnailUrl": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0B6AFF5B_4941_1CD7_4163_8A9747166BBE",
  "this.overlay_0BEFDD3E_4943_3C51_41B0_73FD0E738757",
  "this.overlay_0AA231D9_4941_67D3_4196_5F3145F84BEA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -180,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8CB54F0_D6EA_F0B2_41DB_F79D79E6ADE7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -84.8,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.76,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_72891D6A_601C_1E9A_41D7_561F06A7A886",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_72891D6A_601C_1E9A_41D7_561F06A7A886_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 4.34
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB078FF9_D6EA_D0B2_41E5_B9E0123DB52D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 175.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9B2C678_D6EA_F3B2_41D7_A4233FC6888C",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 179.52,
   "yaw": -1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71"
  },
  {
   "backwardYaw": -4.57,
   "yaw": 179.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C",
 "thumbnailUrl": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_545C917F_4941_24CF_41D0_9FB437AEDF47",
  "this.overlay_544A0CED_4941_7DF3_41B2_371BF7286FA9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 175.77,
   "yaw": -0.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501",
 "thumbnailUrl": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0ECFCEAF_48CF_3C4F_41BC_6C35D039E81F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.83,
   "yaw": -176.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2"
  },
  {
   "backwardYaw": -179.98,
   "yaw": 5.89,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0",
 "thumbnailUrl": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5D369F84_4669_0B82_41C7_C049698AEFC7",
  "this.overlay_5D0D14EA_4669_1D81_41C8_EED68885B5DF"
 ]
},
{
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "initialZoomFactor": 1,
 "id": "map_767FC595_604D_CC0A_41D1_FD26BA66B8D7",
 "thumbnailUrl": "media/map_767FC595_604D_CC0A_41D1_FD26BA66B8D7_t.png",
 "width": 2481,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_767FC595_604D_CC0A_41D1_FD26BA66B8D7.png",
    "width": 2263,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_767FC595_604D_CC0A_41D1_FD26BA66B8D7_lq.png",
    "width": 215,
    "class": "ImageResourceLevel",
    "height": 305,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "label": "denah-02",
 "minimumZoomFactor": 0.5,
 "class": "Map",
 "height": 3508,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "fontFamily": "Arial",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "children": [
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 28)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 29)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 30)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 31)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 32)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 33)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 34)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 35)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 36)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 37)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 38)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 39)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 40)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 41)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 42)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 43)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 44)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 45)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 46)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 47)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 48)"
  },
  {
   "label": "Desa Adat Pinge",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 49)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 50)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 51)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 52)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 53)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 54)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 55)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 56)"
  },
  {
   "label": "Spot Foto",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 57)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 58)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 59)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 60)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 61)"
  },
  {
   "label": "Laduma",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 62)"
  },
  {
   "label": "Glamping",
   "class": "MenuItem",
   "click": "this.mainPlayList.set('selectedIndex', 63)"
  }
 ],
 "label": "Media",
 "id": "Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "rollOverBackgroundColor": "#000000",
 "class": "Menu",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "fontColor": "#FFFFFF"
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.52,
   "yaw": 179.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D"
  },
  {
   "backwardYaw": -179.86,
   "yaw": -0.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D",
 "thumbnailUrl": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6DF04671_4B41_2CD3_41B6_79A185C8FFB8",
  "this.overlay_626B462F_4B47_6C4F_41CC_82BF74F4AC5C",
  "this.overlay_71AC18D0_6004_2786_41B8_9B238D79F2A3",
  "this.popup_733411AE_6004_299A_41AF_876F434F9369"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.08,
   "yaw": -171.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF"
  },
  {
   "backwardYaw": 151.08,
   "yaw": 67.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C",
 "thumbnailUrl": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_78DAC24D_4B41_E430_41BF_B81780647116",
  "this.overlay_795AECCB_4B43_7C37_41AA_6BC00259DAD2"
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -89.25,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.77,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_733411AE_6004_299A_41AF_876F434F9369",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_733411AE_6004_299A_41AF_876F434F9369_0_3.png",
    "width": 977,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 1.67
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8253110_D6EA_F172_41E4_DA2B9F64565A",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -83.15,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.96,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_72115716_6004_2A8A_41C0_0C102380AB13",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_72115716_6004_2A8A_41C0_0C102380AB13_0_3.png",
    "width": 895,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 5.65
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB6FDF36_D6EA_D1BE_41E7_2B54A1709ECF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 136.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D94D525A_D6EA_F3F6_41CF_19E7EDB63279",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "viewerArea": "this.MainViewer",
 "buttonZoomIn": "this.IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_6EF733E2_604E_C40E_41D3_652414EDD881",
 "id": "MainViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -9.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8AA7072_D6EA_CFB6_41D6_BA9A8FB9BE6D",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -178.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D96566B7_D6EA_F0BD_41E4_103F1B043DD7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -6.62,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.25,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_710F14A2_6004_EF8A_41B4_0F22901386E6",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_710F14A2_6004_EF8A_41B4_0F22901386E6_0_3.png",
    "width": 895,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 6.53
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -50.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB204458_D6EA_F7F3_41E5_ACFD88F47B0B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 154.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB38D463_D6EA_F7D6_41DD_5812E3BF0C48",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -8.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D920C29E_D6EA_F36E_41CB_D53AF43FE218",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -168.06,
   "yaw": -5.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5"
  },
  {
   "backwardYaw": 44.3,
   "yaw": 173.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893",
 "thumbnailUrl": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7FB43619_4B43_6C53_41BB_1A12C54D86E5",
  "this.overlay_7C076925_4B41_E473_41B1_D731E3B1E8DD"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8108BB_45E7_095B_41B1_16C01C691254_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -3.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6A5A328_D6EA_F152_41C7_ED0F98D274AB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.84,
   "yaw": -56.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18"
  },
  {
   "backwardYaw": -77.6,
   "yaw": 113.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3",
 "thumbnailUrl": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0AE5B574_4940_ECD1_41C5_ACF92A6841F3",
  "this.overlay_09BE66CF_494F_2DCF_4197_48BBE3D9DDD3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "id": "ImageResource_6E548E96_7EC3_834E_41B3_0B6330DC5512",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_705ADA24_7EC7_8343_41D6_DD1420E26017_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 176.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8D63060_D6EA_CFD2_41DD_C195A1A3D2D7",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "label": "tes2",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_C3CDE154_D104_5A52_41E6_073C3E45908E_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_C3CDE154_D104_5A52_41E6_073C3E45908E",
 "class": "Video",
 "height": 1050,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1050,
  "mp4Url": "media/video_C3CDE154_D104_5A52_41E6_073C3E45908E.mp4"
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "yaw": -152.2,
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.27,
 "hideDuration": 500,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "id": "popup_722F87F0_6004_6987_41D3_557582944A58",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_722F87F0_6004_6987_41D3_557582944A58_0_3.png",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 1024
   }
  ]
 },
 "popupDistance": 100,
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "pitch": 3.58
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8532101_D6EA_F152_41E6_3647F35C6EAF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -179.8,
   "yaw": 51.14,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF"
  },
  {
   "backwardYaw": 1.38,
   "yaw": 176.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7",
 "thumbnailUrl": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7A8D38A1_4B5F_2473_41D1_CCB4076CD01F",
  "this.overlay_7B22ABE0_4B43_FBF1_41C9_5C4CBA046331"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -176.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB3F5FDA_D6EA_D0F6_41E7_BBB630A53731",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -28.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8EDF4C5_D6EA_F0D2_41D3_5F3FE11B98D6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.49,
   "yaw": 179.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86"
  },
  {
   "backwardYaw": 177.3,
   "yaw": -1.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB",
 "thumbnailUrl": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_53848282_4941_2431_41D2_208929F5AEC6",
  "this.overlay_53F3487B_4943_E4D7_41D1_937EA417A619",
  "this.overlay_706C1E8F_7ECC_835E_41D1_85630B6F213E",
  "this.popup_716DB464_7EC3_87C3_41CF_2197692629E4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB934F27_D6EA_D15E_41D6_45699AD239D1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 51.14,
   "yaw": -179.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7"
  },
  {
   "backwardYaw": -171.23,
   "yaw": 1.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF",
 "thumbnailUrl": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7BF5C3C5_4B41_6430_41C4_5F1FE2837CA9",
  "this.overlay_7840146E_4B47_2CF1_41CD_58FFBE0D6E5F"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 174.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D82045A5_D6EA_F152_41E4_779C7E6802EA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -1.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D939271F_D6EA_F16E_41E6_33F7A38B4E89",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D8BBB082_D6EA_CF56_41E4_CF6F831D66FB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.12,
   "yaw": 176.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703"
  },
  {
   "backwardYaw": 175.55,
   "yaw": -3.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03",
 "thumbnailUrl": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_510F5612_4618_F925_41C5_3243BAB9B5BA",
  "this.overlay_510D77B9_461B_0764_41BF_EF5B813046A4"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_C6B7133C_D6EA_F1B2_41E0_B16D32FF51C2",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D97686D0_D6EA_F0F2_41E0_957A8C7B3312",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 177.9,
   "yaw": 2.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703"
  },
  {
   "backwardYaw": -5.99,
   "yaw": -179.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53",
 "thumbnailUrl": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_50D1771C_4629_075D_41AE_76D276EC2516",
  "this.overlay_5009D228_462B_1965_41CA_875CA12A91B7"
 ]
},
{
 "id": "ImageResource_77E1C3D8_600C_2986_41CF_11B6E01D6F53",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_0.png",
   "width": 4732,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_1.png",
   "width": 3909,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_2.png",
   "width": 1954,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.89,
   "yaw": -179.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0"
  },
  {
   "backwardYaw": -178.54,
   "yaw": 0.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A",
 "thumbnailUrl": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_5BB294A0_467F_1D81_4192_64055C3FDD82",
  "this.overlay_5B81C812_4679_1486_41AA_0CB00A9CFC87"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F88F736_45EB_076D_41CC_27306C81C01E_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 129.68,
   "yaw": -0.76,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505"
  },
  {
   "backwardYaw": -25.58,
   "yaw": -116.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Laduma",
 "id": "panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D",
 "thumbnailUrl": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_7610A654_4BC1_6CD1_4176_957245AE87F4",
  "this.overlay_76A57604_4BC0_EC30_41C4_5E67110F87A9"
 ]
},
{
 "id": "ImageResource_6EAEFE8E_7EC3_835E_41D3_4DB9F101B347",
 "class": "ImageResource",
 "levels": [
  {
   "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_0.png",
   "width": 4733,
   "class": "ImageResourceLevel",
   "height": 4958
  },
  {
   "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_1.png",
   "width": 3910,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_2.png",
   "width": 1955,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_3.png",
   "width": 977,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_70024505_7EDC_814D_41D6_9579F8550A41_0_4.png",
   "width": 488,
   "class": "ImageResourceLevel",
   "height": 512
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": 76.46,
   "yaw": -166.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Glamping",
 "id": "panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6",
 "thumbnailUrl": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/f/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/f/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/u/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/u/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/r/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/r/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/b/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/b/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/d/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/d/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/l/0/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0/l/1/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_0F1CC23B_4941_2457_41BC_1D225EB6C026",
  "this.overlay_715813DD_6004_29BE_41C9_5A791D549C80",
  "this.popup_71B97021_6004_2686_41C6_407E2ECB8B4A"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.34,
   "yaw": -179.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D"
  },
  {
   "backwardYaw": -178.8,
   "yaw": -2.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA"
  }
 ],
 "hfovMin": "150%",
 "hfov": 360,
 "label": "Desa Adat Pinge",
 "id": "panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061",
 "thumbnailUrl": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_t.jpg",
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_D9632E4D_D6EA_D3ED_41E0_EC7107ABBF86",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_631A4C94_4B40_FC50_419C_5C9A851F2762",
  "this.overlay_6389B6C7_4B43_6C3F_41AC_65652AE21682"
 ]
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DB46FF94_D6EA_D172_41E5_136EFFE2DC87",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "begin": "this.MainViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_767FC595_604D_CC0A_41D1_FD26BA66B8D7",
   "class": "MapPlayListItem",
   "player": "this.MainViewerMapPlayer"
  }
 ],
 "id": "playList_D9A27E15_D6EA_D372_41AE_06E70E575C9B",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_4F8B924F_45EB_393B_41A7_B89773F28069_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -173.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D9B881E6_D6EA_F0DE_41E9_2652FC8CE80E",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -2.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_D810015E_D6EA_F1EE_41D9_047B2743FCDB",
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 0,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "0%",
 "progressBarOpacity": 1,
 "top": 0,
 "paddingLeft": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "data": {
  "name": "Container2420"
 },
 "children": [
  "this.IconButton_6EF733E2_604E_C40E_41D3_652414EDD881",
  "this.IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766",
  "this.IconButton_6EF713E2_604E_C40E_41D3_75088808C976",
  "this.IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8",
  "this.Container_6EF0F3E2_604E_C40E_41CB_156490C8BB53",
  "this.IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0",
  "this.IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83",
  "this.IconButton_6EF043E2_604E_C40E_4172_D9791F425FAB",
  "this.IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E"
 ],
 "layout": "horizontal",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "id": "Container_6EF023E2_604E_C40E_41D5_E128788EF280",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "right": "33.6%",
 "minWidth": 392,
 "width": "30.769%",
 "bottom": "3.27%",
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "height": "20.673%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadowColor": "#000000",
 "id": "ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE",
 "left": "0.02%",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#FFFFFF",
 "itemLabelFontStyle": "normal",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "itemLabelHorizontalAlign": "center",
 "shadow": false,
 "itemMode": "normal",
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Arial",
 "width": "12.323%",
 "itemThumbnailShadowOpacity": 0.27,
 "itemPaddingRight": 3,
 "verticalAlign": "top",
 "paddingRight": 20,
 "itemBorderRadius": 0,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "height": "100%",
 "itemOpacity": 1,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#CC6600",
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.7,
 "class": "ThumbnailList",
 "itemThumbnailBorderRadius": 5,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "bold",
 "layout": "vertical",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "minWidth": 20,
 "playList": "this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist",
 "itemThumbnailShadowBlurRadius": 8,
 "scrollBarMargin": 2,
 "itemLabelFontSize": 14,
 "top": "0%",
 "paddingLeft": 20,
 "itemThumbnailScaleMode": "fit_outside",
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#000000",
 "itemThumbnailHeight": 75,
 "paddingTop": 10,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundColorDirection": "vertical",
 "borderRadius": 5,
 "gap": 13,
 "paddingBottom": 10,
 "itemLabelGap": 8,
 "itemThumbnailShadow": true,
 "itemThumbnailWidth": 100,
 "itemPaddingBottom": 3,
 "backgroundColorRatios": [
  0
 ],
 "data": {
  "name": "ThumbnailList35762"
 },
 "scrollBarWidth": 10
},
{
 "id": "Image_DA4F67AE_CF11_9048_41DC_CB2614F2936B",
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": "6.672%",
 "shadow": false,
 "borderSize": 0,
 "right": "2.98%",
 "url": "skin/Image_DA4F67AE_CF11_9048_41DC_CB2614F2936B.png",
 "minWidth": 1,
 "maxWidth": 320,
 "maxHeight": 312,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "height": "9.957%",
 "top": "4.66%",
 "paddingTop": 0,
 "class": "Image",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "propagateClick": false,
 "data": {
  "name": "Image23256"
 }
},
{
 "backgroundColorRatios": [
  0.02
 ],
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B",
  "this.Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F",
  "this.Button_DBF13261_CF3E_70F8_41C4_0285CB80AB1C",
  "this.Button_DBF14261_CF3E_70F8_41E2_768DB7613156",
  "this.Button_DBF16261_CF3E_70F8_41E4_1B707D03248C"
 ],
 "layout": "vertical",
 "id": "Container_DBF17261_CF3E_70F8_41E5_1A3A919401CE",
 "left": 163,
 "width": 60,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "bottom": "27.84%",
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 300,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Container",
 "borderRadius": 0,
 "gap": 0,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "paddingBottom": 0,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "UIComponent1639"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minWidth": 0,
 "bottom": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "backgroundColor": [],
 "top": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "custom",
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "ZoomImage1640"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton1641"
 },
 "layout": "horizontal",
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "horizontalAlign": "center",
 "fontSize": "1.29vmin",
 "minHeight": 0,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "right": 10,
 "borderSize": 0,
 "fontColor": "#FFFFFF",
 "iconColor": "#000000",
 "minWidth": 0,
 "borderColor": "#000000",
 "top": 10,
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "paddingRight": 5,
 "paddingLeft": 5,
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "label": "",
 "iconHeight": 20,
 "shadowBlurRadius": 6,
 "paddingTop": 5,
 "class": "CloseButton",
 "pressedIconColor": "#888888",
 "backgroundOpacity": 0.3,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 5,
 "textDecoration": "none",
 "visible": false,
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 20
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button settings VR"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconURL": "skin/Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B_pressed.png",
 "fontStyle": "normal",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_DBF16261_CF3E_70F8_41E4_1B707D03248C",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_DBF16261_CF3E_70F8_41E4_1B707D03248C.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_DBF16261_CF3E_70F8_41E4_1B707D03248C_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "width": 40,
 "id": "IconButton_6EF043E2_604E_C40E_4172_D9791F425FAB",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF043E2_604E_C40E_4172_D9791F425FAB.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6EF043E2_604E_C40E_4172_D9791F425FAB_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2431"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_DBF13261_CF3E_70F8_41C4_0285CB80AB1C",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_DBF13261_CF3E_70F8_41C4_0285CB80AB1C.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_DBF13261_CF3E_70F8_41C4_0285CB80AB1C_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9, this.camera_DB33AFEA_D6EA_D0D6_41E9_41A3AFDB30C1); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_5455AD60_4941_3CF1_41C4_1AFE1E509D02",
   "pitch": -8.05,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5B0C078C_48C3_2C31_41BA_A96F67BE2744",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.05
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74, this.camera_DB3F5FDA_D6EA_D0F6_41E7_BBB630A53731); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.85,
   "image": "this.AnimatedImageResource_5455DD60_4941_3CF1_41B3_1E280EBE3B2D",
   "pitch": -19.28,
   "yaw": 179.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5B1B3E2A_48C1_1C71_41C4_22642104F9E9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.85,
   "yaw": 179.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.28
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_72891D6A_601C_1E9A_41D7_561F06A7A886, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77F773DD_600C_29BE_4192_BA1271E5603C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.03,
   "image": "this.AnimatedImageResource_771F639C_600C_29BE_41AB_9214A2112B7B",
   "pitch": 4.34,
   "yaw": -84.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_721D740F_601C_2E9A_41C9_4CD192C5181D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.03,
   "yaw": -84.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA, this.camera_C687034C_D6EA_F1D3_4189_B8EA57152466); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_5450FD61_4941_3CF3_41C2_0C6353D8E3DD",
   "pitch": -6.68,
   "yaw": -3.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E4A6C68_4947_1CF1_41AD_FA5CA85EE4B2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -3.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F, this.camera_C6B7133C_D6EA_F1B2_41E0_B16D32FF51C2); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.95,
   "image": "this.AnimatedImageResource_54511D61_4941_3CF3_41C4_99BD7349A50B",
   "pitch": -16.73,
   "yaw": 176.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E45EAB5_4941_E453_41C7_15A2D94E8242",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.95,
   "yaw": 176.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_705BA5CA_7EC4_80C7_41CD_0DDDA41975B0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6EA1BE8B_7EC3_8345_41B1_72EFA4459825, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.02,
   "image": "this.AnimatedImageResource_7125FE2D_7EC3_8342_41D3_DA76466C1EA0",
   "pitch": 5.3,
   "yaw": 59.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_702EF513_7EC5_8145_41DF_9B43636CE8C4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": 59.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB, this.camera_D9A23663_D6EA_F3D6_4188_BC4AC74BA77B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_6EDC26C1_6004_2B86_41D6_24F4F51AD72A",
   "pitch": -6.35,
   "yaw": 0.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52A24846_463F_092D_41A3_4C0FAC5F73F0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": 0.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.35
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B, this.camera_D9B2C678_D6EA_F3B2_41D7_A4233FC6888C); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_6EDCD6C1_6004_2B86_41CC_427384FDADA2",
   "pitch": -17.03,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52B75F55_4639_072F_41CC_B71434508AEE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 178.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.03
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6, this.camera_D8F15044_D6EA_CFD2_4191_44585CC661F4); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_64560812_4B41_E451_41C3_AF77A97094FE",
   "pitch": -6.74,
   "yaw": -2.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_69481EAC_4B5F_1C71_41C6_70C3E3643514",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -2.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.74
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079, this.camera_D8FB0034_D6EA_CFB3_41D4_0D52BCD8AE07); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "image": "this.AnimatedImageResource_64562812_4B41_E451_41CE_62A164255ABA",
   "pitch": -15.32,
   "yaw": 177.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_694FD907_4B41_643F_41B9_632C6719CB3D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7,
   "yaw": 177.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6E48EACE_7EC3_80DF_41D2_F8DCC63EBA24, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6E55BE95_7EC3_8342_41B4_15C6E0FEEAA7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "43"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.02,
   "image": "this.AnimatedImageResource_712B6E36_7EC3_834E_41C2_5D2A27147D8F",
   "pitch": 5.92,
   "yaw": -84.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70215DB9_7EDD_8145_41D8_65C0502A16B9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -84.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.92
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_705ADA24_7EC7_8343_41D6_DD1420E26017, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6E548E96_7EC3_834E_41B3_0B6330DC5512, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "56"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6,
   "image": "this.AnimatedImageResource_712AFE36_7EC3_834E_41D6_BD0AD8C69B35",
   "pitch": 6.95,
   "yaw": 42.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71F01049_7EC4_9FC2_41DA_14BBF84DB2C7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6,
   "yaw": 42.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED, this.camera_D98AA1FB_D6EA_F0B6_41DA_73AA5F465FF0); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_64564819_4B41_E453_41CD_B1133ECAF5C4",
   "pitch": -5.72,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_604880E3_4B41_65F7_41C5_9E3090D5F3E5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061, this.camera_D99AF215_D6EA_F372_41D0_3058B0CEBDEC); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_64566819_4B41_E453_4191_958D2FD571A6",
   "pitch": -12.63,
   "yaw": -178.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_60C87ECC_4B7F_1C31_4199_81EF620D010A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -178.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.63
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E, this.camera_DB42C3FC_D6EA_F0B2_41DE_09D02758CF89); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.23,
   "image": "this.AnimatedImageResource_56788D68_4947_1CF0_4190_DDAB6542BE70",
   "pitch": -4.88,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C5E0D58_48DF_FCD1_417C_0642B22680E7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.23,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.88
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720, this.camera_DB5DA409_D6EA_F755_41E9_BCB244601C33); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.84,
   "image": "this.AnimatedImageResource_5456BD61_4941_3CF3_4191_C8DB524B92EA",
   "pitch": -19.55,
   "yaw": 177.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C377B69_48C1_24F3_41A7_8E2BD21768C7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 177.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254, this.camera_D939271F_D6EA_F16E_41E6_33F7A38B4E89); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_6EDBA6C0_6004_2B86_41D2_BE5D896DB0BD",
   "pitch": -7.99,
   "yaw": -4.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5226BF9F_463B_075B_41B8_F412CF157673",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": -4.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501, this.camera_D90A8731_D6EA_F1B5_41D7_567496601664); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.99,
   "image": "this.AnimatedImageResource_5D70E259_4667_3483_41B3_B32110AD5653",
   "pitch": -15.7,
   "yaw": 175.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_522B4705_463B_072F_41C5_5FD64EE533FE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 175.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.7
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12, this.camera_D9C0762E_D6EA_F3AE_41DD_95D46558A3C6); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_6454F80B_4B41_E437_41BE_7A88C4DBCDFC",
   "pitch": -5.92,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52FFBAE8_4941_25F1_41CC_3FA6E9B625B2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -0.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.92
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB, this.camera_D9CE3613_D6EA_F376_41C6_0EAAE4F5028B); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.84,
   "image": "this.AnimatedImageResource_6454180B_4B41_E437_41C6_70784F0BECD2",
   "pitch": -19.6,
   "yaw": 177.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_52D17055_494F_24D3_41CF_7D791E857B6E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.84,
   "yaw": 177.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.6
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D, this.camera_D88FE095_D6EA_CF72_41DB_B6E148BF6610); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_6455380F_4B41_E44F_41C7_3A0937520B54",
   "pitch": -7.25,
   "yaw": 6.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_56D9569C_49C1_6C51_41C5_58BA3F2AE7DD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": 6.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.25
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71, this.camera_D8BBB082_D6EA_CF56_41E4_CF6F831D66FB); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.95,
   "image": "this.AnimatedImageResource_64555812_4B41_E450_41BD_B640162F237E",
   "pitch": -16.88,
   "yaw": -174.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_55CEA084_4B43_2431_41CB_AAA6D7A339CC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.95,
   "yaw": -174.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.88
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726, this.camera_D8AA7072_D6EA_CFB6_41D6_BA9A8FB9BE6D); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.01,
   "image": "this.AnimatedImageResource_714B7C99_4BC1_FC53_4190_E628AA980CAB",
   "pitch": -6.62,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7D8DDA53_4B43_24D7_41A7_054569584434",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.01,
   "yaw": 1.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.62
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.11,
   "image": "this.AnimatedImageResource_7154AC9B_4BC1_FC57_4195_A1F6B3EABD90",
   "pitch": -32.66,
   "yaw": 102.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_72BCBBA1_4B41_2473_4195_012B734E1425",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.11,
   "yaw": 102.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.66
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079, this.camera_D9A891D2_D6EA_F0F6_41D9_1EBE68E570C3); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_64556812_4B41_E450_41D1_06C1F8BBD55F",
   "pitch": -8.2,
   "yaw": 0.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6AAF4815_4B41_6453_41CF_3522DA726EC8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": 0.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.2
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803, this.camera_D9B881E6_D6EA_F0DE_41E9_2652FC8CE80E); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.04,
   "image": "this.AnimatedImageResource_64568812_4B41_E451_41AA_F41C6A106C87",
   "pitch": -14.18,
   "yaw": 177.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6AF2718A_4B47_2430_41C6_1F7DE812E32F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.04,
   "yaw": 177.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C, this.camera_D920C29E_D6EA_F36E_41CB_D53AF43FE218); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_6EDC96C2_6004_2B8A_41D2_5A5474824412",
   "pitch": -4.13,
   "yaw": 2.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53305389_4639_7F27_41C1_EF5B5934215C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": 2.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.13
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8108BB_45E7_095B_41B1_16C01C691254, this.camera_D92ED28A_D6EA_F356_41D7_5035836F4EE4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "image": "this.AnimatedImageResource_6EDD26C2_6004_2B8A_41BB_858FA35F02A9",
   "pitch": -15.33,
   "yaw": -177.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_531A17D6_4627_072C_41C9_CAD354AA845E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7,
   "yaw": -177.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.33
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963, this.camera_D958B6F6_D6EA_F0BE_41D6_1E6B8EA04F2C); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_54E27156_4941_24D1_41BA_64E545FB4C2D",
   "pitch": -8.46,
   "yaw": 2.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5B0B5D82_4679_0F81_41B0_6B4B8E76F304",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": 2.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.46
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A, this.camera_D928970D_D6EA_F16D_41E1_2120FBC3B2DE); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.73,
   "image": "this.AnimatedImageResource_54E20156_4941_24D1_41B6_676CE4EA1638",
   "pitch": -21.95,
   "yaw": -178.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_46C9FF78_48C1_1CD1_41C6_4C538C0D2090",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.73,
   "yaw": -178.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.95
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069, this.camera_D8B76526_D6EA_F15F_41E4_E07A479A3191); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_6456A812_4B41_E451_416F_CF9246E62613",
   "pitch": -4.12,
   "yaw": -1.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_68309F64_4B41_1CF0_418B_94996451B2F0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": -1.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.12
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8A7728_45EB_0765_41CE_101928D8A27D, this.camera_D8895537_D6EA_F1BD_41C0_624ED1C8E2AC); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.03,
   "image": "this.AnimatedImageResource_6456F812_4B41_E451_41C9_AE3036FB2FC1",
   "pitch": -14.54,
   "yaw": 177.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6869E960_4B43_64F1_4190_C938A1C991CF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.03,
   "yaw": 177.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.54
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_705BF5F5_7EC5_80C2_41B7_F5D65E709107, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6E579E94_7EC3_8342_41D4_EB1ADB273830, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.03,
   "image": "this.AnimatedImageResource_712C0E34_7EC3_8342_4180_420B76C4F80E",
   "pitch": 4.75,
   "yaw": 86.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70250225_7EC4_834D_41B6_FC2F1A17E3AF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 86.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.75
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707, this.camera_D89C8545_D6EA_F1D2_41D5_D92887A24DCA); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_54EDA153_4941_24D7_416B_1D9209155A5F",
   "pitch": -7.12,
   "yaw": 2.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E05CEB2_4619_0D81_41B0_858A6ABE44DE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": 2.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.12
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4, this.camera_D86F7553_D6EA_F1F6_41D6_C5951FB293C9); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.74,
   "image": "this.AnimatedImageResource_54EE7153_4941_24D7_41C6_16AC58E20197",
   "pitch": -21.69,
   "yaw": -179.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E64BA95_461F_1583_41C5_DE244D2F34E4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.74,
   "yaw": -179.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.69
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02, this.camera_D916EEBF_D6EA_D0AE_41CF_4537EDEE352C); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.23,
   "image": "this.AnimatedImageResource_54E40157_4941_24DF_41CE_B2EF1DDB7D58",
   "pitch": -5.35,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_580645ED_48C1_2FF3_41AD_1846500D04AC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.23,
   "yaw": -2.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.35
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C, this.camera_D91FBEB1_D6EA_D0B2_41EA_5A0075532FF8); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_54E4D157_4941_24DF_41A8_55018BB77375",
   "pitch": -12.79,
   "yaw": 175.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5855E2C6_48C1_2431_4199_062FD4B47266",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.08,
   "yaw": 175.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71ABB918_6004_2686_41D1_5E03C9C5E102, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77EB83DB_600C_29BA_41C0_6A0170382143, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.05,
   "image": "this.AnimatedImageResource_7710D39A_600C_29BA_41C6_979A43683149",
   "pitch": 1.73,
   "yaw": -81.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71846469_6004_EE86_4196_5ED033B98555",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -81.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C, this.camera_D8532101_D6EA_F152_41E6_3647F35C6EAF); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_6454280B_4B41_E437_41B3_7B96504E50B3",
   "pitch": -10.49,
   "yaw": -4.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_55ACBA18_4941_2451_418B_BDACED87B7AA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": -4.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.49
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E, this.camera_D8253110_D6EA_F172_41E4_DA2B9F64565A); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_6454780B_4B41_E437_41AB_40D3C1A124BC",
   "pitch": -17.24,
   "yaw": 174.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_558A7A70_4943_64D1_41BA_62E55795BDE8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.93,
   "yaw": 174.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_6EF2F2F1_7EC4_80C5_41C0_BE825A5E9E61, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6EAC5E91_7EC3_8342_417E_C3208FD09FBE, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Homestay 37"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.97,
   "image": "this.AnimatedImageResource_7120CE31_7EC3_8342_41DB_C84F4B18CC18",
   "pitch": 9.21,
   "yaw": -61.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70266E05_7EC5_834D_41B1_CD23FBCE492F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.97,
   "yaw": -61.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9.21
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03, this.camera_C6A5A328_D6EA_F152_41C7_ED0F98D274AB); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_6EDE96C4_6004_2B8E_419E_7265BE980614",
   "pitch": -4.42,
   "yaw": 0.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_515C9F7B_4627_07DB_41C2_891C0FDF9180",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": 0.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.42
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53, this.camera_C6D5F31B_D6EA_F176_41E3_BBB40D52C07F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.99,
   "image": "this.AnimatedImageResource_6EDF56C4_6004_2B8E_41BC_4BC720297F8B",
   "pitch": -15.76,
   "yaw": 177.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50ACF6EC_4619_06FD_41B7_FDAF0B1D9431",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.99,
   "yaw": 177.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.76
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881, this.camera_C6C3B30C_D6EA_F152_41C7_1A5B30C175E1); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.05,
   "image": "this.AnimatedImageResource_03BDEC77_4943_1CDF_41C3_0B3973C8B0AB",
   "pitch": -13.89,
   "yaw": -5.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_74377DC6_4941_3C31_41CE_847E751A7891",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.05,
   "yaw": -5.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D, this.camera_C6F3B2FC_D6EA_F0B2_41E8_594543F4DB54); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.89,
   "image": "this.AnimatedImageResource_03BC1C78_4943_1CD1_41C4_DB2937A9FBD7",
   "pitch": -52.69,
   "yaw": 129.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_74DC37CC_4947_2C31_41C4_26B56E7420D0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.89,
   "yaw": 129.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.69
  }
 ]
},
{
 "oggUrl": "media/audio_6B9A23F2_7F43_80C7_41DF_889456213974.ogg",
 "mp3Url": "media/audio_6B9A23F2_7F43_80C7_41DF_889456213974.mp3",
 "id": "audioresource_6B9A13F2_7F43_80C7_41D3_F9EBE1B2EA29",
 "class": "AudioResource"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D, this.camera_D9E2D175_D6EA_F1B2_41CD_B8622CD1FAFE); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_64557815_4B41_E453_41D2_1B1A7DEBD322",
   "pitch": -3.66,
   "yaw": -1.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6CD3D6A8_4B40_EC71_41AB_6657A18C04B5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": -1.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.66
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA, this.camera_D9F5A18A_D6EA_F156_41D8_E4B6FEBB9D2F); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.03,
   "image": "this.AnimatedImageResource_64568815_4B41_E453_41D0_4D6F22044562",
   "pitch": -14.3,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6D0341D7_4B43_27DF_41BC_262A5636F54C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.03,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.3
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B, this.camera_DB059495_D6EA_F772_41C0_D57AE67CCE89); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_6457A819_4B41_E453_41C5_B0CB23F360FF",
   "pitch": -7.06,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_61A6CC27_4B43_3C70_41C4_4A7BBBD35842",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": 1.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.06
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA, this.camera_DB1EF4A4_D6EA_F753_41D7_98851882C75C); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_6457E819_4B41_E453_41CD_C98E5EAEDB1B",
   "pitch": -17.12,
   "yaw": -177.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6637F7A0_4B41_EC70_41CD_12E35A78C6DA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -177.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.12
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71F1F01E_7EC4_BF7F_41B7_17C0EADCA070, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6E5D8E9C_7EC3_8342_41DE_3B2334FD7B42, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "55"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.04,
   "image": "this.AnimatedImageResource_6ED3BE3B_7EC3_8346_41CC_341D04697271",
   "pitch": 1.93,
   "yaw": -80.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70370532_7EC5_8146_41D3_CCE883930E7B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.04,
   "yaw": -80.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.93
  }
 ]
},
{
 "width": 40,
 "id": "IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF083E2_604E_C40E_41D4_6195B05CE5C0_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2429"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "width": 40,
 "id": "IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF0E3E2_604E_C40E_41C2_7EBF1DA8CAC8_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2424"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF733E2_604E_C40E_41D3_652414EDD881",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF733E2_604E_C40E_41D3_652414EDD881.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF733E2_604E_C40E_41D3_652414EDD881_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF733E2_604E_C40E_41D3_652414EDD881_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2421"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "toggle",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2427"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF063E2_604E_C40E_41D2_585FA9254C83_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2430"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF713E2_604E_C40E_41D3_75088808C976",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF713E2_604E_C40E_41D3_75088808C976.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF713E2_604E_C40E_41D3_75088808C976_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF713E2_604E_C40E_41D3_75088808C976_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2423"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF053E2_604E_C40E_41C8_991A98390D3E_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2432"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF703E2_604E_C40E_41A9_1A286FBF1766_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2422"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2426"
 }
},
{
 "width": 40,
 "id": "IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5",
 "transparencyActive": false,
 "minHeight": 0,
 "horizontalAlign": "center",
 "shadow": false,
 "borderSize": 0,
 "minWidth": 0,
 "iconURL": "skin/IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5.png",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "mode": "push",
 "height": 40,
 "paddingTop": 0,
 "class": "IconButton",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "paddingBottom": 0,
 "rollOverIconURL": "skin/IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5_rollover.png",
 "pressedIconURL": "skin/IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5_pressed.png",
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "Button2428"
 }
},
{
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "id": "Button_DBF14261_CF3E_70F8_41E2_768DB7613156",
 "rollOverIconWidth": 30,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "width": 60,
 "data": {
  "name": "Button Settings HS"
 },
 "fontSize": 12,
 "minHeight": 1,
 "horizontalAlign": "center",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "rollOverIconHeight": 30,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "fontColor": "#FFFFFF",
 "minWidth": 1,
 "borderColor": "#000000",
 "iconURL": "skin/Button_DBF14261_CF3E_70F8_41E2_768DB7613156.png",
 "shadowColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#F7931E"
 ],
 "paddingLeft": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconHeight": 30,
 "height": 60,
 "iconHeight": 30,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 1,
 "paddingTop": 0,
 "class": "Button",
 "borderRadius": 0,
 "gap": 5,
 "paddingBottom": 0,
 "textDecoration": "none",
 "pressedIconWidth": 30,
 "fontStyle": "normal",
 "pressedIconURL": "skin/Button_DBF14261_CF3E_70F8_41E2_768DB7613156_pressed.png",
 "shadowSpread": 1,
 "cursor": "hand",
 "propagateClick": false,
 "fontWeight": "normal",
 "iconWidth": 30,
 "rollOverBackgroundOpacity": 1
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2, this.camera_D8D1250B_D6EA_F156_41E1_70A523AED4AA); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.12,
   "image": "this.AnimatedImageResource_54EF6154_4941_24D1_41C7_DA0CA763701B",
   "pitch": -11.29,
   "yaw": 1.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5CF844D0_4669_1D81_41CD_9CADB04204B8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.12,
   "yaw": 1.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.29
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526, this.camera_D8A49519_D6EA_F172_41E3_8670065B9558); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.78,
   "image": "this.AnimatedImageResource_54EF0154_4941_24D1_41D1_B9FB97D9D1F9",
   "pitch": -20.84,
   "yaw": -177.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5CE9817B_466B_7486_41C5_636FFFFC99EB",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.78,
   "yaw": -177.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7, this.camera_D912E2DC_D6EA_F0F2_41EA_32D3974D099B); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_71493C92_4BC1_FC51_41CE_2F96FE6F1676",
   "pitch": -7.86,
   "yaw": 1.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_656C0718_4B40_EC51_41C6_D607A08CE0F6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 1.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.86
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB, this.camera_C6E2F2EC_D6EA_F0D2_41E2_3E91F124FCAD); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.12,
   "image": "this.AnimatedImageResource_71496C92_4BC1_FC51_41CC_42EF6A4D5548",
   "pitch": -11.09,
   "yaw": -179.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_65DE53E3_4B41_2BF0_41C8_0F729CDF3233",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.12,
   "yaw": -179.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B, this.camera_D9C6F1A2_D6EA_F157_41E2_E378161E3A07); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.91,
   "image": "this.AnimatedImageResource_64A8A819_4B41_E453_41CF_C1D0881CD25C",
   "pitch": -17.89,
   "yaw": 178.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_64443542_4B41_6C31_41C2_99BEECA8184D",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 178.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C, this.camera_D9D751B8_D6EA_F0B2_41CA_31692EE45762); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_6EFC46E0_6004_2B86_41B3_0BA5800EBBB0",
   "pitch": -6.02,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0DD39CD9_48C1_7DD3_41B7_748611DAD793",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -0.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.02
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726, this.camera_D983268B_D6EA_F356_41E8_1BC98407620D); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_08221DF7_4BC1_7FDF_41D2_49ACB686929E",
   "pitch": -6.85,
   "yaw": -63.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_719F5314_4BC3_E451_41C8_A72B2BC97CAC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -63.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.85
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7108EBCB_600C_399A_41D4_F740A59FD155, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_713584C8_6004_6F86_41AC_491F786CEA1A, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.89,
   "image": "this.AnimatedImageResource_7765A43A_6004_6EFA_41C1_2D72708359D6",
   "pitch": 13.18,
   "yaw": 1.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_715FB011_600C_2686_41CD_A2005292BC3A",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.89,
   "yaw": 1.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB, this.camera_D82C1597_D6EA_F17E_41C1_893470113D51); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.19,
   "image": "this.AnimatedImageResource_64573819_4B41_E453_41C6_05942172EA86",
   "pitch": -7.68,
   "yaw": 1.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66BF22A5_4B47_2473_41D0_4AE7869DF9AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.19,
   "yaw": 1.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED, this.camera_D85AE58A_D6EA_F156_41D4_0FAB6C5EF653); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.93,
   "image": "this.AnimatedImageResource_64574819_4B41_E453_4174_F1FDC970A032",
   "pitch": -17.27,
   "yaw": -176.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_67030588_4B41_EC31_41C7_7615A613B491",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.93,
   "yaw": -176.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_729AE5E8_600C_2986_41D5_50D9B24DF1FB, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_713474C2_6004_6F8A_41CB_DEC9D6FED30D, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6,
   "image": "this.AnimatedImageResource_776EE42E_6004_6E9A_41D2_6F20557E4696",
   "pitch": 7.43,
   "yaw": 19.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_714E1D32_600C_7E8A_4190_EB55B329B942",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6,
   "yaw": 19.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.43
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_0",
   "camera": {
    "scaleMode": "fit_outside",
    "duration": 5000,
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "targetPosition": {
     "x": "0.34",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.28"
    },
    "easing": "linear",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_DB8C25E5_CF36_73FB_41DE_6D03E87D9EA4_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53, this.camera_D867C0C4_D6EA_F0D2_41B9_52E939EE9690); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.25,
   "image": "this.AnimatedImageResource_6EDDF6C2_6004_2B8A_41CC_02F837819181",
   "pitch": -2.61,
   "yaw": -5.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_505FC5EF_462B_7AFB_41C0_B647F7BB9793",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.25,
   "yaw": -5.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.61
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB, this.camera_D879D0CD_D6EA_F0D2_41C2_D67CD3C28F9A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "image": "this.AnimatedImageResource_6EDDA6C3_6004_2B8A_41D5_CABDA01636F7",
   "pitch": -15.18,
   "yaw": 171.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53BE9703_4629_072E_41B0_2772E18EF9EE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7,
   "yaw": 171.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.18
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA, this.camera_D810015E_D6EA_F1EE_41D9_047B2743FCDB); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_64564815_4B41_E453_4198_8BEF1C243728",
   "pitch": -6.23,
   "yaw": 0.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6E2D1ED4_4B43_1DD1_41A1_D1D4E3F47392",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 0.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B924F_45EB_393B_41A7_B89773F28069, this.camera_D81C8142_D6EA_F1D6_41E1_85CD6FE18520); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "image": "this.AnimatedImageResource_64578815_4B41_E453_41A0_9AF38AE005A5",
   "pitch": -15.46,
   "yaw": 179.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6ED1C0E0_4B41_25F1_41B7_2D09CEDFA7A4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7,
   "yaw": 179.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.46
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893, this.camera_C6FD275B_D6EA_F1F5_41CD_A2FC21DEC51F); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_714B9C92_4BC1_FC51_41C0_5CA4F5B64681",
   "pitch": -12.77,
   "yaw": 44.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7E2BDFC2_4B41_3C31_41C2_A0A8B297AC1E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.08,
   "yaw": 44.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C, this.camera_C6CEF76A_D6EA_F1D6_41D9_696A364FCDD3); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.02,
   "image": "this.AnimatedImageResource_714BCC92_4BC1_FC51_41CD_186AFD030768",
   "pitch": -14.73,
   "yaw": 151.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7EEC7C9E_4B40_FC51_41CB_5D99075CAAF3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.02,
   "yaw": 151.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7256E174_600C_268E_41D4_67719EAAD59E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7134F4C5_6004_6F8E_41C6_2A9414FC3008, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.28,
   "image": "this.AnimatedImageResource_7760E434_6004_6E8E_41C7_D182446EB5E6",
   "pitch": 3.38,
   "yaw": -2.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_714A24C6_600C_2F8A_41B9_DE25CC5441CD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.28,
   "yaw": -2.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF, this.camera_D8C39052_D6EA_CFF6_41E0_A3019CBE5489); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.12,
   "image": "this.AnimatedImageResource_54ED7152_4941_24D1_41BA_8CA518067F02",
   "pitch": -11.03,
   "yaw": -3.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5E8371F5_4627_1782_41C3_AB09AFBD9AB7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.12,
   "yaw": -3.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.03
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03, this.camera_D8D63060_D6EA_CFD2_41DD_C195A1A3D2D7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_54ED0152_4941_24D1_41D1_6CBC0419325A",
   "pitch": -17.1,
   "yaw": 175.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EBFB304_461B_1481_41B1_2F83A08338CC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": 175.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.1
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720, this.camera_DB63AF51_D6EA_D1F2_41D3_DB0664F35904); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_54549D60_4941_3CF1_41B4_F5BD0B541F76",
   "pitch": -6.44,
   "yaw": 3.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5BCD962F_48C7_2C4F_41CB_1C199B37501C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": 3.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.44
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C, this.camera_DB699F43_D6EA_D1D6_41C9_D90D5BF6AB26); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7,
   "image": "this.AnimatedImageResource_54552D60_4941_3CF1_41CE_6DEC30ED81AA",
   "pitch": -15.34,
   "yaw": -176.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5BCAD828_48C1_2471_41C1_40BFF910F473",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7,
   "yaw": -176.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C, this.camera_DB537FBF_D6EA_D0AE_41D0_F04A02FD3519); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.23,
   "image": "this.AnimatedImageResource_54E55158_4941_24D1_41CA_60FC2FB9E7C8",
   "pitch": -4.59,
   "yaw": -2.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59447F77_48C3_3CD0_41A1_C7B7527CD096",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.23,
   "yaw": -2.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019, this.camera_DB28AFCC_D6EA_D0D3_419A_6D3B513E05E3); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.06,
   "image": "this.AnimatedImageResource_54E5F158_4941_24D1_41C7_FE66C4E97B70",
   "pitch": -13.53,
   "yaw": 175.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_59A98E2D_48C1_3C73_41B3_C150C693885F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.06,
   "yaw": 175.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0, this.camera_D994E6A4_D6EA_F352_41D4_1B80EB7E64E6); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.06,
   "image": "this.AnimatedImageResource_54EFB154_4941_24D1_41B4_C1790F6622D6",
   "pitch": -13.4,
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C7CEAC2_4669_1586_41C9_F0BDB3026767",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.06,
   "yaw": -2.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2, this.camera_D96566B7_D6EA_F0BD_41E4_103F1B043DD7); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.98,
   "image": "this.AnimatedImageResource_54E05155_4941_24D3_41B5_066AC8491CA8",
   "pitch": -15.84,
   "yaw": 176.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C5043C7_466F_1B8E_41CA_AA39D3051ECA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": 176.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74, this.camera_C697135C_D6EA_F1F2_4192_9C2EC49A3B4C); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_54E67158_4941_24D1_41B9_987A3BE65932",
   "pitch": -11.94,
   "yaw": 3.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5AAC10BA_48C0_E451_41A1_6DCA20A436E2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 3.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.94
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F892420_45E9_3965_41A1_D1A0F209CA02, this.camera_DB79D3BB_D6EA_F0B6_41AE_BBB653C355A9); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_54E6E158_4941_24D1_41BE_E3DF43ACA079",
   "pitch": -18.25,
   "yaw": -177.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5AA24109_48C1_2433_41BE_E6E2A6081D6B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": -177.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.25
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71851EC6_601C_1B8A_4194_4F13CF507CA9, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77E993DC_600C_29BE_41D6_365F67EA99B7, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.04,
   "image": "this.AnimatedImageResource_7711339B_600C_29BA_41D4_1EAA60A63644",
   "pitch": 2.82,
   "yaw": -71.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_719B3D40_6004_1E86_41C1_4434F4E58167",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.04,
   "yaw": -71.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019, this.camera_D8DF64FE_D6EA_F0AE_41BC_BE075B603B4D); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_54E3F157_4941_24DF_41B1_2BD2A4919753",
   "pitch": -10.47,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_472CC5EC_48C1_6FF0_41AA_4448ABADCC67",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.47
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963, this.camera_D8CB54F0_D6EA_F0B2_41DB_F79D79E6ADE7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.98,
   "image": "this.AnimatedImageResource_54E46157_4941_24DF_41B8_C3BCF2FE64BE",
   "pitch": -15.79,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4730FDA5_48C3_3C73_41C5_412CBF09EA01",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.98,
   "yaw": -174.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_7217CCA7_6004_1F8A_41BF_8ADC660A3259, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77ED23DA_600C_29BA_41C2_636C9DE5B749, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.03,
   "image": "this.AnimatedImageResource_7713A39A_600C_29BA_41D4_11C1C26CD24A",
   "pitch": 4.63,
   "yaw": 95.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7242B97B_6004_197A_41D6_3900C7E37F90",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.03,
   "yaw": 95.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 4.63
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BE504_45E9_3B2D_419A_B933E9065526, this.camera_C6ED574D_D6EA_F1D2_41E8_CA31A13619CB); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_54EE1153_4941_24D7_41D0_18D35935D947",
   "pitch": -9.23,
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FEDC0C4_4619_1581_41C1_D5A68F2A68BA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.16,
   "yaw": 1.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.23
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF, this.camera_D91B773D_D6EA_F1B2_41DA_337D9519629B); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.91,
   "image": "this.AnimatedImageResource_54EED153_4941_24D7_41D0_A10613BB09D7",
   "pitch": -17.73,
   "yaw": 179.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F90FE90_461B_0D81_41C3_BE9D69C8BBE5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 179.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.73
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C, this.camera_D881C0A2_D6EA_CF56_41DB_2105751F5B3C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.13,
   "image": "this.AnimatedImageResource_54E2B156_4941_24D1_41AF_66A8295D64E8",
   "pitch": -10.67,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_47E05B60_48C7_64F1_41B6_A9122C2AA661",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.13,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.67
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED, this.camera_D89520B4_D6EA_F0B2_41E5_07439AE0DD56); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_54E34156_4941_24D1_4199_E9A0E436B772",
   "pitch": -18.39,
   "yaw": 179.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_47F1896E_48C0_E4F1_41A7_8ED48FA05EB9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.89,
   "yaw": 179.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.39
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB, this.camera_D84D10E1_D6EA_F0D5_41D2_708B209A61C8); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_64535809_4B41_E433_41C1_EEC013935889",
   "pitch": -8.5,
   "yaw": -2.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50F6EAF0_495F_E5D0_41CD_424A7AB3F97C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": -2.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.5
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA, this.camera_D85FD0F0_D6EA_F0B2_41B2_F24999966339); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.91,
   "image": "this.AnimatedImageResource_64537809_4B41_E433_41CF_89F190862F26",
   "pitch": -17.89,
   "yaw": 175.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50D85ED6_4941_1DD0_41C3_3FE567DF22D0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 175.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.89
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_725D21B2_6004_298A_41BE_FD9353ED3A4F, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77F003E0_600C_2986_41D0_59B379E7E160, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.02,
   "image": "this.AnimatedImageResource_7718A3A2_600C_298B_41BA_65CA273358D6",
   "pitch": 5.75,
   "yaw": -88.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7201765A_6004_6ABA_41CE_38E4F9449F5C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -88.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.75
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_70024505_7EDC_814D_41D6_9579F8550A41, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6EAEFE8E_7EC3_835E_41D3_4DB9F101B347, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "40"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.97,
   "image": "this.AnimatedImageResource_7123DE2E_7EC3_835E_41C1_549BE2964965",
   "pitch": 9,
   "yaw": 64.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71D014CD_7EDD_80C2_41CA_0136F3CF7B83",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.97,
   "yaw": 64.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 9
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803, this.camera_DB1DC007_D6EA_CF5E_41D6_7D6513170575); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_6455C80F_4B41_E44F_41D2_18F315A547C4",
   "pitch": -5.53,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_57A0D076_4941_64D1_4186_2E45D08B16F0",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -0.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C, this.camera_DB078FF9_D6EA_D0B2_41E5_B9E0123DB52D); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.04,
   "image": "this.AnimatedImageResource_6455180F_4B41_E44F_41D0_1902B918D223",
   "pitch": -13.94,
   "yaw": 179.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5790BAE2_4940_E5F1_41C5_CCBA24BBE431",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.04,
   "yaw": 179.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.94
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2, this.camera_DB78FF6C_D6EA_D1D3_41D4_5C727F031EE2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_54EE3154_4941_24D1_41C0_752633335AD4",
   "pitch": -6.15,
   "yaw": -0.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F6AE555_4619_7C83_41C5_33EBAF3E0AA4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -0.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.15
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707, this.camera_DB7E9F5D_D6EA_D1F2_41E7_0C4CD61E9831); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.64,
   "image": "this.AnimatedImageResource_54EEF154_4941_24D1_41BF_19A323B51C10",
   "pitch": -23.82,
   "yaw": 179.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F3D600B_4667_3487_41CC_F9B533BF8EBD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.64,
   "yaw": 179.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71E40F8F_600C_F99A_41D4_8C5B79C2E0B3, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77E1C3D8_600C_2986_41CF_11B6E01D6F53, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.05,
   "image": "this.AnimatedImageResource_77162398_600C_2986_41CA_83690D686718",
   "pitch": 1.68,
   "yaw": 86.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71B80847_600D_E68A_41BA_C13FE034A7AE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.05,
   "yaw": 86.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3, this.camera_DB5B5FAD_D6EA_D152_41D8_EA705AB1B4B8); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.63,
   "image": "this.AnimatedImageResource_03BEFC7B_4943_1CD7_41C1_653026717FD8",
   "pitch": -10.55,
   "yaw": -43.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09E0BA71_4941_E4D3_41BD_29D5C40204BE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.63,
   "yaw": -43.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.55
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_710F14A2_6004_EF8A_41B4_0F22901386E6, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_712B44CB_6004_6F9A_41BC_EAC90DCB3CC6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.01,
   "image": "this.AnimatedImageResource_779E243E_6004_6EFA_41D0_4A51224B7760",
   "pitch": 6.53,
   "yaw": -6.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7104F472_6003_EE8A_41A3_4CA08C48BAC4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.01,
   "yaw": -6.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 6.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_722F87F0_6004_6987_41D3_557582944A58, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_712BD4CB_6004_6F9A_41CA_99139B342446, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.04,
   "image": "this.AnimatedImageResource_773A83B7_600C_298A_41D3_1AB16FEC8E4F",
   "pitch": 3.58,
   "yaw": -152.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71308210_6004_2A86_41D4_13BF2CBEB1D8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.04,
   "yaw": -152.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.58
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71900BF3_6004_398A_41B7_AE6FA4660427, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_712854CC_6004_6F9E_41C3_60171614D8E6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.02,
   "image": "this.AnimatedImageResource_779F143F_6004_6EFA_41CC_460B3F12A53F",
   "pitch": 5.71,
   "yaw": -62.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_714E6F7A_6004_197A_41D5_5F3F0EE3D708",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.02,
   "yaw": -62.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.71
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86, this.camera_D862855F_D6EA_F1EE_41E9_AC8319605E1C); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_54519D63_4941_3CF0_41CE_57A5C7713578",
   "pitch": -6.97,
   "yaw": 0.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_511336E1_4943_EDF3_41C8_3B875C8623D7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": 0.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.97
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6, this.camera_D874956D_D6EA_F1D2_41E0_CADED5425550); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.97,
   "image": "this.AnimatedImageResource_54520D63_4941_3CF0_41C4_693BE08B63A7",
   "pitch": -16.24,
   "yaw": -179.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5EDEC71C_4940_EC51_41C0_F00023991816",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.97,
   "yaw": -179.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.24
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D, this.camera_D8E364D4_D6EA_F0F2_41E2_8F7825E81B94); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_6457A815_4B41_E453_41AB_7CAAABC5543C",
   "pitch": -6.59,
   "yaw": -3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6FAEB0BC_4B47_2451_41CC_A190E694A6A9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.59
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6, this.camera_D8F8E4E3_D6EA_F0D6_41E4_AE16B56E1E46); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_6457C815_4B41_E453_41CA_EFFE57D08540",
   "pitch": -11.99,
   "yaw": 177.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6FC89058_4B47_24D1_41C5_133B822DF2FA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 177.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F, this.camera_C6EB2ECD_D6EA_D0D2_41CD_D5257D623FAC); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.11,
   "image": "this.AnimatedImageResource_54573D61_4941_3CF3_41BA_5607919B9703",
   "pitch": -11.43,
   "yaw": -1.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D9A7557_48C1_2CDF_41B5_54B8390D0AD4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.11,
   "yaw": -1.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.43
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9, this.camera_C6E1AEDB_D6EA_D0F6_41E7_6DA994F3E81D); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.91,
   "image": "this.AnimatedImageResource_5457AD61_4941_3CF3_41A9_67796C9A880B",
   "pitch": -17.8,
   "yaw": 175.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D722E1E_48C3_1C51_41CF_F5B40F736B0C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 175.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.8
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_72115716_6004_2A8A_41C0_0C102380AB13, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_7133E4B9_6004_6FF9_41CA_394BD33F4716, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.25,
   "image": "this.AnimatedImageResource_7779F41D_6004_6EBE_41D4_D576DB128911",
   "pitch": 5.65,
   "yaw": -83.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_714AEDE4_6004_798E_41CD_0FCB2551C2E6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.25,
   "yaw": -83.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 5.65
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6, this.camera_DB41CFA3_D6EA_D155_41C5_F829FD772D79); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_5457CD61_4941_3CF3_41D1_8F344B9D6B15",
   "pitch": -9.43,
   "yaw": -2.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C239EE6_4943_3DF1_41C9_FE51A1AB51A1",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -2.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.43
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F88F736_45EB_076D_41CC_27306C81C01E, this.camera_DB46FF94_D6EA_D172_41E5_136EFFE2DC87); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.76,
   "image": "this.AnimatedImageResource_54504D61_4941_3CF3_41D0_FA2C8DD60A66",
   "pitch": -21.44,
   "yaw": 178.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F41F8A1_4940_E473_41D2_1239CBBCDF37",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.76,
   "yaw": 178.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.44
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.83,
   "image": "this.AnimatedImageResource_714B2C99_4BC1_FC53_41B8_C2098FBD431E",
   "pitch": -13.4,
   "yaw": 7.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CEDFB1E_4B47_6451_41C8_34354490306E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.83,
   "yaw": 7.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.4
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893, this.camera_D82045A5_D6EA_F152_41E4_779C7E6802EA); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.58,
   "image": "this.AnimatedImageResource_714B5C99_4BC1_FC53_41BC_12D99768B437",
   "pitch": -39.71,
   "yaw": -168.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7CC98A13_4B40_E457_41A4_0D2E7BEC0EEC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.58,
   "yaw": -168.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.71
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D, this.camera_DB4F23DD_D6EA_F0F2_41D8_9F9AD57FBBE5); this.mainPlayList.set('selectedIndex', 58)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.87,
   "image": "this.AnimatedImageResource_7154DC9B_4BC1_FC57_41C7_54837EABE332",
   "pitch": -20.08,
   "yaw": -25.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_72B9778F_4BC0_EC4F_419B_B1E5EC045A06",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.87,
   "yaw": -25.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB, this.camera_DB7383CB_D6EA_F0D6_4174_F23834517409); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.07,
   "image": "this.AnimatedImageResource_7154FC9B_4BC1_FC57_41A4_07BF78F4275E",
   "pitch": -16.53,
   "yaw": 61.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_73CBB14B_4BC3_6430_41B0_EE6471CE89CC",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.07,
   "yaw": 61.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.53
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9, this.camera_DB4953EA_D6EA_F0D6_41E3_F8082AC6C278); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.2,
   "image": "this.AnimatedImageResource_71541C9B_4BC1_FC57_41BF_E75503864FAD",
   "pitch": -39.65,
   "yaw": 170.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_70221EB8_4BC1_1C51_41BF_E9D47A1DF097",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.2,
   "yaw": 170.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.65
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3, this.camera_D9E915E7_D6EA_F0DE_41E5_C1E6A8CBAB41); this.mainPlayList.set('selectedIndex', 62)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.26,
   "image": "this.AnimatedImageResource_03BC8C79_4943_1CD3_41C6_DE5A94A76D96",
   "pitch": -28.8,
   "yaw": -77.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0B6AFF5B_4941_1CD7_4163_8A9747166BBE",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.26,
   "yaw": -77.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.8
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6, this.camera_D9FD45FC_D6EA_F0B2_41E1_52796DCFD966); this.mainPlayList.set('selectedIndex', 63)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.54,
   "image": "this.AnimatedImageResource_03BF3C79_4943_1CD3_41CB_5B40A1A6D8DF",
   "pitch": -26.27,
   "yaw": 76.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0BEFDD3E_4943_3C51_41B0_73FD0E738757",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.54,
   "yaw": 76.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505, this.camera_D817F5CD_D6EA_F0ED_41E4_DE5E2B739F50); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.5,
   "image": "this.AnimatedImageResource_03BE5C7A_4943_1CD1_41CB_C05D5915A018",
   "pitch": -14.04,
   "yaw": 179.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AA231D9_4941_67D3_4196_5F3145F84BEA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.5,
   "yaw": 179.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.04
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BAA53_45EB_092B_41AF_894773C86A71, this.camera_DB2BA438_D6EA_F7B2_41AF_5B3F874F996E); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_6455980B_4B41_E437_41A3_37B6894326F6",
   "pitch": -9.25,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_545C917F_4941_24CF_41D0_9FB437AEDF47",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.16,
   "yaw": -1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12, this.camera_DB269448_D6EA_F7D2_41CE_AE131944ABA2); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.92,
   "image": "this.AnimatedImageResource_6455B80F_4B41_E44F_41CB_2934F858B644",
   "pitch": -17.52,
   "yaw": 179.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_544A0CED_4941_7DF3_41B2_371BF7286FA9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.92,
   "yaw": 179.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.52
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAE6A11_45E7_0927_41D0_94664647D77B, this.camera_D9D00645_D6EA_F3D2_41DD_A5E668AD7C6D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_6EDAF6BA_6004_2BFA_41D2_A75104C09060",
   "pitch": -6.32,
   "yaw": -0.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0ECFCEAF_48CF_3C4F_41BC_6C35D039E81F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -0.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.32
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A, this.camera_DB6FDF36_D6EA_D1BE_41E7_2B54A1709ECF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_54E01155_4941_24D3_41BC_2E73C9A6A7F7",
   "pitch": -8.29,
   "yaw": 5.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D369F84_4669_0B82_41C7_C049698AEFC7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": 5.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.29
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F893230_45E9_F965_418A_4CD22586F4C2, this.camera_DB934F27_D6EA_D15E_41D6_45699AD239D1); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.69,
   "image": "this.AnimatedImageResource_54E08155_4941_24D3_41D1_388EB7F84DE2",
   "pitch": -22.79,
   "yaw": -176.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D0D14EA_4669_1D81_41C8_EED68885B5DF",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.69,
   "yaw": -176.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.79
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061, this.camera_DB0BB485_D6EA_F752_41D6_9FC0FBCE8322); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.2,
   "image": "this.AnimatedImageResource_6456A815_4B41_E453_41CB_3F9C64F3C19A",
   "pitch": -7.38,
   "yaw": -0.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6DF04671_4B41_2CD3_41B6_79A185C8FFB8",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.2,
   "yaw": -0.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D, this.camera_DB329476_D6EA_F7BE_41EA_C86E8C5BDFDA); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_6456C815_4B41_E453_41C6_C2D445230E05",
   "pitch": -11.98,
   "yaw": 179.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_626B462F_4B47_6C4F_41CC_82BF74F4AC5C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 179.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.98
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_733411AE_6004_299A_41AF_876F434F9369, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_77F853EA_600C_299A_41AE_9C23DABFAA9C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.05,
   "image": "this.AnimatedImageResource_772E33A8_600C_2987_419C_62A127CA893E",
   "pitch": 1.67,
   "yaw": -89.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71AC18D0_6004_2786_41B8_9B238D79F2A3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.05,
   "yaw": -89.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.67
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7, this.camera_D8EDF4C5_D6EA_F0D2_41D3_5F3FE11B98D6); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.52,
   "image": "this.AnimatedImageResource_714A5C92_4BC1_FC51_41CB_8F461F7200D6",
   "pitch": -17.09,
   "yaw": 67.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_78DAC24D_4B41_E430_41BF_B81780647116",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 67.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.09
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF, this.camera_DB17B4B6_D6EA_F0BE_41E5_C6E7B5A9FA19); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.15,
   "image": "this.AnimatedImageResource_714A7C92_4BC1_FC51_41B8_352F764FEF13",
   "pitch": -9.81,
   "yaw": -171.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_795AECCB_4B43_7C37_41AA_6BC00259DAD2",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.15,
   "yaw": -171.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.81
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5, this.camera_D930C2B2_D6EA_F0B6_4198_D2984B8D7418); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.84,
   "image": "this.AnimatedImageResource_714BEC92_4BC1_FC51_41C1_9C9880C60C92",
   "pitch": -13.1,
   "yaw": -5.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7FB43619_4B43_6C53_41BB_1A12C54D86E5",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.84,
   "yaw": -5.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.1
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7, this.camera_D90202CC_D6EA_F0D2_41DB_8B09BC2C2336); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.64,
   "image": "this.AnimatedImageResource_714B0C92_4BC1_FC51_41CA_3C758931F6C5",
   "pitch": -23.72,
   "yaw": 173.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7C076925_4B41_E473_41B1_D731E3B1E8DD",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.64,
   "yaw": 173.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.72
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18, this.camera_D94D525A_D6EA_F3F6_41CF_19E7EDB63279); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.74,
   "image": "this.AnimatedImageResource_03B16C7B_4943_1CD7_41C0_2C4F7C69BC31",
   "pitch": -20.84,
   "yaw": -56.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0AE5B574_4940_ECD1_41C5_ACF92A6841F3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.74,
   "yaw": -56.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.84
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881, this.camera_D95EC270_D6EA_F3B2_41E3_70C442E377E4); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.34,
   "image": "this.AnimatedImageResource_03B1BC7C_4943_1CD1_41B9_7105CFFC41B3",
   "pitch": -16.11,
   "yaw": 113.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_09BE66CF_494F_2DCF_4197_48BBE3D9DDD3",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 113.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.11
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF, this.camera_D83275B3_D6EA_F0B6_41CA_E8249EF297DE); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_714AAC92_4BC1_FC51_41C3_2CD5B390704B",
   "pitch": -12.08,
   "yaw": 51.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7A8D38A1_4B5F_2473_41D1_CCB4076CD01F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 51.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.08
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C, this.camera_D805F5C0_D6EA_F0D2_41E2_17EEE98E0C24); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.14,
   "image": "this.AnimatedImageResource_714ADC92_4BC1_FC51_41BE_820BB6BEC169",
   "pitch": -10.31,
   "yaw": 176.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7B22ABE0_4B43_FBF1_41C9_5C4CBA046331",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.14,
   "yaw": 176.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.31
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E, this.camera_DB52142A_D6EA_F756_41D5_7F93FD9BB593); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_6454980B_4B41_E437_41CD_E6F6BEC424AF",
   "pitch": -5.93,
   "yaw": -1.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53848282_4941_2431_41D2_208929F5AEC6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -1.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86, this.camera_DB571418_D6EA_F772_41CC_6B182620F826); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.97,
   "image": "this.AnimatedImageResource_6454A80B_4B41_E437_41C7_4A33B4E3FD19",
   "pitch": -16.31,
   "yaw": 179.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53F3487B_4943_E4D7_41D1_937EA417A619",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.97,
   "yaw": 179.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.31
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_716DB464_7EC3_87C3_41CF_2197692629E4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6EAE3E8F_7EC3_835E_41DE_F7F91D1BB61C, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 02"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6,
   "image": "this.AnimatedImageResource_71223E30_7EC3_8342_41BA_833E0536B989",
   "pitch": 7.36,
   "yaw": -82.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_706C1E8F_7ECC_835E_41D1_85630B6F213E",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6,
   "yaw": -82.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 7.36
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C, this.camera_D80AA130_D6EA_F1B2_41E6_B5F881AC4B62); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.13,
   "image": "this.AnimatedImageResource_714A0C92_4BC1_FC51_41B5_CF9CAF91A38B",
   "pitch": -10.93,
   "yaw": 1.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7BF5C3C5_4B41_6430_41C4_5F1FE2837CA9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.13,
   "yaw": 1.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.93
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7, this.camera_D837111F_D6EA_F16E_41C7_5CE9D17A4592); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.01,
   "image": "this.AnimatedImageResource_714A2C92_4BC1_FC51_41BD_650FD1A88E90",
   "pitch": -14.94,
   "yaw": -179.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7840146E_4B47_2CF1_41CD_58FFBE0D6E5F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.01,
   "yaw": -179.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.94
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8AECB9_45E9_0964_419D_0883740A40F4, this.camera_DB4D4F88_D6EA_D152_41D7_752E674453E0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.21,
   "image": "this.AnimatedImageResource_6EDFF6C5_6004_2B8E_41C7_7471FF7482E8",
   "pitch": -6.38,
   "yaw": -3.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_510F5612_4618_F925_41C5_3243BAB9B5BA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.21,
   "yaw": -3.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.38
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703, this.camera_DB73AF7B_D6EA_D1B6_41A6_74C58FDE2A77); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.83,
   "image": "this.AnimatedImageResource_54ECD152_4941_24D1_4197_13532E2B052F",
   "pitch": -19.82,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_510D77B9_461B_0764_41BF_EF5B813046A4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.83,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.82
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703, this.camera_DB11B016_D6EA_CF7E_41D9_573AF5EBC29F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_6EDE56C3_6004_2B8A_41D4_87E682154B33",
   "pitch": -3.68,
   "yaw": 2.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_50D1771C_4629_075D_41AE_76D276EC2516",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": 2.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.68
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C, this.camera_D8E70024_D6EA_CF52_41C3_B0543129F9E3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.94,
   "image": "this.AnimatedImageResource_6EDEE6C3_6004_2B8A_41D5_9B6D110E0943",
   "pitch": -16.96,
   "yaw": -179.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5009D228_462B_1965_41CA_875CA12A91B7",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -179.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.96
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED, this.camera_D97CF241_D6EA_F3D2_41DD_8387BC10A1B0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.22,
   "image": "this.AnimatedImageResource_54E13155_4941_24D3_41BF_B6104068E597",
   "pitch": -5.77,
   "yaw": 0.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5BB294A0_467F_1D81_4192_64055C3FDD82",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.22,
   "yaw": 0.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0, this.camera_D96C022B_D6EA_F356_41DB_55DA02EFD868); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.09,
   "image": "this.AnimatedImageResource_54E1C156_4941_24D1_41BB_F4B0D79DC332",
   "pitch": -12.34,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5B81C812_4679_1486_41AA_0CB00A9CFC87",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.09,
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.34
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505, this.camera_DB204458_D6EA_F7F3_41E5_ACFD88F47B0B); this.mainPlayList.set('selectedIndex', 59)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_0822BDF7_4BC1_7FDF_41AA_C199A3F8A085",
   "pitch": -1.36,
   "yaw": -0.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7610A654_4BC1_6CD1_4176_957245AE87F4",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.26,
   "yaw": -0.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.36
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F84D840_45E9_0925_41BC_23E8F5463726, this.camera_DB38D463_D6EA_F7D6_41DD_5812E3BF0C48); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.21,
   "image": "this.AnimatedImageResource_0823CDF7_4BC1_7FDF_41C8_40630903148A",
   "pitch": -25.99,
   "yaw": -116.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_76A57604_4BC0_EC30_41C4_5E67110F87A9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.21,
   "yaw": -116.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.99
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881, this.camera_D848157B_D6EA_F1B6_41E1_1CD43A1B1A9A); this.mainPlayList.set('selectedIndex', 60)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.23,
   "image": "this.AnimatedImageResource_D75D7FCD_CF71_8FC8_41CF_3DB24A36BBF0",
   "pitch": -50.77,
   "yaw": -166.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0F1CC23B_4941_2457_41BC_1D225EB6C026",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.23,
   "yaw": -166.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.77
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_71B97021_6004_2686_41C6_407E2ECB8B4A, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','pressedBorderSize':0,'paddingLeft':5,'rollOverIconWidth':20,'paddingRight':5,'backgroundOpacity':0.3,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingTop':5,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconWidth':20,'iconColor':'#000000','rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'paddingBottom':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_712894CD_6004_6F9E_41D7_F7ED52F5B0FC, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Info Red 06"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.91,
   "image": "this.AnimatedImageResource_779D7441_6004_6E86_41C7_2FE72809102D",
   "pitch": -6.27,
   "yaw": -28.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_715813DD_6004_29BE_41C9_5A791D549C80",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.91,
   "yaw": -28.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.27
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA, this.camera_D94746E3_D6EA_F0D6_41CF_C9F62F61E5D0); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_64561815_4B41_E453_41B2_B46075F634C5",
   "pitch": -4.07,
   "yaw": -2.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_631A4C94_4B40_FC50_419C_5C9A851F2762",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": -2.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -4.07
  }
 ]
},
{
 "rollOverDisplay": false,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D, this.camera_D97686D0_D6EA_F0F2_41E0_957A8C7B3312); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "data": {
  "label": "Circle Arrow 02b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_64563819_4B41_E453_41D2_82925F85F0FD",
   "pitch": -12.63,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6389B6C7_4B43_6C3F_41AC_65652AE21682",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.08,
   "yaw": -179.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.63
  }
 ]
},
{
 "data": {
  "name": "Container2425"
 },
 "children": [
  "this.IconButton_6EF0C3E2_604E_C40E_41D4_AD7F9F372256",
  "this.IconButton_6EF0D3E2_604E_C40E_41BE_8172E3F2A3A0",
  "this.IconButton_6EF0B3E2_604E_C40E_41CA_B3A4193810F5"
 ],
 "layout": "vertical",
 "width": 40,
 "scrollBarColor": "#000000",
 "id": "Container_6EF0F3E2_604E_C40E_41CB_156490C8BB53",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "borderSize": 0,
 "minWidth": 20,
 "horizontalAlign": "center",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "gap": 4,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "hidden"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5455AD60_4941_3CF1_41C4_1AFE1E509D02",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5455DD60_4941_3CF1_41B3_1E280EBE3B2D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88DC8B_45EB_093B_41BC_EC1C5912E720_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_771F639C_600C_29BE_41AB_9214A2112B7B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5450FD61_4941_3CF3_41C2_0C6353D8E3DD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54511D61_4941_3CF3_41C4_99BD7349A50B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B8193_45EB_7B2B_41C0_E3132E47E2F6_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7125FE2D_7EC3_8342_41D3_DA76466C1EA0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDC26C1_6004_2B86_41D6_24F4F51AD72A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8108BB_45E7_095B_41B1_16C01C691254_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDCD6C1_6004_2B86_41CC_427384FDADA2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64560812_4B41_E451_41C3_AF77A97094FE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64562812_4B41_E451_41CE_62A164255ABA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_712B6E36_7EC3_834E_41C2_5D2A27147D8F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B924F_45EB_393B_41A7_B89773F28069_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_712AFE36_7EC3_834E_41D6_BD0AD8C69B35",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64564819_4B41_E453_41CD_B1133ECAF5C4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F890380_45E9_1F25_41C1_1E41B8CE7CAA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64566819_4B41_E453_4191_958D2FD571A6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_56788D68_4947_1CF0_4190_DDAB6542BE70",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88099C_45EB_0B5D_41CC_96BA903E32B9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5456BD61_4941_3CF3_4191_C8DB524B92EA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDBA6C0_6004_2B86_41D2_BE5D896DB0BD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FAE6A11_45E7_0927_41D0_94664647D77B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5D70E259_4667_3483_41B3_B32110AD5653",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454F80B_4B41_E437_41BE_7A88C4DBCDFC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB6A805_45EB_092F_41B9_CADBEA26428E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454180B_4B41_E437_41C6_70784F0BECD2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6455380F_4B41_E44F_41C7_3A0937520B54",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0B928_45EB_0B65_41D0_EE2AC79B0803_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64555812_4B41_E450_41BD_B640162F237E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714B7C99_4BC1_FC53_4190_E628AA980CAB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0B9EF_45E9_0AFB_41D0_1776D23104E9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7154AC9B_4BC1_FC57_4195_A1F6B3EABD90",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64556812_4B41_E450_41D1_06C1F8BBD55F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8A7728_45EB_0765_41CE_101928D8A27D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64568812_4B41_E451_41AA_F41C6A106C87",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDC96C2_6004_2B8A_41D2_5A5474824412",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8567C8_45E7_0724_41CE_480925BEAEFB_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDD26C2_6004_2B8A_41BB_858FA35F02A9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E27156_4941_24D1_41BA_64E545FB4C2D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BDD4B_45E9_0B3B_41CD_8837C587C5ED_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E20156_4941_24D1_41B6_676CE4EA1638",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6456A812_4B41_E451_416F_CF9246E62613",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6456F812_4B41_E451_41C9_AE3036FB2FC1",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0F4AE_45EB_197D_41C0_970D8835A079_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_712C0E34_7EC3_8342_4180_420B76C4F80E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EDA153_4941_24D7_416B_1D9209155A5F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B5A6F_45E9_09FB_41AD_8BE862CCCAFF_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EE7153_4941_24D7_41C6_16AC58E20197",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E40157_4941_24DF_41CE_B2EF1DDB7D58",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E4D157_4941_24DF_41A8_55018BB77375",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89F5FE_45E9_1ADD_41CD_DE9CB71C7019_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7710D39A_600C_29BA_41C6_979A43683149",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454280B_4B41_E437_41B3_7B96504E50B3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454780B_4B41_E437_41AB_40D3C1A124BC",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA08A86_45EB_092D_41A9_26DE0F09BF12_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7120CE31_7EC3_8342_41DB_C84F4B18CC18",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDE96C4_6004_2B8E_419E_7265BE980614",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BC12A_45E9_3B65_41B7_693DBC04F703_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDF56C4_6004_2B8E_41BC_4BC720297F8B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BDEC77_4943_1CDF_41C3_0B3973C8B0AB",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADF398_45EF_1F25_41C7_C2CEEE83E505_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BC1C78_4943_1CD1_41C4_DB2937A9FBD7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64557815_4B41_E453_41D2_1B1A7DEBD322",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA36B0A_45E9_0F25_41D0_1F0E2C6E1B2D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64568815_4B41_E453_41D0_4D6F22044562",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6457A819_4B41_E453_41C5_B0CB23F360FF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6457E819_4B41_E453_41CD_C98E5EAEDB1B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3F1DC_45E9_7ADC_41C1_DEB20E8DA3ED_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6ED3BE3B_7EC3_8346_41CC_341D04697271",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EF6154_4941_24D1_41C7_DA0CA763701B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B031C_45E9_1F5D_41C5_514D9149DCD2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EF0154_4941_24D1_41D1_B9FB97D9D1F9",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_71493C92_4BC1_FC51_41CE_2F96FE6F1676",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8E9EAA_45E9_0965_41C6_E7CCA3FCEB7C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_71496C92_4BC1_FC51_41CC_42EF6A4D5548",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64A8A819_4B41_E453_41CF_C1D0881CD25C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3BD41_45E9_0B27_41D0_165327C454DB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EFC46E0_6004_2B86_41B3_0BA5800EBBB0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_08221DF7_4BC1_7FDF_41D2_49ACB686929E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FAC26EA_45E9_06E5_41AA_E61BD1CF54BB_0_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7765A43A_6004_6EFA_41C1_2D72708359D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64573819_4B41_E453_41C6_05942172EA86",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64574819_4B41_E453_4174_F1FDC970A032",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8E9F91_45E9_0727_41C6_7E2FB607BA5B_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_776EE42E_6004_6E9A_41D2_6F20557E4696",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDDF6C2_6004_2B8A_41CC_02F837819181",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8CB537_45E8_FB6B_41CE_AE4DB9EEB10C_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDDA6C3_6004_2B8A_41D5_CABDA01636F7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64564815_4B41_E453_4198_8BEF1C243728",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0A017_45EB_192B_41A1_942FF945F4E6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64578815_4B41_E453_41A0_9AF38AE005A5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714B9C92_4BC1_FC51_41C0_5CA4F5B64681",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714BCC92_4BC1_FC51_41CD_186AFD030768",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8D9D8D_45E9_0B3F_41D0_6D5B4A9081A7_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7760E434_6004_6E8E_41C7_D182446EB5E6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54ED7152_4941_24D1_41BA_8CA518067F02",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8AECB9_45E9_0964_419D_0883740A40F4_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54ED0152_4941_24D1_41D1_6CBC0419325A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54549D60_4941_3CF1_41B4_F5BD0B541F76",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89CF3F_45E9_075B_41CB_25F8028E9F74_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54552D60_4941_3CF1_41CE_6DEC30ED81AA",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E55158_4941_24D1_41CA_60FC2FB9E7C8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F892420_45E9_3965_41A1_D1A0F209CA02_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E5F158_4941_24D1_41C7_FE66C4E97B70",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EFB154_4941_24D1_41B4_C1790F6622D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F893230_45E9_F965_418A_4CD22586F4C2_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E05155_4941_24D3_41B5_066AC8491CA8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E67158_4941_24D1_41B9_987A3BE65932",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E6E158_4941_24D1_41BE_E3DF43ACA079",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88E233_45E9_196B_41CA_7BAC40D7A57C_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7711339B_600C_29BA_41D4_1EAA60A63644",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E3F157_4941_24DF_41B1_2BD2A4919753",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E46157_4941_24DF_41B8_C3BCF2FE64BE",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB72872_45E9_09E5_41C6_B3CD1FDF3F7C_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7713A39A_600C_29BA_41D4_11C1C26CD24A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EE1153_4941_24D7_41D0_18D35935D947",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89C7A3_45E9_076B_41CE_CCB32F22C707_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EED153_4941_24D7_41D0_A10613BB09D7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E2B156_4941_24D1_41AF_66A8295D64E8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F887AE2_45E9_0EE5_41CA_BF4260D92963_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E34156_4941_24D1_4199_E9A0E436B772",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64535809_4B41_E433_41C1_EEC013935889",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64537809_4B41_E433_41CF_89F190862F26",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7718A3A2_600C_298B_41BA_65CA273358D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F883CC7_45EB_092B_41A8_EAEA096C2F86_0_HS_3_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7123DE2E_7EC3_835E_41C1_549BE2964965",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6455C80F_4B41_E44F_41D2_18F315A547C4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BAA53_45EB_092B_41AF_894773C86A71_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6455180F_4B41_E44F_41D0_1902B918D223",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EE3154_4941_24D1_41C0_752633335AD4",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54EEF154_4941_24D1_41BF_19A323B51C10",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BE504_45E9_3B2D_419A_B933E9065526_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_77162398_600C_2986_41CA_83690D686718",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BEFC7B_4943_1CD7_41C1_653026717FD8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_779E243E_6004_6EFA_41D0_4A51224B7760",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_773A83B7_600C_298A_41D3_1AB16FEC8E4F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FADE072_45EF_19E5_41BB_F1A3B5B64D18_0_HS_3_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_779F143F_6004_6EFA_41CC_460B3F12A53F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54519D63_4941_3CF0_41CE_57A5C7713578",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8BCF34_45EB_076D_41A4_23D935C23DAA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54520D63_4941_3CF0_41C4_693BE08B63A7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6457A815_4B41_E453_41AB_7CAAABC5543C",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B1D6E_45EB_0BFD_41C8_38502C72D7FA_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6457C815_4B41_E453_41CA_EFFE57D08540",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54573D61_4941_3CF3_41BA_5607919B9703",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5457AD61_4941_3CF3_41A9_67796C9A880B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F88F736_45EB_076D_41CC_27306C81C01E_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7779F41D_6004_6EBE_41D4_D576DB128911",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_5457CD61_4941_3CF3_41D1_8F344B9D6B15",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B4492_45EB_1925_41C5_AC9A9B5FE69F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54504D61_4941_3CF3_41D0_FA2C8DD60A66",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714B2C99_4BC1_FC53_41B8_C2098FBD431E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F822B39_45E9_0F64_4171_A295A5C28AA5_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714B5C99_4BC1_FC53_41BC_12D99768B437",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7154DC9B_4BC1_FC57_41C7_54837EABE332",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_7154FC9B_4BC1_FC57_41A4_07BF78F4275E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F84D840_45E9_0925_41BC_23E8F5463726_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_71541C9B_4BC1_FC57_41BF_E75503864FAD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BC8C79_4943_1CD3_41C6_DE5A94A76D96",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BF3C79_4943_1CD3_41CB_5B40A1A6D8DF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8DA22D_45EF_397F_4195_B7CAEB2DB881_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03BE5C7A_4943_1CD1_41CB_C05D5915A018",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6455980B_4B41_E437_41A3_37B6894326F6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8869E1_45EB_0AE7_41BB_BED4DC60EE1C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6455B80F_4B41_E44F_41CB_2934F858B644",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FDA59CD_45E7_0B3F_41C3_9268F61F0501_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDAF6BA_6004_2BFA_41D2_A75104C09060",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E01155_4941_24D3_41BC_2E73C9A6A7F7",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F896006_45E9_192D_41CD_3C392B2D4BB0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E08155_4941_24D3_41D1_388EB7F84DE2",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6456A815_4B41_E453_41CB_3F9C64F3C19A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6456C815_4B41_E453_41C6_C2D445230E05",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8B288F_45E9_093B_41A4_481C1EB79E0D_0_HS_2_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_772E33A8_600C_2987_419C_62A127CA893E",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714A5C92_4BC1_FC51_41CB_8F461F7200D6",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA0AE26_45E9_096D_41B3_380EEE40A05C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714A7C92_4BC1_FC51_41B8_352F764FEF13",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714BEC92_4BC1_FC51_41C1_9C9880C60C92",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA08C6B_45E9_09FB_41D1_588143C7A893_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714B0C92_4BC1_FC51_41CA_3C758931F6C5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03B16C7B_4943_1CD7_41C0_2C4F7C69BC31",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F888E0E_45EF_093D_41A8_B3F0DA10F6D3_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_03B1BC7C_4943_1CD1_41B9_7105CFFC41B3",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714AAC92_4BC1_FC51_41C3_2CD5B390704B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3AECF_45E9_093C_41BD_D693FF9E91C7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714ADC92_4BC1_FC51_41BE_820BB6BEC169",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454980B_4B41_E437_41CD_E6F6BEC424AF",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6454A80B_4B41_E437_41C7_4A33B4E3FD19",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8A49D9_45EB_0B27_41B7_D02CD90448DB_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_71223E30_7EC3_8342_41BA_833E0536B989",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714A0C92_4BC1_FC51_41B5_CF9CAF91A38B",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F873E2D_45E9_097F_41CE_8AD427B71ADF_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_714A2C92_4BC1_FC51_41BD_650FD1A88E90",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDFF6C5_6004_2B8E_41C7_7471FF7482E8",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8DEEC7_45E9_092B_41B1_27F0BA6B5E03_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54ECD152_4941_24D1_4197_13532E2B052F",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDE56C3_6004_2B8A_41D4_87E682154B33",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FB7F2A7_45E9_196B_41CB_A0DAB966AE53_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_6EDEE6C3_6004_2B8A_41D5_9B6D110E0943",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E13155_4941_24D3_41BF_B6104068E597",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F89AEB4_45E9_096D_4197_735FCE335C0A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_54E1C156_4941_24D1_41BB_F4B0D79DC332",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0822BDF7_4BC1_7FDF_41AA_C199A3F8A085",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4F8D1529_45E8_FB67_41D0_DD5CAF88673D_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_0823CDF7_4BC1_7FDF_41C8_40630903148A",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_D75D7FCD_CF71_8FC8_41CF_3DB24A36BBF0",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_0F807538_4941_EC51_41C5_1D503B4BA3F6_0_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_779D7441_6004_6E86_41C7_2FE72809102D",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64561815_4B41_E453_41B2_B46075F634C5",
 "class": "AnimatedImageResource",
 "frameDuration": 41
},
{
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4FA3761B_45E9_395B_41BF_C2774DAF2061_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 720
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_64563819_4B41_E453_41D2_82925F85F0FD",
 "class": "AnimatedImageResource",
 "frameDuration": 41
}],
 "start": "this.playAudioList([this.audio_DAD52E46_CF36_B038_41E8_897E1F6CD704]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_DBF12261_CF3E_70F8_41E2_5DB8AEA6393F], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B,this.Button_DBF16261_CF3E_70F8_41E4_1B707D03248C].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player445"
 },
 "children": [
  "this.MainViewer",
  "this.Container_6EF023E2_604E_C40E_41D5_E128788EF280",
  "this.ThumbnailList_DDDD5E7F_CF2E_90C8_41CA_E4EADD23BECE",
  "this.Image_DA4F67AE_CF11_9048_41DC_CB2614F2936B",
  "this.Container_DBF17261_CF3E_70F8_41E5_1A3A919401CE",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.92,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "buttonToggleFullscreen": [
  "this.Button_DBF11261_CF3E_70F8_41C7_7A4EA3E8A00B",
  "this.Button_DBF16261_CF3E_70F8_41E4_1B707D03248C"
 ],
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "buttonToggleMute": [
  "this.IconButton_6EF043E2_604E_C40E_4172_D9791F425FAB",
  "this.Button_DBF13261_CF3E_70F8_41C4_0285CB80AB1C"
 ],
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
