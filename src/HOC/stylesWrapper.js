import React from 'react';
import commonStyles from './../styles/commonStyles';


const translateProps = (props) => {
    let _styles = {...commonStyles.default}
    if(props.enable){
        _styles = {..._styles, ...commonStyles.enable};  
    }
    const newProps = {...props,styles:_styles }
    return newProps;
} 


export default (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}