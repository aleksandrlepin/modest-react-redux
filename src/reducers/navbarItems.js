const initialState = [
  {
    id: 0,
    text: 'home',
    path: '/',
    active: true,
  },
  {
    id: 1,
    text: 'input',
    path: '/input',
    active: false,
  },
  {
    id: 2,
    text: 'gallery',
    path: '/gallery',
    active: false,
  },
  {
    id: 3,
    text: 'about',
    path: '/about',
    active: false,
  },
  {
    id: 4,
    text: 'work',
    path: '/work',
    active: false,
  },
  {
    id: 5,
    text: 'services',
    path: '/services',
    active: false,
  },
  {
    id: 6,
    text: 'features',
    path: '/features',
    active: false,
  },
]
const navbarItems = (state = initialState, action) => {
  switch(action.type) {
    case 'ACTIVE_MENU':
      return state.map(item => {
        item.active = false;
        if(item.id === action.payload) {
          item.active = true;
        }
        return item;
      });
    default:
      return state;
  }
}

export default navbarItems;
