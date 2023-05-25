#include <iostream>
#include <string>

using namespace std;

int main() {
  cout << "Please enter the first time: ";
  int num1;
  cin >> num1;
  cout << "Please enter the second time: ";
  int num2;
  cin >> num2;

  int first_num1 = num1 / 100;
  int second_num1 = num1 % 100;
  int first_num2 = num2 / 100;
  int second_num2 = num2 % 100;

  int hours = first_num2 - first_num1;
  int minutes = second_num2 - second_num1;
  
  cout << hours << " hours " << minutes << " minutes " << endl;

  return 0;
}

/*
 * use abs() for extra extra credit
*/
