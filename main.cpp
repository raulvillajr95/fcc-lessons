#include <iostream>
#include <string>

using namespace std;

int main()
{
  cout << "Enter month number: ";
  int num;
  cin >> num;

  // longest month: 9
  string months = "January   February  March     April     May       June      July      August    September October   November  December ";

  int start = 10 * num - 10;
  string month = months.substr(start, 10);

  cout << month << endl;

  return 0;
}
