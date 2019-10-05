import Mock from 'mockjs'
import data from './data.json'

Mock.mock("/goods", {code:0, data: data.goods})