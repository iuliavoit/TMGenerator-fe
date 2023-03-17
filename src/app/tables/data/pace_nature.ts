export const pace_nature = {
  columns: [
    {
      name: "",
      childrenColumns: [
        {
          name: "",
          childrenColumns: [
            {
              id: 'component',
              name: 'Component',
              type: "string",
              rowspan: 2,
              nameStyle: ["font weight: 600; color: gray"],
              childrenColumns: [],
            },
            {
              id: 'files',
              name: 'files',
              type: "number",
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: '#',
                  id: '#files',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                }
              ]
            },
            {
              name: 'lines',
              id: 'lines',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'x1000',
                  id: 'x1000',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                }
              ],
            },
            {
              name: 'commits',
              id: 'commits',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: '#',
                  id: '#commits',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                }
              ],
            },
            {
              name: 'start date',
              id: 'startDate',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'yyyy-mm',
                  id: 'yyyy-mmstart',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                }
              ]
            },
            {
              name: 'latest date',
              id: 'latestDate',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'yyyy-mm',
                  id: 'yyyy-mmlatest',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                }
              ]
            }
          ]
        }
      ]
    }
    ,
    {
      name: 'PACE of Changes',
      id: 'paceofchanges',
      nameStyle: ['color: gray; font-weight:900;font-size: 18px'],
      childrenColumns: [
        {
          id: 'commitspermonth',
          name: 'Commits per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'commits',
              id: 'commitscommitspermonth',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'mediancommitscommitspermonth',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                }
              ]
            },
            {
              name: 'recent commits',
              id: 'recentcommitscommitspermonth',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianrecentcommitscommitspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentcommitscommitspermonth',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },

        {
          id: 'changevolumepermonth',
          name: 'Change volume per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'chum median',
              id: 'chummedianchangevolumepermonth',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: [
                {
                  name: 'x1000',
                  id: 'x1000chummedianchangevolumepermonth',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                }
              ]
            },
            {
              name: 'recent chum median',
              id: 'recentchummedianchangevolumepermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'x1000',
                  id: 'x1000recentchummedianchangevolumepermonth',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentchummedianchangevolumepermonth',
                  nameStyle: ['color: gray;font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },
        {
          id: 'growthpermonth',
          name: 'Growth per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'lines median',
              id: 'linesmediangrowthpermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'x100',
                  id: 'x100linesmediangrowthpermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            },
            {
              name: 'recent lines median',
              id: 'recentlinesmediangrowthpermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'x1000',
                  id: 'x1000recentlinesmediangrowthpermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentlinesmediangrowthpermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },

        {
          id: 'activefilespermonth',
          name: 'Active files per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'files',
              id: 'filesactivefilespermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianfilesactivefilespermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            },
            {
              name: 'recent files',
              id: 'recentfilesactivefilespermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianrecentfilesactivefilespermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentfilesactivefilespermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },
        {
          id: 'developerspermonth',
          name: 'Developers per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'all devs',
              id: 'alldevsdeveloperspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianalldevsdeveloperspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            },
            {
              name: 'recent devs',
              id: 'recentdevsdeveloperspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianrecentdevsdeveloperspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentdevsdeveloperspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },
        {
          id: 'activetaskspermonth',
          name: 'Active tasks per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'all tasks',
              id: 'alltasksactivetaskspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianalltasksactivetaskspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            },
            {
              name: 'recent tasks',
              id: 'recentactivetaskspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianrecentactivetaskspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentactivetaskspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        },
        {
          id: 'commitdayspermonth',
          name: 'Commit days per month',
          nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
          childrenColumns: [
            {
              name: 'active days',
              id: 'activedayscommitdayspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianactivedayscommitdayspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            },
            {
              name: 'recent active days ',
              id: 'recentactivedayscommitdayspermonth',
              nameStyle: ['color: gray', 'font-size:13px'],
              childrenColumns: [
                {
                  name: 'median',
                  id: 'medianrecentactivedayscommitdayspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
                {
                  name: 'trend',
                  id: 'trendrecentactivedayscommitdayspermonth',
                  nameStyle: ['color: gray', 'font-size:13px'],
                  childrenColumns: []
                },
              ]
            }
          ]
        }
      ]
    },
  ],
  data: []
}

