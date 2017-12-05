module.exports = function follow(api, rootPath, relArray) {
	var root = api(rootPath, { mode: 'no-cors', headers: { 'Content-Type':'application/json' }});

	return relArray.reduce(function(root, arrayItem) {
		var rel = typeof arrayItem === 'string' ? arrayItem : arrayItem.rel;
		return traverseNext(root, rel, arrayItem);
	}, root);

	function traverseNext (root, rel, arrayItem) {
		return root.then(function (response) {
			if (hasEmbeddedRel(response, rel)) {
				return response._embedded[rel];
			}

			if(!response._links) {
				return [];
			}

			if (typeof arrayItem === 'string') {
				return api(response._links[rel].href, { mode: 'no-cors', headers: { 'Content-Type':'application/json' }});
			} else {
				return api(response._links[rel].href, {
					mode: 'no-cors', 
					headers: { 'Content-Type':'application/json' },
					params: arrayItem.params
				});
			}
		});
	}

	function hasEmbeddedRel (res, rel) {
		return res._embedded && res._embedded.hasOwnProperty(rel);
	}
};
