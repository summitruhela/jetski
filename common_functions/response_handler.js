module.exports = {
    sendResponseWithPagination : (responseObj, responseCode, responseMessage, data, paginationData) =>{
        return responseObj.send({'response_code':responseCode,'response_message':responseMessage,result:data,paginationData:paginationData})
    },
    sendResponseWithData: (responseObj, responseCode, responseMessage, data, tokn) => {
        return responseObj.send({'response_code':responseCode,'response_message':responseMessage,result:data, token:tokn});
    },
    sendResponseWithoutData: (responseObj, responseCode, responseMessage) => {
        return responseObj.send({'response_code':responseCode,'response_message':responseMessage});
    }
};