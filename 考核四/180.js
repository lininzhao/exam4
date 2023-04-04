//请利用正则将字符串 these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px 中的数字部分替换为 0

    var str='these size coresponds to 8px, 12px, 16px. The default size is small, A.K.A. 8px';
        var reg=/\d+/g;
        var res=str.replace(reg,'0');
        console.log(res);