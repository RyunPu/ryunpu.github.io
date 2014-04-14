function detectMobile(mobileType){
    var ua = navigator.userAgent.toLowerCase(),
        isPhone = /iphone|ipod|android|phone|opera mobi|opera mini|ucbrowser|ucweb|iemobile|nokia|symbian|symbianos|blackBerry|palm|smartphone/i.test(ua);
        isTablet = /ipad|android 3|tablet|playbook|xoom|kindle/i.test(ua);
    
    if (mobileType) {
        switch (mobileType) {
            case 'phone':
                return isPhone;
            case 'tablet':
                return isTablet;
        }
    } else {
        return (isPhone || isTablet);
    }
}