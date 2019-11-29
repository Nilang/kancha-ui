import React, { useState } from 'react'
import Container from '../Container/Container'
import Icon from '../Icon/Icon'
import Text, { TextTypes } from '../Text/Text'
import Radio from '../RadioBtn/RadioBtn'
import { TouchableHighlight } from 'react-native'
import { withTheme } from '../../theming'
import { RequestItemSelectable } from '../../types'
import S from 'string'

interface RequestItem {
  /**
   *  Pass a test ID to button
   */
  testID?: string
  /**
   * Remove bottom divider
   */
  last?: boolean

  /**
   * Remove bottom divider
   */
  dividerBottom?: boolean

  /**
   * Subtitle to show over main text
   */
  claimType: string

  /**
   *  Note to show on the right
   */
  itemNote?: string

  /**
   *  Credential property options
   */
  options: RequestItemSelectable[]

  /**
   *  The item being request is required
   */
  required?: boolean

  /**
   *  Return the selected item
   */
  onSelectItem: (id: string, claimType: string) => void

  /**
   *  Theme
   */
  closeAfterSelect?: boolean

  /**
   *  Theme
   */
  theme: any
}
/**
 * Simplified list otem for use in request flows
 */
const RequestItem: React.FC<RequestItem> = props => {
  const hasOptions = !props.required || props.options.length > 1
  const [options, updateSelected] = useState(props.options)
  const [optionsExpanded, toggleOptions] = useState(false)
  const [shared, toggleShared] = useState(true)
  const selected = options.find((i: RequestItemSelectable) => i.selected)
  const selectItem = (id: string) => {
    const updatedOptions = options.map(item => {
      return item.id === id ? { ...item, selected: true } : { ...item, selected: false }
    })
    updateSelected(updatedOptions)
    toggleShared(true)

    if (props.closeAfterSelect !== false) {
      toggleOptions(false)
    }

    props.onSelectItem(id, props.claimType)
  }
  const declineShare = () => {
    const updatedOptions = options.map(item => {
      return { ...item, selected: false }
    })
    updateSelected(updatedOptions)
    toggleShared(false)

    if (props.closeAfterSelect !== false) {
      toggleOptions(false)
    }

    props.onSelectItem('NOSHARE', props.claimType)
  }

  return (
    <TouchableHighlight
      onPress={() => toggleOptions(!optionsExpanded)}
      disabled={!hasOptions}
      testID={props.testID}
    >
      <Container background={'primary'} dividerBottom={!props.last || props.dividerBottom}>
        <Container
          paddingLeft={24}
          paddingTop={16}
          paddingBottom={16}
          flexDirection={'row'}
          alignItems={'center'}
        >
          <Container flex={1}>
            {props.claimType && (
              <Text type={TextTypes.SubTitle}>
                {S(props.claimType).capitalize().s}
                {props.required ? '*' : ''}
              </Text>
            )}
            <Container paddingTop={2}>
              <Text type={TextTypes.Body}>{selected ? selected.value : 'Not Shared'}</Text>
            </Container>
          </Container>
          {props.itemNote && (
            <Container paddingRight={32}>
              <Text type={TextTypes.ListItemNote}>{props.itemNote}</Text>
            </Container>
          )}
          {hasOptions && (
            <Container paddingRight={32}>
              <Icon icon={optionsExpanded ? props.theme.icons.UP : props.theme.icons.DOWN} />
            </Container>
          )}
        </Container>
        {hasOptions && optionsExpanded && (
          <Container marginLeft={8} paddingLeft={true} paddingBottom={true}>
            {!props.required && (
              <Container flexDirection={'row'}>
                <Container flex={1}>
                  <Radio disabled={props.required} selected={!shared} onPress={() => declineShare()}>
                    Do not share
                  </Radio>
                </Container>
              </Container>
            )}
            {options.map(item => {
              return (
                <Container key={item.id} flexDirection={'row'} alignItems={'center'}>
                  <Container flex={1}>
                    <Radio selected={item.selected} onPress={() => selectItem(item.id)}>
                      {item.value}
                    </Radio>
                  </Container>
                  <Container paddingRight={true}>
                    <Text type={TextTypes.ListItemNote}>{item.iss.shortId}</Text>
                  </Container>
                </Container>
              )
            })}
          </Container>
        )}
      </Container>
    </TouchableHighlight>
  )
}
export default withTheme(RequestItem)
