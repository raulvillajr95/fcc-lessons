#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
  cout << "Enter integer: ";
  string num;
  cin >> num;

  cout << num.substr(0,1) << " ";
  cout << num.substr(1,1) << " ";
  cout << num.substr(2,1) << " ";
  cout << num.substr(3,1) << " ";
  cout << num.substr(4,1) << " " << endl;

  return 0;
}
