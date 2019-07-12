import * as React from 'react'
import Container from '../Container/Container'
import Text, { TextTypes } from '../Text/Text'

interface RequestItem {
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
  subTitle?: string

  /**
   *  Note to show on the right
   */
  itemNote?: string
}
/**
 * Simplified list otem for use in request flows
 */
const RequestItem: React.FC<RequestItem> = props => {
  return (
    <Container
      background={'primary'}
      paddingLeft={24}
      paddingTop={16}
      paddingBottom={16}
      dividerBottom={!props.last || props.dividerBottom}
      flexDirection={'row'}
      alignItems={'center'}
    >
      <Container flex={1}>
        {props.subTitle && <Text type={TextTypes.SubTitle}>{props.subTitle}</Text>}
        <Container paddingTop={2}>
          <Text type={TextTypes.Body}>{props.children}</Text>
        </Container>
      </Container>
      {props.itemNote && (
        <Container paddingRight={32}>
          <Text type={TextTypes.ListItemNote}>{props.itemNote}</Text>
        </Container>
      )}
    </Container>
  )
}
export default RequestItem
