var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

anychart.onDocumentReady(function () {

    var json = {
        "chart": {
            "zIndex": 0,
            "enabled": true,
            "type": "pie-3d",
            "title": {
                "zIndex": 80,
                "enabled": true,
                "maxLength": null,
                "fontSize": 14,
                
                "fontFamily": "\"Voxround\", sans-serif",
                "fontColor": "#424242",
                "fontOpacity": 1,
                "fontDecoration": "none",
                "fontStyle": "normal",
                "fontVariant": "normal",
                "fontWeight": "normal",
                "letterSpacing": "normal",
                "textDirection": "ltr",
                "textShadow": "none",
                "lineHeight": "normal",
                "textIndent": 0,
                "vAlign": "top",
                "hAlign": "center",
                "wordWrap": "normal",
                "wordBreak": "normal",
                "textOverflow": "",
                "selectable": false,
                "disablePointerEvents": false,
                "useHtml": false,
                "width": null,
                "height": null,
                "align": "center",
                "text": "",
                "margin": {
                    "left": 0,
                    "top": 0,
                    "bottom": 0,
                    "right": 0
                },
                "padding": {
                    "left": 0,
                    "top": 0,
                    "bottom": 10,
                    "right": 0
                },
                "background": {
                    "zIndex": 0,
                    "enabled": false
                }
            },
            "background": {
                "zIndex": 0.5,
                "enabled": false
            },
            "tooltip": {
                "enabled": true,
                "title": {
                    "zIndex": 1,
                    "enabled": true,
                    "maxLength": null,
                    "fontSize": 14,
                      "fontFamily": "\"Voxround\", sans-serif",
                    "fontColor": "#bdbdbd",
                    "fontOpacity": 1,
                    "fontDecoration": "none",
                    "fontStyle": "normal",
                    "fontVariant": "normal",
                    "fontWeight": "normal",
                    "letterSpacing": "normal",
                    "textDirection": "ltr",
                    "textShadow": "none",
                    "lineHeight": "normal",
                    "textIndent": 0,
                    "vAlign": "top",
                    "hAlign": "left",
                    "wordWrap": "normal",
                    "wordBreak": "normal",
                    "textOverflow": "",
                    "selectable": false,
                    "disablePointerEvents": false,
                    "useHtml": false,
                    "width": "100%",
                    "height": null,
                    "align": "center",
                    "orientation": "top",
                    "rotation": 0,
                    "text": "",
                    "margin": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "padding": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "background": {
                        "enabled": false
                    }
                },
                "separator": {
                    "zIndex": 1,
                    "enabled": true,
                    "fill": "#bdbdbd",
                    "stroke": "none",
                    "width": "100%",
                    "height": 1,
                    "orientation": "top",
                    "margin": {
                        "left": 10,
                        "top": 10,
                        "bottom": 10,
                        "right": 10
                    }
                },
                "background": {
                    "zIndex": 0,
                    "enabled": true
                }
            },
            "margin": {
                "left": 0,
                "top": 0,
                "bottom": 0,
                "right": 0
            },
            "padding": {
                "left": 15,
                "top": 20,
                "bottom": 15,
                "right": 25
            },
            "a11y": {
                "enabled": true,
                "mode": "chart-elements"
            },
            "autoRedraw": true,
            "bounds": {},
            "contextMenu": {
                "enabled": true
            },
            "credits": {

                "enabled": false
            },
            "selectRectangleMarqueeFill": {
                "color": "#d3d3d3",
                "opacity": 0.4
            },
            "selectRectangleMarqueeStroke": "#d3d3d3",
            "legend": {
                "zIndex": 200,
                "enabled": false,
                "fontSize": 12,
                  "fontFamily": "\"Voxround\", sans-serif",
                "fontColor": "#424242",
                "fontOpacity": 1,
                "fontDecoration": "none",
                "fontStyle": "normal",
                "fontVariant": "normal",
                "fontWeight": "normal",
                "letterSpacing": "normal",
                "textDirection": "ltr",
                "textShadow": "none",
                "lineHeight": "normal",
                "textIndent": 0,
                "vAlign": "bottom",
                "hAlign": "start",
                "wordWrap": "normal",
                "wordBreak": "normal",
                "textOverflow": "...",
                "selectable": false,
                "disablePointerEvents": false,
                "useHtml": false,
                "inverted": false,
                "itemsLayout": "horizontal",
                "iconSize": 15,
                "width": null,
                "height": null,
                "maxWidth": null,
                "maxHeight": null,
                "position": "bottom",
                "positionMode": "outside",
                "drag": false,
                "itemsFormat": null,
                "titleFormat": null,
                "itemsHAlign": "left",
                "itemsSpacing": 0,
                "itemsSourceMode": "default",
                "hoverCursor": "pointer",
                "iconTextSpacing": 5,
                "align": "center",
                "margin": {
                    "left": 0,
                    "top": 0,
                    "bottom": 0,
                    "right": 0
                },
                "padding": {
                    "left": 0,
                    "top": 0,
                    "bottom": 0,
                    "right": 0
                },
                "background": {
                    "color": false
                },
                "title": {
                    "enabled": false,
                    "maxLength": null,
                    "fontSize": 15,

                    "fontFamily": "\"Voxround\", sans-serif",
                    "fontColor": "#424242",
                    "fontOpacity": 1,
                    "fontDecoration": "none",
                    "fontStyle": "normal",
                    "fontVariant": "normal",
                    "fontWeight": "normal",
                    "letterSpacing": "normal",
                    "textDirection": "ltr",
                    "textShadow": "none",
                    "lineHeight": "normal",
                    "textIndent": 0,
                    "vAlign": "top",
                    "hAlign": "center",
                    "wordWrap": "normal",
                    "wordBreak": "normal",
                    "textOverflow": "",
                    "selectable": false,
                    "disablePointerEvents": false,
                    "useHtml": false,
                    "width": null,
                    "height": null,
                    "align": "center",
                    "text": "Title text",
                    "margin": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "padding": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "background": {
                        "enabled": false
                    }
                },
                "titleSeparator": {
                    "zIndex": 1,
                    "enabled": false,
                    "fill": "#bdbdbd",
                    "stroke": "none",
                    "width": "100%",
                    "height": 1,
                    "orientation": "top",
                    "margin": {
                        "left": 0,
                        "top": 5,
                        "bottom": 5,
                        "right": 0
                    }
                },
                "paginator": {
                    "zIndex": 30,
                    "enabled": true,
                    "fontSize": 12,
                      "fontFamily": "\"Voxround\", sans-serif",
                    "fontColor": "#545f69",
                    "fontOpacity": 1,
                    "fontDecoration": "none",
                    "fontStyle": "normal",
                    "fontVariant": "normal",
                    "fontWeight": "normal",
                    "letterSpacing": "normal",
                    "textDirection": "ltr",
                    "textShadow": "none",
                    "lineHeight": "normal",
                    "textIndent": 0,
                    "vAlign": "top",
                    "hAlign": "start",
                    "wordWrap": "normal",
                    "wordBreak": "normal",
                    "textOverflow": "",
                    "selectable": false,
                    "disablePointerEvents": false,
                    "useHtml": false,
                    "orientation": "right",
                    "layout": "horizontal",
                    "background": {
                        "enabled": false
                    },
                    "padding": {
                        "left": 5,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    },
                    "margin": {
                        "left": 0,
                        "top": 0,
                        "bottom": 0,
                        "right": 0
                    }
                },
                "tooltip": {
                    "enabled": false,
                    "title": {
                        "zIndex": 1,
                        "enabled": false,
                        "maxLength": null,
                        "fontSize": 14,
                          "fontFamily": "\"Voxround\", sans-serif",
                        "fontColor": "#bdbdbd",
                        "fontOpacity": 1,
                        "fontDecoration": "none",
                        "fontStyle": "normal",
                        "fontVariant": "normal",
                        "fontWeight": "normal",
                        "letterSpacing": "normal",
                        "textDirection": "ltr",
                        "textShadow": "none",
                        "lineHeight": "normal",
                        "textIndent": 0,
                        "vAlign": "top",
                        "hAlign": "left",
                        "wordWrap": "normal",
                        "wordBreak": "normal",
                        "textOverflow": "",
                        "selectable": false,
                        "disablePointerEvents": false,
                        "useHtml": false,
                        "width": null,
                        "height": null,
                        "align": "center",
                        "orientation": "top",
                        "rotation": 0,
                        "text": "",
                        "margin": {
                            "left": 0,
                            "top": 0,
                            "bottom": 0,
                            "right": 0
                        },
                        "padding": {
                            "left": 0,
                            "top": 0,
                            "bottom": 0,
                            "right": 0
                        },
                        "background": {
                            "enabled": false
                        }
                    },
                    "separator": {
                        "zIndex": 1,
                        "enabled": false,
                        "fill": "#bdbdbd",
                        "stroke": "none",
                        "width": "100%",
                        "height": 1,
                        "orientation": "top",
                        "margin": {
                            "left": 10,
                            "top": 10,
                            "bottom": 10,
                            "right": 10
                        }
                    },
                    "background": {
                        "zIndex": 0,
                        "enabled": true
                    }
                }
            },
            "interactivity": {
                "spotRadius": 2,
                "multiSelectOnClick": true,
                "unselectOnClickOutOfPoint": false,
                "hoverMode": "single",
                "selectionMode": "multi-select"
            },
            "data": [

                [
                    "Oil shales",
                    11
                ],
                [
                    "Heavy oil",
                    3
                ],
                [
                    "Tar sands",
                    2
                ],
                [
                    "Proven reserves",
                    8
                ],
                [
                    "Future additions",
                    11
                ],
                [
                    "Unrecoverable",
                    22
                ]
            ],
            "palette": {
                "type": "distinct",
                "items": [
                    "#80deea",
                    "#00acc1",
                    "#00838f",
                    "#29b6f6",
                    "#0277bd",
                    "#0277bd",
                    "#8c9eff",
                    "#9575cd",
                    "#ce93d8",
                    "#8e24aa"
                ]
            },
            "hatchFillPalette": {
                "items": [
                    {
                        "fontFamily": "\"Voxround\", sans-serif",
                        "type": "backward-diagonal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "forward-diagonal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "horizontal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "vertical",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "dashed-backward-diagonal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "grid",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "dashed-forward-diagonal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "dashed-horizontal",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "dashed-vertical",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "diagonal-cross",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "diagonal-brick",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "divot",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "horizontal-brick",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "vertical-brick",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "checker-board",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "confetti",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "plaid",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "solid-diamond",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "zig-zag",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "weave",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-05",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-10",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-20",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10

                    },
                    {
                        "type": "percent-25",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-30",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-40",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-50",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-60",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-70",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-75",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-80",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    },
                    {
                        "type": "percent-90",
                        "color": "black 0.5",
                        "thickness": 1,
                        "size": 10
                    }
                ]
            },
            "center": {
                "stroke": "none",
                "fill": "none"
            },
            "overlapMode": "no-overlap",
            "startAngle": 0,
            "radius": "43%",
            "innerRadius": "30%",
            "sort": "none",
            "fontFamily": "\"Voxround\", sans-serif",
            "insideLabelsOffset": "50%",
            "connectorLength": "15%",
            "outsideLabelsCriticalAngle": 60,
            "forceHoverLabels": true,
            "connectorStroke": "#757575",
            "mode3d": true,
            "normal": {
                "explode": 0,
                "stroke": "none",
                "hatchFill": "none",
                "labels": {
                    "fontWeight": "bold",
                    "fontFamily": "\"Voxround\", sans-serif",
                    "zIndex": 34,
                    "enabled": true,
                    "disablePointerEvents": true
                },
                "outline": {
                    "stroke": "none",
                    "width": 0,
                    "offset": 0,
                    "enabled": true
                }
            },
            "hovered": {
                "explode": 0,
                "labels": {
                    "enabled": null
                },
                "outline": {
                    "stroke": "none",
                    "width": 10,
                    "offset": 0,
                    "enabled": null
                }
            },
            "selected": {
                "explode": "5%",
                "stroke": "none",
                "labels": {
                    "enabled": null
                },
                "outline": {
                    "stroke": "none",
                    "width": 10,
                    "offset": 0,
                    "enabled": null
                }
            }
        }
    };

    // create pie chart with passed data


    // set chart title text settings
var chart = anychart.fromJson(json);
    // set container id for the chart
    chart.container('container');
    // initiate chart drawing
    chart.draw();
});

}
/*
     FILE ARCHIVED ON 15:12:00 Jul 29, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:37:00 May 31, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 108.885
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.07
  RedisCDXSource: 0.598
  esindex: 0.01
  LoadShardBlock: 88.506 (3)
  PetaboxLoader3.datanode: 117.908 (5)
  load_resource: 106.684
  PetaboxLoader3.resolve: 47.179
  loaddict: 19.453
*/