import React, { forwardRef } from 'react'
import Container from '../Container/Container'
import { withTheme } from '../../theming'

// Third party
import BottomSheet from 'reanimated-bottom-sheet'

interface CardProps {
  snapPoints: number[]
  initialSnap?: number
  theme: any
}

const BottomSheetWrapper = forwardRef<{}, CardProps>(({ snapPoints, initialSnap, children, theme }, ref) => (
  <Container h={1}>
    <Container flex={1} viewStyle={{ shadowRadius: 6, shadowOpacity: 0.1, shadowColor: '#000000' }}>
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        initialSnap={initialSnap}
        enabledInnerScrolling={true}
        renderHeader={() => (
          <Container
            viewStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
            background={'primary'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={8}
          >
            <Container br={5} backgroundColor={theme.colors.primary.accessories} w={50} h={5} />
          </Container>
        )}
        renderContent={() => children}
      />
    </Container>
  </Container>
))

export default withTheme(BottomSheetWrapper)
