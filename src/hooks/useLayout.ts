import { useState } from 'react'

const useLayout = () => {
  const [layout, updateLayout] = useState()

  return [layout, updateLayout]
}

export default useLayout
