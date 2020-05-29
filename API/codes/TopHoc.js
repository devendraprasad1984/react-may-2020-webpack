import React from 'react';

//central to pages, many props common to most/all sections of apps, composition is better than inheritance
let TopHoc = BaseComponent => props => {
    let {name} = BaseComponent;
    let xprops = Object.assign({}, props, {globalProps: [1, 2, 3]});
    console.log('rendering ', name, xprops);
    return <BaseComponent {...xprops}/>;
}
export default TopHoc;
