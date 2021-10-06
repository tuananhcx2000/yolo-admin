import { cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React from 'react'

const ProductOptionHeader = (props) => {
  const { setVisibleAdd } = props
  return (
    <>
      <div>
        <strong>Quản lý Options Sản phẩm</strong> <small>(Size, color, ...)</small>
      </div>
      <div>
        <CButton
          color={'primary'}
          style={{ padding: '4px 8px' }}
          onClick={() => {
            setVisibleAdd(true)
          }}
        >
          <CIcon icon={cilPlus} className="me-2" style={{ height: '15px', width: '15px' }} />
          Thêm
        </CButton>
      </div>
    </>
  )
}

export default ProductOptionHeader
