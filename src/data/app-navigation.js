const menuItems = [
  {
    text: "Super Mart of the West",
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
    text: "Home",
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
