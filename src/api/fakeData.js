export const WAITING_CODE = 'Đang Chờ'
export const RUNNING_CODE = 'Đang Chạy'
export const PAUSING_CODE = 'Tạm Dừng'
export const STOP_CODE = 'Kết Thúc'
export const DONE_CODE = 'Hoàn Thành'
export const ERROR_CODE = 'Lỗi'
export const PASSED_CODE = 'Xong'
export const fakeData = {
  bookList: [{
    id: 1,
    customerName: 'John',
    companyName: 'Cty Miền Nam',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyễn Tài',
    licensePlate: '53A1-11111',
    status: WAITING_CODE,
    currentLocation: 'Trạm 1',
    updated_at: 0,
  },{
    id: 2,
    customerName: 'Jeff',
    companyName: 'Thực Phẩm Miền Tây',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyễn Tuấn',
    licensePlate: '94F1-22222',
    status: WAITING_CODE,
    currentLocation: 'Trạm 1',
    updated_at: 0,
  },{
    id: 3,
    customerName: 'Lucas',
    companyName: 'Cty Việt Thương',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyễn Thiện',
    licensePlate: '63F1-33333',
    status: WAITING_CODE,
    currentLocation: 'Trạm 1',
    updated_at: 0,
  },{
    id: 4,
    customerName: 'Tom',
    companyName: 'Thương Mại Việt',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyễn Hoàn',
    licensePlate: '37F1-44444',
    status: WAITING_CODE,
    currentLocation: 'Trạm 1',
    updated_at: 0,
  }],
  routes: [{
    id: 1,
    book_id: 1,
    position: 1,
    name: 'Trạm 1',
    status: WAITING_CODE,
    type: 'Xuất Phát',
    note: 'Vận chuyển 100kg tôm'
  },{
    id: 2,
    book_id: 1,
    position: 2,
    name: 'Trạm 2',
    status: WAITING_CODE,
    type: 'Nhận',
    note: 'Nhận 20kg mực ống'
  },{
    id: 3,
    book_id: 1,
    position: 3,
    name: 'Trạm 3',
    status: WAITING_CODE,
    type: 'Điểm Cuối',
    note: 'Liên hệ 0909XXXXXX để bàn giao'
  },{
    id: 4,
    book_id: 2,
    position: 1,
    name: 'Trạm 1',
    status: WAITING_CODE,
    type: 'Xuất Phát',
    note: 'Vận chuyển 200kg gạo Nàng Thơm'
  },{
    id: 5,
    book_id: 2,
    position: 2,
    name: 'Trạm 2',
    status: WAITING_CODE,
    type: 'Điểm Cuối',
    note: 'Liên hệ 0370123012 để kiểm tra'
  },{
    id: 6,
    book_id: 3,
    position: 1,
    name: 'Trạm 1',
    status: WAITING_CODE,
    type: 'Xuất Phát',
    note: 'Nhận 30 khay táo, 20 khay nho Mỹ'
  },{
    id: 7,
    book_id: 3,
    position: 2,
    name: 'Trạm 2',
    status: WAITING_CODE,
    type: 'Nhận',
    note: 'Nhận 15 khay xoài'
  },{
    id: 8,
    book_id: 3,
    position: 3,
    name: 'Trạm 3',
    status: WAITING_CODE,
    type: 'Trả',
    note: 'Giao 15 khay táo và 10 khay nho Mỹ'
  },{
    id: 9,
    book_id: 3,
    position: 4,
    name: 'Trạm 4',
    status: WAITING_CODE,
    type: 'Điểm Cuối',
    note: 'Thu 50 khay trung, 30 khung đại'
  },{
    id: 12,
    book_id: 4,
    position: 1,
    name: 'Trạm 1',
    status: WAITING_CODE,
    type: 'Xuất Phát',
    note: 'Nhận 2 lô hàng mã số 94XXXX123'
  },{
    id: 10,
    book_id: 4,
    position: 2,
    name: 'Trạm 2',
    status: WAITING_CODE,
    type: 'Nhận',
    note: 'Nhận 3 lô hàng mã số 1231AAXSA'
  },{
    id: 11,
    book_id: 4,
    position: 3,
    name: 'Trạm 3',
    status: WAITING_CODE,
    type: 'Điểm Cuối',
    note: 'Chụp ảnh lại các hoá đơn chứng từ để đối chiếu'
  }],
  drivers: [{
    msnv: 'T0001',
    name: 'Nguyễn Tài'
  },{
    msnv: 'T0002',
    name: 'Nguyễn Tuấn'
  },{
    msnv: 'T0003',
    name: 'Nguyễn Thiện'
  },{
    msnv: 'T0004',
    name: 'Nguyễn Hoàn'
  }],
  devices: [{
    msx:  'X0001',
    licensePlate: '53A1-11111'
  },{
    msx: 'X0002',
    licensePlate: '94F1-22222'
  },{
    msx: 'X0003',
    licensePlate: '63F1-33333'
  },{
    msx: 'X0004',
    licensePlate: '37F1-44444'
  }],
}