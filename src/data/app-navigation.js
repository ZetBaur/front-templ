const menuItems = [
  {
    text: "Page-one",
    expanded: true,
    items: [
      {
        text: "Video Players"
      },
      {
        text: "Projectors"
      }
    ]
  },
  {
    text: "Page-three",
    expanded: true,
    items: [
      {
        text: "Video Players"
      },
      {
        text: "Projectors"
      }
    ]
  },
  {
    text: "Page-two",
    expanded: true,
    items: [
      {
        text: "Video Players"
      },
      {
        text: "Projectors"
      }
    ]
  }
];

export default {
  getMenuItems() {
    return menuItems;
  }
};
