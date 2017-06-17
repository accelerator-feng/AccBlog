
export default {
    bodyParser: (req, callback) => {
        var body = '', jsonStr;
        req.on('data', function (chunk) {
            body += chunk;
        });
        req.on('end', function () {
            try {
                jsonStr = JSON.parse(body);
            } catch (err) {
                jsonStr = null;
            }
            callback(jsonStr);
        });
    },
    /**
     * obj = {
     *  list: [],
     *  filterKey: '',
     *  filterValue: '',
     * }
     */
    find: (list, filterKey, filterValue) => {
        const resultArray = list.filter((item, indxe) => {
            return item[filterKey] === filterValue;
        })
        return resultArray.length > 0 ? resultArray[0] : false;
    },
    
}