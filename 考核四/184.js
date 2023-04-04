 //请利用正则将字符串 these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px 中的大写字母转为小写。

 var str='these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px';
 var reg=/[A-Z]/g;
 var res=str.toLowerCase(reg);
 console.log(res);