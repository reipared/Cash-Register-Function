function checkCashRegister(price, cash, cid) {
	// Define the currency units and their values
	const currencyUnit = [
		["PENNY", 0.01],
		["NICKEL", 0.05],
		["DIME", 0.1],
		["QUARTER", 0.25],
		["ONE", 1],
		["FIVE", 5],
		["TEN", 10],
		["TWENTY", 20],
		["ONE HUNDRED", 100],
	];

	// Initialize variables
	let changeDue = cash - price;
	let changeArray = [];
	let totalCID = 0;

	// Calculate the total amount in the cash drawer
	for (let i = 0; i < cid.length; i++) {
		totalCID += cid[i][1];
	}
	totalCID = totalCID.toFixed(2);

	// Check if there is not enough cash in the drawer
	if (Number(totalCID) < changeDue) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}

	// Check if the cash in drawer is equal to the change due
	if (Number(totalCID) === changeDue) {
		return { status: "CLOSED", change: cid };
	}

	// Calculate the change
	for (let i = currencyUnit.length - 1; i >= 0; i--) {
		const coinName = currencyUnit[i][0];
		const coinValue = currencyUnit[i][1];
		const availableCoins = cid[i][1];
		const maxCoins = Math.floor(availableCoins / coinValue);
		let returnedCoins =
			Math.min(maxCoins, Math.floor(changeDue / coinValue)) * coinValue;

		if (returnedCoins > 0) {
			changeArray.push([coinName, returnedCoins]);
			changeDue = (changeDue - returnedCoins).toFixed(2);
		}
	}

	// Check if it's not possible to give exact change
	if (Number(changeDue) > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}

	// Return the result with the appropriate status and change
	return { status: "OPEN", change: changeArray };
}

// Test Case 1
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
// Expected Output: { status: "OPEN", change: [["QUARTER", 0.5]] }

// Test Case 2
console.log(
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
// Expected Output: { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] }

// Test Case 3
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
);
// Expected Output: { status: "INSUFFICIENT_FUNDS", change: [] }

// Test Case 4
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.01],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 1],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
);
// Expected Output: { status: "INSUFFICIENT_FUNDS", change: [] }

// Test Case 5
console.log(
	checkCashRegister(19.5, 20, [
		["PENNY", 0.5],
		["NICKEL", 0],
		["DIME", 0],
		["QUARTER", 0],
		["ONE", 0],
		["FIVE", 0],
		["TEN", 0],
		["TWENTY", 0],
		["ONE HUNDRED", 0],
	])
);
// Expected Output: { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] }
