#include <iostream>
#include <string>

using namespace std;

int main()
{
  cout << "Please enter an integer between 1,000 and 999,999: ";
  string number;
  cin >> number;

  int str_length = number.length();
  string first = number.substr(0, str_length - 4);
  string last = number.substr(str_length - 3, 3);

  cout << first << last << endl;

  return 0;
}
