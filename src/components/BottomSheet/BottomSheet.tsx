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
  <Container
    h={'100%'}
    viewStyle={{
      shadowColor: '#000000',
      shadowRadius: 5,
      elevation: 3,
      shadowOpacity: 0.2,
    }}
  >
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
      renderContent={() => <Container background={'primary'}>{children}</Container>}
    />
  </Container>
))

export default withTheme(BottomSheetWrapper)
