import { call, put, takeLatest } from '@redux-saga/core/effects'
import { toast } from 'react-toastify'
import receiptApi from 'src/config/receiptApi'
import { actionGeOneProductFail } from '../slice/productSlice'
import { actionGetAllReceipt, actionGetAllReceiptSuccess } from '../slice/receiptSlice'

function* handleGetAllReceipt() {
  try {
    const { data } = yield call(receiptApi.getReceipts)
    console.log('data', data)
    yield put(actionGetAllReceiptSuccess(data?.data))
  } catch (error) {
    yield put(actionGeOneProductFail())
    toast.error('Lỗi hệ thống')
  }
}

function* receiptSaga() {
  yield takeLatest(actionGetAllReceipt.type, handleGetAllReceipt)
}
export default receiptSaga
