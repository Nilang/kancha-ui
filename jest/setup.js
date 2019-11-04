jest.mock('react-native-reanimated', () => {
  return {
    set: jest.fn(),
  }
})

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')
