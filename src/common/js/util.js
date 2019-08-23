/**
 * 解析url参数 确定商家
 * @example ?id=12345&a=b
 * @return Object {id: 12345, a: b}
 */ 
export function urlParse() {
  // url从？开始的部分 
  let url = window.location.search
  let obj = {}
  // 匹配以？或&开头且后边没有？或&的一个或多个字符到=在匹配没有？或&的一个或多个字符
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  //['?id=12345', '&a=b']

  if(arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')//['id', '12345'],['a', 'b']
      let key = decodeURIComponent(tempArr[0])
      let value = decodeURIComponent(tempArr[1])
      obj[key] = value
    })
  }
  return obj
}
