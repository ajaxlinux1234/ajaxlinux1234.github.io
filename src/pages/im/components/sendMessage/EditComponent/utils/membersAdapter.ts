/**
 *
 * @param {Array} list
 * 参数为获取的通讯录数组
 * 返回按index_symbol分类后的数据
 */
export default function adapter(list: string | any[]) {
  if (Object.prototype.toString.call(list) !== '[object Array]' || list.length === 0) {
    return [];
  }
  let addressList = [...list];
  let addressArr = new Array(27);
  addressList.sort((a, b) => {
    return getMemberName(a) > getMemberName(b) ? 1 : -1;
  });
  addressList.forEach((item, i) => {
    let index_symbol;
    let index;
    if (item.index_symbol !== '#') {
      index_symbol = item.index_symbol && item.index_symbol.toLocaleUpperCase();
      if (index_symbol) {
        index = index_symbol.charCodeAt() - 65;
      } else {
        index = 26;
      }
    } else {
      index_symbol = '#';
      index = 26;
    }
    if (!addressArr[index]) {
      addressArr[index] = {
        index_symbol: index_symbol,
        list: [item],
      };
    } else {
      addressArr[index].list.push(item);
    }
  });
  for (var i = 0; i < addressArr.length; i++) {
    if (addressArr[i] === '' || typeof addressArr[i] === 'undefined') {
      addressArr.splice(i, 1);
      i = i - 1;
    }
  }
  return addressArr;
}

/**
 *  @param {Array} list
 *  参数为获取的通讯录数组
 *  return {
 *    [uid]: data,
 *    ...
 *  }
 */
export function getMemberMap(list: any) {
  let members = [...list];
  let memberMap: Record<string, any> = {};
  members.forEach((item, i) => {
    if (item.id) {
      memberMap[item.id] = item;
    }
  });
  return memberMap;
}

/**
 *  @param {object} member
 *  @return {string} name
 */
export function getMemberName(member: {
  nickname: any;
  given_name: any;
  full_name: any;
  name: any;
}) {
  if (member) {
    return member.nickname || member.given_name || member.full_name || member.name || '';
  } else {
    return '';
  }
}
