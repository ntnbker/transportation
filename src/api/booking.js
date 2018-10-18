import { fakeData, DONE_CODE, PASSED_CODE } from './fakeData'

const getBookList = () => {
  return [...fakeData.bookList.sort((a, b) => b.updated_at - a.updated_at)]
}

const getBookItem = (id) => {
  let bookItem = fakeData.bookList.filter((book) => book.id === id)[0]
  if (!bookItem) return null
  let fakeBook = {...bookItem}
  fakeBook.routes = fakeData.routes.filter(route => route.book_id === fakeBook.id)

  return fakeBook
}

const updateBookItem = (id, update) => {
  let result = null
  fakeData.bookList = fakeData.bookList.map((book) => {
    let fakeBook = {...book}
    if (fakeBook.id !== id) return fakeBook

    for (let key in update) {
      fakeBook[key] = update[key]
    }
    fakeBook.updated_at = Date.now()
    result = fakeBook
    return fakeBook
  })
  return result
}

const nextStop = (id) => {
  let bookItem = fakeData.bookList.filter(book => book.id === id)[0]
  if (!bookItem) return null
  let fakeBook = {...bookItem}
  let routes = fakeData.routes.filter(route => route.book_id === fakeBook.id)
  let currentRoute = routes.filter(route => route.name === fakeBook.currentLocation)[0]
  let nextRoute = routes.filter(route => route.position === currentRoute.position + 1)[0]

  if (!nextRoute) fakeBook.status = DONE_CODE
  else {
    fakeBook.currentLocation = nextRoute.name
    fakeBook.note = nextRoute.note
  }
  currentRoute.status = PASSED_CODE
  fakeBook.updated_at = Date.now()

  fakeData.bookList = fakeData.bookList.map(book => book.id === fakeBook.id ? fakeBook : book)
  fakeData.routes = fakeData.routes.map(route => route.id === currentRoute.id ? currentRoute : route)
  return fakeBook
}

const getRouteList = (book_id) => {
  return [...fakeData.routes.filter(route => route.book_id === book_id)]
}

const updateRouteItem = (id, update) => {
  fakeData.routes = fakeData.routes.map((route) => {
    if (route.id !== id) return route

    for (let key in update) {
      route[key] = update[key]
    }
    return route
  })
}

const login = (params) => {
  let { drivers, devices, bookList } = fakeData
  console.log(params)
  let driver = drivers.filter(drv => drv.msnv === params.msnv)[0]
  let device = devices.filter(device => device.msx === params.msx)[0]
  if (!driver) return Promise.reject('Tài xế không tồn tại')
  if (!device) return Promise.reject('Thiết bị không tồn tại')

  let bookItem = bookList.filter(book => book.driverName === driver.name && book.licensePlate === device.licensePlate)[0]
  if (!bookItem) return Promise.reject('Tài xế có được phép truy cập thiết bị')

  let route = fakeData.routes.filter(r => r.book_id === bookItem.id && r.name === bookItem.currentLocation)[0]
  if (!route) return Promise.reject('something wrong!')
  let fakeRoute = {...route}
  bookItem.note = route.note
  bookItem.route = route
  return Promise.resolve({...bookItem})
}

export {
  getBookList,
  getBookItem,
  updateBookItem,
  nextStop,
  getRouteList,
  updateRouteItem,
  login,
}