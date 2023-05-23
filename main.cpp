#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
  const int PENNIES_PER_DOLLAR = 100;
  const int PENNIES_PER_QUARTER = 25;

  cout << "Enter bill value (1 = $1 bill, 5 = $5 bill, etc.): ";
  int bill_value;
  cin >> bill_value; 
  cout << "Enter quarter value (1 = $0.25, 5 = $1.25, etc.): ";
  int quarter_value;
  cin >> quarter_value; 
  cout << "Enter item price in pennies: ";
  int item_price;
  cin >> item_price; 

  int change_due = (PENNIES_PER_DOLLAR * bill_value) + (PENNIES_PER_QUARTER * quarter_value) - item_price;
  int dollar_coins = change_due / PENNIES_PER_DOLLAR;
  change_due = change_due % PENNIES_PER_DOLLAR;
  int quarters = change_due / PENNIES_PER_QUARTER;

  cout << "Dollar coins: " << setw(6) << dollar_coins << endl
     << "Quarter:      " << setw(6) << quarters << endl;


  return 0;
}
