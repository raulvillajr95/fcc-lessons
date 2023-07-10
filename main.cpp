 #include <iostream>

 using namespace std;

 int main() {
  cout << "Amount due: ";
  float amount_due;
  cin >> amount_due;
  cout << "Amount received: ";
  float amount_received;
  cin >> amount_received;

  float change = amount_received - amount_due;
  
  int dollars = change;
  int quarters = (change - dollars) / 0.25;
  int dimes = (change - dollars - (quarters * 0.25)) / 0.1;
  int nickels = (change - dollars - (quarters * 0.25) - (dimes * 0.1)) / 0.05;
  int pennies = (change - dollars - (quarters * 0.25) - (dimes * 0.1) - (nickels * 0.05)) / 0.01;

  cout << "Dollars: " << dollars << endl;
  cout << "Quarters: " << quarters << endl;
  cout << "Dimes: " << dimes << endl;
  cout << "Nickels: " << nickels << endl;
  cout << "Pennies: " << pennies << endl;
  
  return 0;
}

/*
go digit by digit
  except dollars, were doing all in 1s
*/
