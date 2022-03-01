const polygonWeb3 = new Web3(new Web3.providers.HttpProvider("https://polygon-rpc.com/"));

const itemsAddress = "0x865436a5C5e0451eAD1d1962E060C1659c191453"
const itemsABI = [{"inputs":[{"internalType":"string","name":"uri","type":"string"},{"internalType":"address","name":"systemCheckerContractAddress","type":"address"},{"internalType":"address","name":"treasuryContractAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogBurnItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"LogBuyBox","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LogMintItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"categoryKey","type":"bytes32"}],"name":"LogNewCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"typeKey","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"LogNewItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"typeKey","type":"bytes32"}],"name":"LogNewType","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"itemIds","type":"uint256[]"}],"name":"LogOpenBox","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"categoryKey","type":"bytes32"}],"name":"LogRemoveCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"LogRemoveItem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"typeKey","type":"bytes32"}],"name":"LogRemoveType","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[],"name":"PET_BYTES","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_boxPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_boxRewardCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_systemCheckerContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_treasuryContractAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"categoryKeys","type":"bytes32[]"},{"internalType":"bytes32[]","name":"typeKeys","type":"bytes32[]"},{"internalType":"uint256[]","name":"itemIds","type":"uint256[]"}],"name":"bulkNewItems","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"buyBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"gameSafeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCategories","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getItemById","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getItems","outputs":[{"components":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"internalType":"bytes32","name":"typeKey","type":"bytes32"},{"internalType":"uint256","name":"id","type":"uint256"}],"internalType":"struct ItemFactoryV3.ItemStruct[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTypes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mintItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"}],"name":"newCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"internalType":"bytes32","name":"typeKey","type":"bytes32"},{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"newItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"internalType":"bytes32","name":"typeKey","type":"bytes32"}],"name":"newType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"entropy","type":"uint256"}],"name":"openBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"}],"name":"removeCategory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"itemId","type":"uint256"}],"name":"removeItem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"categoryKey","type":"bytes32"},{"internalType":"bytes32","name":"typeKey","type":"bytes32"}],"name":"removeType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setBoxPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxRewardCount","type":"uint256"}],"name":"setBoxRewardCount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"systemCheckerContractAddress","type":"address"}],"name":"setSystemCheckerContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasuryContractAddress","type":"address"}],"name":"setTreasuryContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newUri","type":"string"}],"name":"setUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

const itemsContract = new polygonWeb3.eth.Contract(itemsABI, itemsAddress);

async function getInfo() {
	let boxPrice = await itemsContract.methods._boxPrice.call().call();
	let boxRewardCount = await itemsContract.methods._boxRewardCount.call().call();

	document.querySelector("#boxPrice").textContent = parseFloat(boxPrice*1e-18).toFixed(0) + " MILK";
	document.querySelector("#boxRewardCount").textContent = boxRewardCount + " Items";
}

async function getItems() {
	let items = await itemsContract.methods.getItems().call();
	let table = document.getElementById("tableItems");

	items.forEach(async function(item) {
		row = table.insertRow(-1);
		row.className = "align-middle";
		itemID = row.insertCell(0);
  		itemPicture = row.insertCell(1);
  		itemCategory = row.insertCell(2);
  		itemType = row.insertCell(3);

  		itemID.innerHTML = '<a href="https://metadata.coolcatsnft.com/item/metadata/' + item[2] + '.json" target="_blank">' + item[2] + '</a>';
  		itemPicture.innerHTML = '<img src="https://metadata.coolcatsnft.com/item/image/' + item[2] + '.png" width="100">';
  		itemCategory.textContent = polygonWeb3.utils.toUtf8(item[0]);
  		itemType.textContent = polygonWeb3.utils.toUtf8(item[1]);
	});
}


getItems();
getInfo();