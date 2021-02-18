import {request} from './request'

export function getDetail(code) {
  return request({
    url: '/api/v1/article/info',
    params: {
      code
    }
  })
}

//商品基本信息
export class Goods {
  constructor(itemInfo, columns, shopInfo) {
    this.desc = '新款上市';
    this.discount = '活动价';
    this.newPrice = '￥38.50';
    this.oldPrice = '￥69.00';
    this.realPrice = 38.50;
    this.columns = columns
    this.services = shopInfo;
    this.title = itemInfo.title
  }
}

//商铺信息
export class Shop {
  constructor(shopInfo) {
    this.logo = 'https://static.jk.ybstatic.com/ups/img/Flnqbb9Dvl2E1AvrsgbUg__aMZVZ.jpeg';
    this.name = '商铺名称';
    this.fans = 17145;
    this.sells = 57876;
    this.score = [{"name": "描述相符", "score": "4.64", "isBetter": false}, {"name": "价格合理", "score": "5", "isBetter": true}, {"name": "质量满意", "score": "4.62", "isBetter": false}];
    this.goodsCount = 99;
  }
}

//参数信息
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}
