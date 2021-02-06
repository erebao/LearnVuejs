import {request} from './request'

export function getHomeMultidata() {
  return request({
    url: '/api/v1/article/list',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/v1/article/list',
    params: {
      type,
      page
    }
  })
}
