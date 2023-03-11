
export const feature_traceability = [
  {
    name: "",
    childrenColumns: [
      {
        name: 'Component',
        id: 'component',
        nameStyle: ["font weight: 600", "color: gray"],
        rowspan:2,
        childrenColumns: [],
      },
      {
        name: 'files',
        id: 'files',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '#',
            id: '#files',
            nameStyle: ['color: gray'],
            childrenColumns:[]
          }
        ],
      },
      {
        name: 'lines',
        id: 'lines',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: 'x1000',
            id: 'x1000',
            nameStyle: ['color: gray'],
            childrenColumns:[]
          }
        ],
      },
      {
        name: 'commits',
        id: 'commits',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '#',
            id: '#commits',
            nameStyle: ['color: gray'],
            childrenColumns:[]
          }
        ],
      },
      {
        name: 'start date',
        id: 'startDate',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: 'yyyy-mm',
            id: 'yyyy-mmstart',
            nameStyle: ['color: gray'],
            childrenColumns:[]
          }
        ]
      },
      {
        name: 'latest date',
        id: 'latestDate',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: 'yyyy-mm',
            id: 'yyyy-mmlatest',
            nameStyle: ['color: gray'],
            childrenColumns:[]
          }
        ]
      },
    ],
  },
  {
    name: "Smart Commits",
    id: 'smartCommits',
    nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
    description: "commits with task references",
    descriptionStyle: ['color: gray', 'font-size: 13px'],
    childrenColumns: [
      {
        name: 'all commits',
        id: 'allcommitssmart',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '%',
            id: '%allcommitssmart',
            nameStyle: ['color: gray'],
            childrenColumns: []
          }
        ]
      },
      {
        name: 'recent commits',
        id: 'recentcommitssmart',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '%',
            id: '%recentcommitssmart',
            nameStyle: ['color: gray'],
            childrenColumns: []
          },
          {
            name: 'trend',
            id: 'trendrecentcommitssmart',
            nameStyle: ['color: gray'],
            childrenColumns: []
          },
        ]
      }
    ],
  },
  {
    name: "Literate Commits",
    id: 'literatecommits',
    nameStyle: ['font-weight: bold', 'color: black', 'font-size: 15px'],
    description: "commits with reasonable message",
    descriptionStyle: ['color: gray', 'font-size: 13px'],
    childrenColumns: [
      {
        name: 'all commits',
        id: 'allcommitsliterate',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '%',
            id: '%allcommitsliterate',
            nameStyle: ['color: gray'],
            childrenColumns: []
          }
        ]
      },
      {
        name: 'recent commits',
        id: 'recentcommitsliterate',
        nameStyle: ['color: gray'],
        childrenColumns: [
          {
            name: '%',
            id: '%recentcommitsliterate',
            nameStyle: ['color: gray'],
            childrenColumns: []
          },
          {
            name: 'trend',
            id: 'trendrecentcommitsliterate',
            nameStyle: ['color: gray'],
            childrenColumns: []
          },
        ]
      }
    ],
  }
]
