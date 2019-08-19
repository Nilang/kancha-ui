import React, { useState } from 'react'
import Container from '../Container/Container'
import AccordionItem from '../AccordionItem/AccordionItem'
import { ClaimTreeNormalised } from '../../types'
import { LayoutAnimation, Image } from 'react-native'
import { normaliseClaimTree, isTopLevelSingleKey, renderCrendentialItem } from '../../utils/claim'
import { withTheme } from '../../theming'

interface ClaimExploreProps {
  claim: any
  theme: any
}

interface ClaimExploreState {
  [index: string]: boolean
}

const ClaimExplore: React.FC<ClaimExploreProps> = props => {
  const [accordionKeys, updateAccordionKeys] = useState<ClaimExploreState>({})

  /**
   * Save the open / closed state to a dynamic state key that gets generated as you interact
   */
  const revealChildren = (stateKey: string) => {
    /**
     * Custom animation curve
     */
    LayoutAnimation.configureNext({
      duration: 500,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.8 },
      delete: { type: 'linear', property: 'opacity' },
    })

    updateAccordionKeys((keys: ClaimExploreState) => {
      return {
        ...keys,
        [stateKey]: !keys[stateKey],
      }
    })
  }

  /**
   * Normalise claim into predicatable array structure
   */
  const normalisedClaimTree: ClaimTreeNormalised[] = normaliseClaimTree(props.claim)
  // console.tron.log(normalisedClaimTree)
  /**
   * Recursive function to re-iterate over a normalised claim to create an accordion
   */
  const collapsibleCredential = (claims: any[]) => {
    /**
     * Map through the normalised claim and produce UI
     */
    return claims.map((item: any) => {
      /**
       * Flags for UI to decide what to do with data types
       */
      const isObjectVisible =
        item.hasChildren &&
        (accordionKeys[item.key] || isTopLevelSingleKey(props.claim, item.level)) &&
        !item.isList
      const isListVisible =
        item.hasChildren &&
        (accordionKeys[item.key] || isTopLevelSingleKey(props.claim, item.level)) &&
        item.isList
      const sectionClosed =
        item.hasChildren && (accordionKeys[item.key] || isTopLevelSingleKey(props.claim, item.level))
      const sectionExpanded = item.hasChildren && !accordionKeys[item.key]

      return (
        <Container key={item.key} flexDirection={'row'}>
          <Container w={item.level} />
          <Container flex={1}>
            {!isTopLevelSingleKey(props.claim, item.level) && !item.hidden && (
              <AccordionItem
                subTitle={!item.hasChildren && item.title}
                onPress={() => revealChildren(item.key)}
                indicator={sectionClosed ? 'up' : sectionExpanded ? 'down' : null}
                last={true}
              >
                {!item.hasChildren ? renderCrendentialItem(item.value) : item.title}
              </AccordionItem>
            )}
            {renderCrendentialItem(item.value) === null && (
              <Image source={{ uri: item.value }} style={{ height: 150 }} resizeMode={'cover'} />
            )}
            {isObjectVisible && collapsibleCredential(item.value)}
            {isListVisible && (
              <Container dividerBottom={sectionExpanded}>
                {item.value.map((listItem: any) => {
                  return (
                    <Container
                      key={listItem.key}
                      margin={5}
                      br={props.theme.roundedCorners.cards}
                      borderColor={props.theme.colors.primary.divider}
                      borderWidth={1}
                    >
                      {!listItem.isListItem && listItem.hasChildren && collapsibleCredential(listItem.value)}
                      {listItem.isListItem && !listItem.hasChildren && (
                        <Container flexDirection={'row'} flex={1}>
                          <Container w={item.level} />
                          <Container flex={1}>
                            <AccordionItem>{renderCrendentialItem(listItem.value)}</AccordionItem>
                          </Container>
                        </Container>
                      )}
                    </Container>
                  )
                })}
              </Container>
            )}
          </Container>
        </Container>
      )
    })
  }

  return <Container marginBottom={32}>{collapsibleCredential(normalisedClaimTree)}</Container>
}

export default withTheme(ClaimExplore)
