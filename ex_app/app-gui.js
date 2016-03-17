/* main screen ----------------------------------------------------------------------------------------------- */
var mainUIScreenJSON = {
	id: 'mainScreen',
	component: 'Window',	
	padding: 2,
	position: { x: 0, y: 240 },
	width: 400,
	height: 400,
	//layout: [null, null],
	children: []
};
/* footer Menu ----------------------------------------------------------------------------------------------- */
var footerMenuJSON = {
	        id:'footerMenu',
		    component: 'Layout',
		    z: 1,
		    padding: 1,
		    position: { x: 0, y: 340 },
		    width: 400,
		    height: 60,
		    layout: [6, 1],
		    children: [],
		};
for (var i = 0; i < footerMenuDataJSON.length; i++){
	var menuName = footerMenuDataJSON[i];
	var button = {id: menuName.id, text: menuName.name, component: 'Button', position: 'center', width: 64, height: 40 };
	footerMenuJSON.children.push(button);
}
mainUIScreenJSON.children.push(footerMenuJSON);
/* list - quest ----------------------------------------------------------------------------------------------- */
for (var j = 0; j < listsJSON.length; j++){
	var listUI = {
	        id:listsJSON[j].id,
		    component: 'List',
		    padding: 2,
		    position: { x: 0, y: 0 },
		    width: 400,
		    height: 340,
		    layout: [null, 5],
		    children: []
		};

	for (var i = 0; i < listsJSON[j].data.length; i++){
		var itemData = listsJSON[j].data[i];
		var questName = { id: itemData.itemLabelId, text: itemData.itemName, component: 'Label', position: 'right', width: 100, height: 24 };
		var progressBar = { padding:8, position: { x: 40 , y: 20 }, component: 'Layout', position: 'left', width: 260, height: 24 };
		var questLevel = { id: itemData.itemBtnId, text: 'Upgrade', component: 'Button', padding:8, position: 'right', width: 90, height: 60 };
		var item = {
		    component: 'Layout',
		    padding: 2,
		    position: { x: 10, y: 0 },
		    width: 380,
		    height: 62,
		    layout: [2, 2],
		    children: [
		    	/* quest name */
				questName,
				/* quest level */
				questLevel,
				progressBar,
		    ]
		}
		listUI.children.push(item);
	}
	mainUIScreenJSON.children.push(listUI);
}