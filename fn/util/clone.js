import { typeOf } from './index';

const clone = (obj) => {
    const type = typeOf(obj);

    switch(type){
        case 'object':
            var cloned = {};
            for(var i in obj){
                cloned[i] = _.clone(obj[i]);
            }
            return cloned;
        case 'array':
            return obj.map(_.clone);
        default:
            return obj;
    }

    return obj;
};

export default clone;