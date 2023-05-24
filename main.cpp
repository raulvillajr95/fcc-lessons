#include <iostream>
#include <string>

using namespace std;

int main() {
  cout << "Enter number up to 5 digits: ";
  string num;
  cin >> num;

  string space = " ";
  
  cout << num.substr(0,1) << space;
  cout << num.substr(1,1) << space;
  cout << num.substr(2,1) << space;
  cout << num.substr(3,1) << space;
  cout << num.substr(4,1) << endl;

  return 0;
}
