#include <iostream>
#include <cmath>

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
  float mins_to_perc1 = second_num1 / 60.0;
  float hours_mins_perc1 = first_num1 + mins_to_perc1;
  int first_num2 = num2 / 100;
  int second_num2 = num2 % 100;
  float mins_to_perc2 = second_num2 / 60.0;
  float hours_mins_perc2 = first_num2 + mins_to_perc2;

  int hours = -((num1 - num2) - 2400) % 2400;
  int minutes = abs(second_num1 - second_num2) % 60;
  hours = hours / 100;

  cout << hours << " hours " << minutes << " minutes " << endl;
  cout << mins_to_perc1 << "   " << mins_to_perc2 << endl;

  return 0;
}

/*
 * use decimals instead of 60 for minutes
 *  at the end convert to 60
 * 
 * ideas:
 * both durations add up to 2400
 * try using modulus to get 0 to 24
 *  ex: 25 % 24 is 1?
 *  ex: 3 % 24 is 3?
 *  ex: 40 % 24 is 16? 
*/
