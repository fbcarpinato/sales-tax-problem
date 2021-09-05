# Sales taxes problem
This problem requires some kind of input. You are free to implement any mechanism for feeding input into your solution (for example, using hard coded data within a unit test). You should provide sufficient evidence that your solution is complete by, as a minimum, indicating that it works correctly against the supplied test data.

# PROBLEM: SALES TAXES
Basic sales tax is applicable at a rate of 10% on all goods, except books, food, and medical products that are exempt. Import duty is an additional sales tax applicable on all imported goods at a rate of 5%, with no exemptions.
When I purchase items I receive a receipt which lists the name of all the items and their price (including tax), finishing with the total cost of the items, and the total amounts of sales taxes paid. The rounding rules for sales tax are that for a tax rate of n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.

# How to run

To run this code you need NodeJS, you can download it from https://nodejs.org/en/download/.

Next you just need to follow this steps:

1. Clone the repo ```git clone https://github.com/fbcarpinato/sales-tax-problem.git```
1. Run ```npm install```
3. Run ```npm run example1```

You can also run the entire test suite with ```npm test```