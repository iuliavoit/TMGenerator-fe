export var mockMatrix =
  {
    "name": "mock matrix",
    "entity1PaddingColumns": [{
      "id": "entity1namecolumn",
      "name": "",
      "childrenColumns": []
    }, {
      "id": "entity1sizecolumn",
      "name": "Size(%)",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }, {
      "id": "entity1devscolumn",
      "name": "Devs",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }, {
      "id": "entity1activedevscolumn",
      "name": "Active Devs",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }, {
      "id": "entity1apkscolumn",
      "name": "APKS(%)",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }],
    "entity2PaddingColumns": [{
      "id": "entity2namecolumn",
      "name": "",
      "childrenColumns": []
    }, {
      "id": "entity2knowledgecolumn",
      "name": "Knowledge(%)",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }, {
      "id": "entity2componentscolumn",
      "name": "Components",
      "nameStyle": "font-weight: bold;text-align: center;",
      "childrenColumns": []
    }],
    "entity1PaddingData": {
      "scriptbee": {
        "entity1namecolumn": {"value": "scriptbee", "style": ""},
        "entity1sizecolumn": {"value": "695", "style": "background-color:green;"},
        "entity1devscolumn": {"value": "14", "style": ""},
        "entity1activedevscolumn": {"value": "14", "style": ""},
        "entity1apkscolumn": {"value": "14", "style": ""}
      },
      "dx": {
        "entity1namecolumn": {"value": "dx", "style": ""},
        "entity1sizecolumn": {"value": "577", "style": "background-color:green;"},
        "entity1devscolumn": {"value": "50", "style": ""},
        "entity1activedevscolumn": {"value": "50", "style": ""},
        "entity1apkscolumn": {"value": "50", "style": ""}
      },
      "depinder": {
        "entity1namecolumn": {"value": "depinder", "style": ""},
        "entity1sizecolumn": {"value": "55", "style": ""},
        "entity1devscolumn": {"value": "11", "style": ""},
        "entity1activedevscolumn": {"value": "11", "style": ""},
        "entity1apkscolumn": {"value": "11", "style": ""}
      },
      "depminer": {
        "entity1namecolumn": {"value": "depminer", "style": ""},
        "entity1sizecolumn": {"value": "19", "style": "color:red;"},
        "entity1devscolumn": {"value": "3", "style": ""},
        "entity1activedevscolumn": {"value": "3", "style": ""},
        "entity1apkscolumn": {"value": "3", "style": ""}
      },
      "insider": {
        "entity1namecolumn": {"value": "insider", "style": ""},
        "entity1sizecolumn": {"value": "201", "style": "background-color:green;"},
        "entity1devscolumn": {"value": "18", "style": ""},
        "entity1activedevscolumn": {"value": "18", "style": ""},
        "entity1apkscolumn": {"value": "18", "style": ""}
      }
    },
    "entity2PaddingData": {
      "scriptbee": {
        "entity2namecolumn": {"value": "scriptbee", "style": ""},
        "entity2knowledgecolumn": {"value": "14", "style": ""},
        "entity2componentscolumn": {"value": "14", "style": ""}
      },
      "dx": {
        "entity2namecolumn": {"value": "dx", "style": ""},
        "entity2knowledgecolumn": {"value": "50", "style": ""},
        "entity2componentscolumn": {"value": "50", "style": ""}
      },
      "depinder": {
        "entity2namecolumn": {"value": "depinder", "style": ""},
        "entity2knowledgecolumn": {"value": "11", "style": ""},
        "entity2componentscolumn": {"value": "11", "style": ""}
      },
      "depminer": {
        "entity2namecolumn": {"value": "depminer", "style": ""},
        "entity2knowledgecolumn": {"value": "3", "style": ""},
        "entity2componentscolumn": {"value": "3", "style": ""}
      },
      "insider": {
        "entity2namecolumn": {"value": "insider", "style": ""},
        "entity2knowledgecolumn": {"value": "18", "style": ""},
        "entity2componentscolumn": {"value": "18", "style": ""}
      }
    },
    "data": {
      "Sum of all commits": [{
        "source": "scriptbee",
        "target": "scriptbee",
        "value": "28",
        "style": "background-color:red;"
      }, {
        "source": "scriptbee",
        "target": "dx",
        "value": "64",
        "style": "background-color:green;"
      }, {
        "source": "scriptbee",
        "target": "depinder",
        "value": "25",
        "style": "background-color:red;"
      }, {
        "source": "scriptbee",
        "target": "depminer",
        "value": "17",
        "style": "background-color:red;"
      }, {"source": "scriptbee", "target": "insider", "value": "32", "style": "background-color:red;"}, {
        "source": "dx",
        "target": "scriptbee",
        "value": "64",
        "style": "background-color:green;"
      }, {"source": "dx", "target": "dx", "value": "100", "style": "background-color:green;"}, {
        "source": "dx",
        "target": "depinder",
        "value": "61",
        "style": "background-color:green;"
      }, {"source": "dx", "target": "depminer", "value": "53", "style": "background-color:green;"}, {
        "source": "dx",
        "target": "insider",
        "value": "68",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "scriptbee",
        "value": "25",
        "style": "background-color:red;"
      }, {
        "source": "depinder",
        "target": "dx",
        "value": "61",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "depinder",
        "value": "22",
        "style": "background-color:red;"
      }, {
        "source": "depinder",
        "target": "depminer",
        "value": "14",
        "style": "background-color:red;"
      }, {
        "source": "depinder",
        "target": "insider",
        "value": "29",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "scriptbee",
        "value": "17",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "dx",
        "value": "53",
        "style": "background-color:green;"
      }, {
        "source": "depminer",
        "target": "depinder",
        "value": "14",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "depminer",
        "value": "6",
        "style": "background-color:yellow;"
      }, {
        "source": "depminer",
        "target": "insider",
        "value": "21",
        "style": "background-color:red;"
      }, {
        "source": "insider",
        "target": "scriptbee",
        "value": "32",
        "style": "background-color:red;"
      }, {"source": "insider", "target": "dx", "value": "68", "style": "background-color:green;"}, {
        "source": "insider",
        "target": "depinder",
        "value": "29",
        "style": "background-color:red;"
      }, {
        "source": "insider",
        "target": "depminer",
        "value": "21",
        "style": "background-color:red;"
      }, {"source": "insider", "target": "insider", "value": "36", "style": "background-color:red;"}],
      "Multiplication of all commits": [{
        "source": "scriptbee",
        "target": "scriptbee",
        "value": "196",
        "style": "background-color:green;"
      }, {
        "source": "scriptbee",
        "target": "dx",
        "value": "700",
        "style": "background-color:green;"
      }, {
        "source": "scriptbee",
        "target": "depinder",
        "value": "154",
        "style": "background-color:green;"
      }, {
        "source": "scriptbee",
        "target": "depminer",
        "value": "42",
        "style": "background-color:red;"
      }, {
        "source": "scriptbee",
        "target": "insider",
        "value": "252",
        "style": "background-color:green;"
      }, {"source": "dx", "target": "scriptbee", "value": "700", "style": "background-color:green;"}, {
        "source": "dx",
        "target": "dx",
        "value": "2500",
        "style": "background-color:green;"
      }, {"source": "dx", "target": "depinder", "value": "550", "style": "background-color:green;"}, {
        "source": "dx",
        "target": "depminer",
        "value": "150",
        "style": "background-color:green;"
      }, {
        "source": "dx",
        "target": "insider",
        "value": "900",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "scriptbee",
        "value": "154",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "dx",
        "value": "550",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "depinder",
        "value": "121",
        "style": "background-color:green;"
      }, {
        "source": "depinder",
        "target": "depminer",
        "value": "33",
        "style": "background-color:red;"
      }, {
        "source": "depinder",
        "target": "insider",
        "value": "198",
        "style": "background-color:green;"
      }, {
        "source": "depminer",
        "target": "scriptbee",
        "value": "42",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "dx",
        "value": "150",
        "style": "background-color:green;"
      }, {
        "source": "depminer",
        "target": "depinder",
        "value": "33",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "depminer",
        "value": "9",
        "style": "background-color:red;"
      }, {
        "source": "depminer",
        "target": "insider",
        "value": "54",
        "style": "background-color:yellow;"
      }, {
        "source": "insider",
        "target": "scriptbee",
        "value": "252",
        "style": "background-color:green;"
      }, {
        "source": "insider",
        "target": "dx",
        "value": "900",
        "style": "background-color:green;"
      }, {
        "source": "insider",
        "target": "depinder",
        "value": "198",
        "style": "background-color:green;"
      }, {
        "source": "insider",
        "target": "depminer",
        "value": "54",
        "style": "background-color:yellow;"
      }, {"source": "insider", "target": "insider", "value": "324", "style": "background-color:green;"}]
    }
  }





