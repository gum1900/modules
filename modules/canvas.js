function create(wrapperID, parent, width, height ) {
	let cnvsDiv = parent.querySelector("div > #" + wrapperID);
	if (! cnvsDiv) {
        cnvsDiv = document.createElement("div");
        cnvsDiv.setAttribute("id",wrapperID);
        parent.append(cnvsDiv);
	}
    let cnvs = cnvsDiv.querySelector("canvas");
    if (! cnvs) {
        cnvs = document.createElement("canvas");
        cnvsDiv.append(cnvs)
    };    
    cnvs.setAttribute("width", width.toString());
    cnvs.setAttribute("height", height.toString());
	let cntxt = cnvs.getContext('2d');
/*	cntxt.fillStyle = color;
	cntxt.fillRect(0,0, width, height);
*/
	return {ctx: cntxt, id : parentClass }
}

function createReportList(wrapperID) {
	let wrapper = document.querySelector("#" + wrapperID);
	if ( ! wrapper) {
		return undefined;
	}
	let listID = wrapperID;
	let list = wrapper.querySelector("ul#"+ listID);
	if (! list) {
		list = document.createElement("ul");
		list.setAttribute("id", listID);
		wrapper.append(list);
	}
	return listID;
}

export {create, createReportList}
