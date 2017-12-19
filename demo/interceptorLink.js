import { UrlSearchFilter } from '../api';

const link = `https://xxx.com?user=123@163.com&name=mm&age=16#12#aa`;

// 传入String
UrlSearchFilter(link, 'user');  // https://xxx.com?name=mm&age=16#12#aa
// 传入Array
UrlSearchFilter(link, ['user', 'age']);  // https://xxx.com?name=mm#12#aa