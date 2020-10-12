let util = {

};
util.title = function (title) {
    title = title ? title : 'View UI project';
    window.document.title = title;
};

export default util;
