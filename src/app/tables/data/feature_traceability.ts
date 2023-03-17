export const feature_traceability = {
  columns: [
    {
      name: "",
      childrenColumns: [
        {
          name: "",
          childrenColumns: [
            {
              name: 'Component',
              id: 'component',
              type: 'string',
              nameStyle: ["font weight: 600;color:gray"],
              childrenColumns: [],
            },
          ]
        }
        ,
        {
          name: 'files',
          id: 'files',
          type: 'number',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '#',
              id: '#files',
              type: 'number',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ],
        },
        {
          name: 'lines',
          id: 'lines',
          type: 'number',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: 'x1000',
              id: 'x1000',
              type: 'number',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ],
        },
        {
          name: 'commits',
          id: 'commits',
          type: 'number',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '#',
              id: '#commits',
              type: 'number',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ],
        },
        {
          name: 'start date',
          id: 'startDate',
          type: 'date',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: 'yyyy-mm',
              type: 'date',
              id: 'yyyy-mmstart',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ]
        },
        {
          name: 'latest date',
          id: 'latestDate',
          type: 'date',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: 'yyyy-mm',
              type: 'date',
              id: 'yyyy-mmlatest',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
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
      descriptionStyle: ['color: gray;font-size: 13px'],
      childrenColumns: [
        {
          name: 'all commits',
          id: 'allcommitssmart',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '%',
              id: '%allcommitssmart',
              type: 'number',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ]
        },
        {
          name: 'recent commits',
          id: 'recentcommitssmart',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '%',
              id: '%recentcommitssmart',
              type: 'number',
              sortable: false,
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            },
            {
              name: 'trend',
              id: 'trendrecentcommitssmart',
              type: 'string',
              sortable: false,
              nameStyle: ['color: gray;font-size:13px'],
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
      descriptionStyle: ['color: gray;font-size: 13px'],
      childrenColumns: [
        {
          name: 'all commits',
          id: 'allcommitsliterate',
          type: 'number',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '%',
              id: '%allcommitsliterate',
              type: 'number',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ]
        },
        {
          name: 'recent commits',
          id: 'recentcommitsliterate',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '%',
              id: '%recentcommitsliterate',
              type: 'number',
              sortable: false,
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            },
            {
              name: 'trend',
              id: 'trendrecentcommitsliterate',
              type: 'string',
              sortable: false,
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            },
          ]
        }
      ],
    }
  ],
  data: [
    {
      'component': 'spring-kafka.config',
      '#files': 22,
      'x1000': 6,
      '#commits': 220,
      'yyyy-mmstart': '2016-03',
      'yyyy-latest': '2022-05',
      '%allcommitssmart': 60,
      '%recentcommitssmart': 82,
      'trendrecentcommitssmart': '36%',
      '%allcommitsliterate': 87,
      '%recentcommitsliterate': 86,
      'trendrecentcommitsliterate': '-1%'
    },
    {
      'component': 'spring-kafka.retrytopic',
      '#files': 42,
      'x1000': 9,
      '#commits': 290,
      'yyyy-mmstart': '2015-09',
      'yyyy-latest': '2023-01',
      '%allcommitssmart': 76,
      '%recentcommitssmart': 89,
      'trendrecentcommitssmart': '22%',
      '%allcommitsliterate': 93,
      '%recentcommitsliterate': 91,
      'trendrecentcommitsliterate': '2%'
    }
    ,
    {
      'component': 'spring-graphql.data',
      '#files': 19,
      'x1000': 7,
      '#commits': 150,
      'yyyy-mmstart': '2017-02',
      'yyyy-latest': '2022-11',
      '%allcommitssmart': 68,
      '%recentcommitssmart': 79,
      'trendrecentcommitssmart': '13%',
      '%allcommitsliterate': 90,
      '%recentcommitsliterate': 88,
      'trendrecentcommitsliterate': '-2%'
    },
    {}
    ,
    {
      'component': 'spring-graphql.bootstarter',
      '#files': 31,
      'x1000': 4,
      '#commits': 190,
      'yyyy-mmstart': '2014-11',
      'yyyy-latest': '2022-09',
      '%allcommitssmart': 57,
      '%recentcommitssmart': 72,
      'trendrecentcommitssmart': '9%',
      '%allcommitsliterate': 85,
      '%recentcommitsliterate': 84,
      'trendrecentcommitsliterate': '1%'
    }

  ]
}
