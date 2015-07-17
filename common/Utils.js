//http://stackoverflow.com/a/3504020
$.extend({
	getBody : function(url) {
		var result = null;
		$.ajax({
			url : url,
			type : 'get',
			dataType : 'text',
			async : false,
			success : function(data) {
				result = data;
			}
		});
		return result;
	}
});
/**
 * return body from GET request
 * @param {Object} url
 */
function getFile(url) {
	return $.getBody(url);
}
