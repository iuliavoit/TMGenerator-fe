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
              nameStyle: ["font weight: 600;color:gray"],
              childrenColumns: [],
            },
          ]
        }
        ,
        {
          name: 'files',
          id: 'files',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '#',
              id: '#files',
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            }
          ],
        },
        {
          name: 'lines',
          id: 'lines',
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: 'x1000',
              id: 'x1000',
              nameStyle: ['color: gray;font-size:13px'],
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
              nameStyle: ['color: gray;font-size:13px'],
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
              nameStyle: ['color: gray;font-size:13px'],
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
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            },
            {
              name: 'trend',
              id: 'trendrecentcommitssmart',
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
          nameStyle: ['color: gray;font-size:13px'],
          childrenColumns: [
            {
              name: '%',
              id: '%allcommitsliterate',
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
              nameStyle: ['color: gray;font-size:13px'],
              childrenColumns: []
            },
            {
              name: 'trend',
              id: 'trendrecentcommitsliterate',
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
    }
  ]
}
