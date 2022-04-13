const menuItems = [
  {
    text: "About",
    route: "/about"
  },

  {
    text: "Page-one",
    expanded: true,
    items: [
      {
        text: "subpage-one"
      },
      {
        text: "subpage-two"
      },
      {
        text: "subpage-three"
      },
      {
        text: "subpage-four"
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
