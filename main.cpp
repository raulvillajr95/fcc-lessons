#include <iostream>
#include <string>

using namespace std;

int main() {
  cout << "Input phone number: ";
  string phone_number;
  cin >> phone_number;

  string first_three = "(" + phone_number.substr(0, 3) + ")";

  cout << first_three + " " + phone_number.substr(3, 3) + " - " + phone_number.substr(6,4) << endl;

  return 0; 
}
