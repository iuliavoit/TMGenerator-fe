export var mockTable = {
  "columns": [{
    "name": "", "childrenColumns": [{
      "name": "",
      "childrenColumns": [{
        "childrenColumns": [{
          "id": "component",
          "type": "String",
          "name": "Component",
          "nameStyle": "color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "files",
        "name": "files",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "#files",
          "name": "#",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d",
          "childrenColumns": []
        }]
      }, {
        "id": "lines",
        "name": "lines",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "#lines",
          "name": "x1000",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d",
          "childrenColumns": []
        }]
      }, {
        "id": "commits",
        "name": "commits",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "#commits",
          "name": "#",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d",
          "childrenColumns": []
        }]
      }, {
        "id": "startDate",
        "name": "start date",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "yyyy-mmstart",
          "type": "Date",
          "name": "yyyy-mm",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d",
          "childrenColumns": []
        }]
      }, {
        "id": "endDate",
        "name": "end date",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "yyyy-mmend",
          "type": "Date",
          "name": "yyyy-mm",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d",
          "childrenColumns": []
        }]
      }]
    }]
  }, {
    "name": "PACE of CHANGES",
    "nameStyle": "color: #6c757d;",
    "borderR": true,
    "childrenColumns": [{
      "name": "Commits <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "name": "commits",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "mediancommits",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "name": "recent <br> commits",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "medianrecentcommits",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "trendrecentcommits",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "sortable": false,
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Change Volume <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "medianchurnwrapper",
        "name": "churn <br> median",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "medianchurn",
          "name": "x1000",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentmedianchurnwrapper",
        "name": "recent churn <br> median",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmedianchurn",
          "name": "x1000",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmedianchurntrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Growth <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "mediangrowth",
        "name": "lines <br> median",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "mediangrowth",
          "name": "x1000",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentmediangrowthwrapper",
        "name": "recent lines <br> median",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmediangrowth",
          "name": "x1000",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmediangrowthtrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Active Files <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "medianfileswrapper",
        "name": "files",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "medianfiles",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentmedianfileswrapper",
        "name": "recent <br> files",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmedianfiles",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmedianfilestrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Developers <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "mediandevswrapper",
        "name": "all <br> devs",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "mediandevs",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentdevswrapper",
        "name": "recent <br> devs",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmediandevs",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmediandevstrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Active Tasks <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "mediantaskswrapper",
        "name": "all <br> tasks",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "mediantasks",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recenttaskswrapper",
        "name": "recent <br> tasks",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmediantasks",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmediantaskstrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Commit Days <br> per month",
      "borderR": true,
      "childrenColumns": [{
        "id": "mediandayswrapper",
        "name": "active <br> days",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "mediandays",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentdayswrapper",
        "name": "recent <br> active days",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentmediandays",
          "name": "median",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentmediandaystrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }]
  }, {
    "name": "NATURE of CHANGES",
    "nameStyle": "color: #6c757d;",
    "childrenColumns": [{
      "name": "Creational",
      "description": "changes by which <br> files are added to repo",
      "descriptionStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
      "borderR": true,
      "childrenColumns": [{
        "id": "allchangescreationalwrapper",
        "name": "all <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "allchangescreational",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentchangescreationalswrapper",
        "name": "recent <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentchangescreational%",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentchangescreationaltrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Development",
      "description": "changes causing <br> substantial growth",
      "descriptionStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
      "borderR": true,
      "childrenColumns": [{
        "id": "allchangesdevwrapper",
        "name": "all <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "allchangesdev",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentchangesdevwrapper",
        "name": "recent <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "borderR": true,
        "childrenColumns": [{
          "id": "recentchangesdev%",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentchangesdevtrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "borderR": true,
          "childrenColumns": []
        }]
      }]
    }, {
      "name": "Refinement",
      "description": "changes causing <br> small churn",
      "descriptionStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
      "childrenColumns": [{
        "id": "allchangesrefwrapper",
        "name": "all <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "allchangesref",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }, {
        "id": "recentchangesrefwrapper",
        "name": "recent <br> changes",
        "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
        "childrenColumns": [{
          "id": "recentchangesref%",
          "name": "%",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }, {
          "id": "recentchangesreftrend",
          "name": "trend",
          "nameStyle": "font-weight: 400;font-size: 13px;color: #6c757d;",
          "childrenColumns": []
        }]
      }]
    }]
  }], "name": "Pace and Nature of Changes", 'data': {
    "scriptbee": {
      "component": {"value": "scriptbee", "style": ""},
      "#files": {"value": "695", "style": "font-weight:bold;"},
      "#lines": {"value": "67.0", "style": ""},
      "#commits": {"value": "209", "style": ""},
      "yyyy-mmstart": {"value": "2021-Jul-22 22:38:19 [93]", "style": ""},
      "yyyy-mmend": {"value": "2023-Mar-12 08:47:09 [136]", "style": ""},
      "mediancommits": {"value": "13", "style": ""},
      "medianrecentcommits": {"value": "11", "style": ""},
      "trendrecentcommits": {"value": "-0.15", "style": "border-right:1px solid;"},
      "medianchurn": {"value": "2.829", "style": ""},
      "recentmedianchurn": {"value": "4.282", "style": ""},
      "recentmedianchurntrend": {"value": "0.51", "style": "border-right:1px solid;"},
      "mediangrowth": {"value": "1.23", "style": ""},
      "recentmediangrowth": {"value": "2.715", "style": ""},
      "recentmediangrowthtrend": {"value": "1", "style": "border-right:1px solid;"},
      "medianfiles": {"value": "119", "style": ""},
      "recentmedianfiles": {"value": "177", "style": ""},
      "recentmedianfilestrend": {"value": "0.49", "style": "border-right:1px solid;"},
      "mediandevs": {"value": "1", "style": ""},
      "recentmediandevs": {"value": "1", "style": ""},
      "mediantasks": {"value": "0", "style": ""},
      "recentmediantasks": {"value": "0", "style": ""},
      "mediandays": {"value": "4", "style": ""},
      "recentmediandays": {"value": "4", "style": ""},
      "allchangescreational": {"value": "30.017226528854437", "style": ""},
      "recentchangescreational%": {"value": "26.549413735343382", "style": ""},
      "allchangesdev": {"value": "13.652024117140396", "style": ""},
      "recentchangesdev%": {"value": "15.996649916247906", "style": ""},
      "allchangesref": {"value": "54.39276485788114", "style": ""},
      "recentchangesref%": {"value": "55.108877721943045", "style": ""}
    }, "dx": {
      "component": {"value": "dx", "style": ""},
      "#files": {"value": "577", "style": "font-weight:bold;"},
      "#lines": {"value": "55.0", "style": ""},
      "#commits": {"value": "368", "style": ""},
      "yyyy-mmstart": {"value": "2017-Dec-18 07:02:09 [0]", "style": ""},
      "yyyy-mmend": {"value": "2023-Mar-1 00:46:18 [135]", "style": ""},
      "mediancommits": {"value": "5", "style": ""},
      "medianrecentcommits": {"value": "4", "style": ""},
      "trendrecentcommits": {"value": "-0.20", "style": "border-right:1px solid;"},
      "medianchurn": {"value": "0.707", "style": ""},
      "recentmedianchurn": {"value": "0.039", "style": ""},
      "recentmedianchurntrend": {"value": "-0.94", "style": "border-right:1px solid;"},
      "mediangrowth": {"value": "0.228", "style": ""},
      "recentmediangrowth": {"value": "0.01", "style": ""},
      "recentmediangrowthtrend": {"value": "-0.96", "style": "border-right:1px solid;"},
      "medianfiles": {"value": "36", "style": ""},
      "recentmedianfiles": {"value": "5", "style": ""},
      "recentmedianfilestrend": {"value": "-0.86", "style": "border-right:1px solid;"},
      "mediandevs": {"value": "2", "style": ""},
      "recentmediandevs": {"value": "2", "style": ""},
      "mediantasks": {"value": "1", "style": ""},
      "recentmediantasks": {"value": "0", "style": ""},
      "mediandays": {"value": "3", "style": ""},
      "recentmediandays": {"value": "2", "style": ""},
      "allchangescreational": {"value": "17.213603818615752", "style": ""},
      "recentchangescreational%": {"value": "20.0", "style": ""},
      "allchangesdev": {"value": "20.375894988066825", "style": ""},
      "recentchangesdev%": {"value": "11.11111111111111", "style": ""},
      "allchangesref": {"value": "59.785202863961814", "style": ""},
      "recentchangesref%": {"value": "68.88888888888889", "style": ""}
    }, "depinder": {
      "component": {"value": "depinder", "style": ""},
      "#files": {"value": "55", "style": ""},
      "#lines": {"value": "24.0", "style": ""},
      "#commits": {"value": "40", "style": ""},
      "yyyy-mmstart": {"value": "2021-Nov-27 11:53:30 [102]", "style": ""},
      "yyyy-mmend": {"value": "2023-Mar-9 14:00:47 [136]", "style": ""},
      "mediancommits": {"value": "2", "style": ""},
      "medianrecentcommits": {"value": "2", "style": ""},
      "trendrecentcommits": {"value": "", "style": "border-right:1px solid;"},
      "medianchurn": {"value": "0.546", "style": ""},
      "recentmedianchurn": {"value": "0.546", "style": ""},
      "recentmedianchurntrend": {"value": "", "style": "border-right:1px solid;"},
      "mediangrowth": {"value": "0.163", "style": ""},
      "recentmediangrowth": {"value": "0.222", "style": ""},
      "recentmediangrowthtrend": {"value": "0.36", "style": "border-right:1px solid;"},
      "medianfiles": {"value": "13", "style": ""},
      "recentmedianfiles": {"value": "13", "style": ""},
      "recentmedianfilestrend": {"value": "", "style": "border-right:1px solid;"},
      "mediandevs": {"value": "1", "style": ""},
      "recentmediandevs": {"value": "1", "style": ""},
      "mediantasks": {"value": "0", "style": ""},
      "recentmediantasks": {"value": "0", "style": ""},
      "mediandays": {"value": "1", "style": ""},
      "recentmediandays": {"value": "2", "style": ""},
      "allchangescreational": {"value": "28.06122448979592", "style": ""},
      "recentchangescreational%": {"value": "12.76595744680851", "style": ""},
      "allchangesdev": {"value": "21.428571428571427", "style": ""},
      "recentchangesdev%": {"value": "26.595744680851062", "style": ""},
      "allchangesref": {"value": "47.44897959183673", "style": ""},
      "recentchangesref%": {"value": "57.4468085106383", "style": ""}
    }, "depminer": {
      "component": {"value": "depminer", "style": ""},
      "#files": {"value": "19", "style": "color:#6c757d;"},
      "#lines": {"value": "2.0", "style": ""},
      "#commits": {"value": "16", "style": ""},
      "yyyy-mmstart": {"value": "2022-Feb-10 18:38:39 [108]", "style": ""},
      "yyyy-mmend": {"value": "2023-Feb-15 15:14:16 [134]", "style": ""},
      "mediancommits": {"value": "2", "style": ""},
      "medianrecentcommits": {"value": "2", "style": ""},
      "trendrecentcommits": {"value": "", "style": "border-right:1px solid;"},
      "medianchurn": {"value": "0.028", "style": ""},
      "recentmedianchurn": {"value": "0.003", "style": ""},
      "recentmedianchurntrend": {"value": "-0.89", "style": "border-right:1px solid;"},
      "mediangrowth": {"value": "0.004", "style": ""},
      "recentmediangrowth": {"value": "0.003", "style": ""},
      "recentmediangrowthtrend": {"value": "-0.25", "style": "border-right:1px solid;"},
      "medianfiles": {"value": "4", "style": ""},
      "recentmedianfiles": {"value": "1", "style": ""},
      "recentmedianfilestrend": {"value": "-0.75", "style": "border-right:1px solid;"},
      "mediandevs": {"value": "1", "style": ""},
      "recentmediandevs": {"value": "1", "style": ""},
      "mediantasks": {"value": "0", "style": ""},
      "recentmediantasks": {"value": "0", "style": ""},
      "mediandays": {"value": "1", "style": ""},
      "recentmediandays": {"value": "1", "style": ""},
      "allchangescreational": {"value": "35.18518518518518", "style": ""},
      "recentchangescreational%": {"value": "0.0", "style": ""},
      "allchangesdev": {"value": "11.11111111111111", "style": ""},
      "recentchangesdev%": {"value": "0.0", "style": ""},
      "allchangesref": {"value": "53.7037037037037", "style": ""},
      "recentchangesref%": {"value": "100.0", "style": ""}
    }, "insider": {
      "component": {"value": "insider", "style": ""},
      "#files": {"value": "201", "style": "font-weight:bold;"},
      "#lines": {"value": "32.0", "style": ""},
      "#commits": {"value": "83", "style": ""},
      "yyyy-mmstart": {"value": "2019-Feb-24 19:47:49 [30]", "style": ""},
      "yyyy-mmend": {"value": "2023-Mar-14 14:50:04 [136]", "style": ""},
      "mediancommits": {"value": "1", "style": ""},
      "medianrecentcommits": {"value": "1", "style": ""},
      "trendrecentcommits": {"value": "", "style": "border-right:1px solid;"},
      "medianchurn": {"value": "0.361", "style": ""},
      "recentmedianchurn": {"value": "0.273", "style": ""},
      "recentmedianchurntrend": {"value": "-0.24", "style": "border-right:1px solid;"},
      "mediangrowth": {"value": "0.156", "style": ""},
      "recentmediangrowth": {"value": "0.138", "style": ""},
      "recentmediangrowthtrend": {"value": "-0.12", "style": "border-right:1px solid;"},
      "medianfiles": {"value": "12", "style": ""},
      "recentmedianfiles": {"value": "5", "style": ""},
      "recentmedianfilestrend": {"value": "-0.58", "style": "border-right:1px solid;"},
      "mediandevs": {"value": "1", "style": ""},
      "recentmediandevs": {"value": "1", "style": ""},
      "mediantasks": {"value": "0", "style": ""},
      "recentmediantasks": {"value": "0", "style": ""},
      "mediandays": {"value": "1", "style": ""},
      "recentmediandays": {"value": "1", "style": ""},
      "allchangescreational": {"value": "26.72872340425532", "style": ""},
      "recentchangescreational%": {"value": "27.272727272727273", "style": ""},
      "allchangesdev": {"value": "15.02659574468085", "style": ""},
      "recentchangesdev%": {"value": "18.181818181818183", "style": ""},
      "allchangesref": {"value": "51.72872340425532", "style": ""},
      "recentchangesref%": {"value": "54.54545454545455", "style": ""}
    }
  }
}
