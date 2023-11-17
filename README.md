# Cash Register Function

## Introduction

This JavaScript code implements a cash register drawer function, `checkCashRegister()`. The purpose of this code is to calculate the change to be given based on the purchase price, payment, and available cash in the drawer. The cash drawer contains various currency units, and the function ensures that the change is provided in the most efficient way.

## How it Works

The `checkCashRegister` function in the code performs the following steps:

1. **Totaling Cash in Drawer:**

   - It calculates the total amount of cash available in the drawer.

2. **Insufficient Funds Check:**

   - If the total cash in the drawer is less than the change due, it returns `{ status: "INSUFFICIENT_FUNDS", change: [] }`.

3. **Closed Drawer Check:**

   - If the total cash in the drawer is equal to the change due, it returns `{ status: "CLOSED", change: [...] }`.

4. **Calculating Change:**

   - It iterates through the available currency units, determining the number of each unit needed for the change. The change is calculated in the highest to lowest order of currency units.

5. **Exact Change Check:**

   - If it's not possible to provide exact change, it returns `{ status: "INSUFFICIENT_FUNDS", change: [] }`.

6. **Open Drawer Result:**
   - Otherwise, it returns `{ status: "OPEN", change: [...] }` with the change due in coins and bills.

## Test Cases

The code includes several test cases to verify its functionality. These test cases cover scenarios such as exact change, insufficient funds, and a closed cash register.

## How to Use

1. Clone this repository to your local machine.
2. Open the JavaScript file (`cashRegister.js`) in your preferred code editor.
3. Modify the test cases or add your own if needed.
4. Run the script to see the results of the cash register calculations.
