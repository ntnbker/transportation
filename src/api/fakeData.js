export const WAITING_CODE = 'WAITING'
export const RUNNING_CODE = 'RUNNING'
export const PAUSING_CODE = 'PAUSING'
export const STOP_CODE = 'STOP'
export const DONE_CODE = 'DONE'
export const ERROR_CODE = 'ERROR'
export const PASSED_CODE = 'PASSED'
export const fakeData = {
  bookList: [{
    id: 1,
    customerName: 'Nguyen Van A',
    companyName: 'TEST COMPANY',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyen Tai',
    licensePlate: '53A1-11111',
    status: WAITING_CODE,
    currentLocation: 'Tram 1',
  },{
    id: 2,
    customerName: 'Nguyen Van A',
    companyName: 'TEST COMPANY',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyen Tuan',
    licensePlate: '94F1-22222',
    status: WAITING_CODE,
    currentLocation: 'Tram 1',
  },{
    id: 3,
    customerName: 'Nguyen Van A',
    companyName: 'TEST COMPANY',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyen Thien',
    licensePlate: '63F1-33333',
    status: WAITING_CODE,
    currentLocation: 'Tram 1',
  },{
    id: 4,
    customerName: 'Nguyen Van A',
    companyName: 'TEST COMPANY',
    scheduleDate: '12-10-2018',
    executeTime: '10-10-2018',
    driverName: 'Nguyen Hoang',
    licensePlate: '37F1-44444',
    status: WAITING_CODE,
    currentLocation: 'Tram 1',
  }],
  routes: [{
    id: 1,
    book_id: 1,
    position: 1,
    name: 'Tram 1',
    status: WAITING_CODE,
    type: 'XUAT_PHAT',
    note: 'Lay 20 bo ban ghe'
  },{
    id: 2,
    book_id: 1,
    position: 2,
    name: 'Tram 2',
    status: WAITING_CODE,
    type: 'NHAN',
    note: 'lay them 5 bo ban ghe'
  },{
    id: 3,
    book_id: 1,
    position: 3,
    name: 'Tram 3',
    status: WAITING_CODE,
    type: 'DIEM_CUOI',
    note: 'Check in khi den'
  },{
    id: 4,
    book_id: 2,
    position: 1,
    name: 'Tram 1',
    status: WAITING_CODE,
    type: 'XUAT_PHAT',
    note: 'Lay 20 bo ban ghe'
  },{
    id: 5,
    book_id: 2,
    position: 2,
    name: 'Tram 2',
    status: WAITING_CODE,
    type: 'DIEM_CUOI',
    note: 'Check in khi den'
  },{
    id: 6,
    book_id: 3,
    position: 1,
    name: 'Tram 1',
    status: WAITING_CODE,
    type: 'XUAT_PHAT',
    note: 'Lay 20 bo ban ghe'
  },{
    id: 7,
    book_id: 3,
    position: 2,
    name: 'Tram 2',
    status: WAITING_CODE,
    type: 'NHAN',
    note: 'lay them 5 bo ban ghe'
  },{
    id: 8,
    book_id: 3,
    position: 3,
    name: 'Tram 3',
    status: WAITING_CODE,
    type: 'TRA',
    note: 'Tra 15 bo ban ghe'
  },{
    id: 9,
    book_id: 3,
    position: 4,
    name: 'Tram 4',
    status: WAITING_CODE,
    type: 'DIEM_CUOI',
    note: 'Check in khi den'
  },{
    id: 10,
    book_id: 4,
    position: 2,
    name: 'Tram 2',
    status: WAITING_CODE,
    type: 'NHAN',
    note: 'lay them 5 bo ban ghe'
  },{
    id: 11,
    book_id: 4,
    position: 3,
    name: 'Tram 3',
    status: WAITING_CODE,
    type: 'CUOI',
    note: 'something'
  },{
    id: 12,
    book_id: 4,
    position: 1,
    name: 'Tram 1',
    status: WAITING_CODE,
    type: 'XUAT_PHAT',
    note: 'Lay 20 bo ban ghe'
  }],
  drivers: [{
    msnv: 'T0001',
    name: 'Nguyen Tai'
  },{
    msnv: 'T0002',
    name: 'Nguyen Tuan'
  },{
    msnv: 'T0003',
    name: 'Nguyen Thien'
  },{
    msnv: 'T0004',
    name: 'Nguyen Hoang'
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