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

  cout << "Dollars: " << change << endl;
  cout << "Quarters: " << change << endl;
  cout << "Dimes: " << change << endl;
  cout << "Nickels: " << change << endl;
  cout << "Pennies: " << change << endl;
  
  return 0;
}

/*
go digit by digit
  except dollars, were doing all in 1s
*/
