import React, { useRef, useEffect } from 'react'
import Container from '../Container/Container'
import { withTheme } from '../../theming'
import EventEmitter from 'events'

const SwitchEmitter = new EventEmitter()
const OPEN_BOTTOM_SHEET = 'OPEN_BOTTOM_SHEET'

// Third party
import BottomSheet from 'reanimated-bottom-sheet'

interface CardProps {
  id: string
  enabledInnerScrolling?: boolean
  snapPoints: number[]
  initialSnap?: number
  children: (id: string) => React.ReactNode
  theme: any
}

export const BottomSnap = {
  to: (snapIndex: number, sheetId: string) => {
    SwitchEmitter.emit(OPEN_BOTTOM_SHEET, snapIndex, sheetId)
  },
}

const BottomSheetWrapper: React.FC<CardProps> = ({
  id,
  snapPoints,
  initialSnap,
  children,
  enabledInnerScrolling,
  theme,
}) => {
  const drawer = useRef<any>(null)
  const listener = (snapIndex: number, sheetId: string) => sheetId === id && drawer.current.snapTo(snapIndex)

  useEffect(() => {
    SwitchEmitter.addListener(OPEN_BOTTOM_SHEET, listener)

    return () => {
      SwitchEmitter.removeListener(OPEN_BOTTOM_SHEET, listener)
    }
  }, [])

  return (
    <Container h={1}>
      <Container flex={1} viewStyle={{ shadowRadius: 6, shadowOpacity: 0.2, shadowColor: '#000000' }}>
        <BottomSheet
          ref={drawer}
          snapPoints={snapPoints}
          initialSnap={initialSnap}
          enabledInnerScrolling={enabledInnerScrolling || false}
          renderHeader={() => (
            <Container
              viewStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
              background={'primary'}
              alignItems={'center'}
              justifyContent={'center'}
              padding
            >
              <Container br={5} backgroundColor={theme.colors.primary.accessories} w={50} h={5} />
            </Container>
          )}
          renderContent={() => children(id)}
        />
      </Container>
    </Container>
  )
}

export default withTheme(BottomSheetWrapper)
