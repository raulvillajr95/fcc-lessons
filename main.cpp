#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
  cout << "Enter integer: ";
  int num;
  cin >> num;
  string space = " ";

  int num1 = num / 10000;
  int num2 = (num / 1000) % 10;
  int num3 = (num / 100) % 10;
  int num4 = (num / 10) % 10;
  int num5 = num % 10;

  cout << num1 << " " << num2 << " " << num3 <<  " " << num4 << " " << num5 << endl;

  return 0;
}
