#include <iostream>

using namespace std;

int main() {
  cout << "Enter price: ";
  float price;
  cin >> price;

  int dollars = price;
  int cents = ((price - dollars) * 100) + 0.5;

  cout << "Dollars: " << dollars << endl;
  cout << "Cents: " << cents << endl;

  return 0;
}
