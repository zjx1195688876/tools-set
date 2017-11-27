const _cache = {
    hash: '',
    search: ''
};

const fn = {
    _getUrlObj: (url, filter) => {
        const _urlObj = {};
        url.split('#').forEach((item, index) => {
            if (index !== 0) {
                _cache.hash += `#${item}`;
            }
        });
        _cache.search = url.split('?')[1].split('#')[0];
        _cache.search.split('&').forEach((item) => {
            let obj = {};
            let arr = item.split('=');
            if (arr && arr.length > 1) {
                obj[arr[0]] = arr[1];
                Object.assign(_urlObj, obj);
            }
        });
        fn._urlObjFilter(_urlObj, filter);

        return _urlObj;
    },
    _urlObjFilter: (_urlObj, filter) => {
        if (typeof(filter) === 'string') {
            delete _urlObj[filter];
        } else if (filter instanceof Array) {
            filter.forEach((attr) => {
                delete _urlObj[attr];
            });
        } else {
            return url;
        }

        return _urlObj;
    }
};

const UrlSearchFilter = (url, filter) => {
    if(!url || !/\?/g.test(url)) {
        return url;
    }

    const _urlObj = fn._getUrlObj(url, filter);

    let newUrl = url.split('?')[0];
    const keysArr = Object.keys(_urlObj);

    keysArr.forEach((key) => {
        if (/\?/g.test(newUrl)) {
            newUrl += `&${key}=${_urlObj[key]}`;
        } else {
            newUrl += `?${key}=${_urlObj[key]}`;
        }
    });

    return newUrl + _cache.hash;
};

export default UrlSearchFilter;
