#include <iostream>
#include <string>

using namespace std;

int main()
{
  cout << "Please enter an integer between 1000 and 999999: ";
  string num;
  cin >> num;

  int num_length = num.length();
  string first = num.substr(0, num_length - 3);
  string second = num.substr(num_length - 3,3);

  cout << first << "," << second << endl;

  return 0;
}
