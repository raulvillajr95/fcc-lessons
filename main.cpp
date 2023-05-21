#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  cout << "Enter first number: ";
  float num1;
  cin >> num1;
  cout << "Enter second number: ";
  float num2;
  cin >> num2;

  float sum = num1 + num2;
  float difference = num1 - num2;
  float product = num1 * num2;
  float average = (num1 + num2) / 2; 

  cout << "Sum: " << sum << endl;
  cout << "Difference: " << difference << endl;
  cout << "Product: " << product << endl;
  cout << "Average: " << average << endl;

  return 0;
}
