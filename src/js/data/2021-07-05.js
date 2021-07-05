dataSetVersion = "2021-07-05"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Region",
    key: "region",
    tooltip: "Check this to restrict to livers from certain regions.",
    checked: false,
    sub: [
      { name: "JP", key: "jp" },
      { name: "IN", key: "id" },
      { name: "KR", key: "kr" },
      { name: "EN", key: "en" },
      { name: "IN", key: "in" }
    ]
  },
  {
    name: "Remove boys",
    key: "boy",
    tooltip: "Check this to remove boys.",
    checked: false
  },
  {
    name: "Remove girls",
    key: "girl",
    tooltip: "Check this to remove girls.",
    checked: false
  },
  {
    name: "Remove retired members",
    key: "retired",
    tooltip: "Check this to remove graduated/retired members.",
    checked: true
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Tsukino Mito",
    img: "KWgYIBI.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Yuki Chihiro",
    img: "Xcb81tu.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  },
  {
    name: "Elu",
    img: "O5OjlwD.png",
    opts: {
      region: ['jp'],
      girl: true
    }
  }
];
