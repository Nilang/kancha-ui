/**
 * Components
 */

import Screen from './components/Screen/Screen'
import Container from './components/Container/Container'
import Text, { TextTypes } from './components/Text/Text'
import Button, { ButtonBlocks } from './components/Button/Button'
import Icon from './components/Icon/Icon'
import LogItem from './components/LogItem/LogItem'
import ListItem from './components/ListItem/ListItem'
import Section from './components/Section/Section'
import FabButton from './components/FabButton/FabButton'
import Avatar from './components/Avatar/Avatar'
import MenuItem from './components/MenuItem/MenuItem'
import Modal from './components/Modal/Modal'

import { BrandOptions } from './constants'

import Device from './services/device'

const Constants = {
  ButtonBlocks,
  BrandOptions,
  TextTypes,
}

export {
  Screen,
  Container,
  Button,
  Text,
  Icon,
  LogItem,
  ListItem,
  MenuItem,
  Section,
  FabButton,
  Avatar,
  Modal,
  Constants,
  Device,
}

/**
 * Theming provider by @callstack/react-theme-provider
 */
export { ThemeProvider, withTheme, useTheme, createTheme, mergeTheme } from './theming/index'
