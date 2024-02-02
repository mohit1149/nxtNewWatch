import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  addToSavedVideos: () => {},
  activeTabItem: () => {},
  activeTab: '',
  onChangeTheme: () => {},
  removeSaveVideos: () => {},
})

export default CartContext
