#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  cout << "Enter a number: ";
  float num;
  cin >> num;

  int square = num * num;
  int cube = num * num * num;
  int fourth = pow(num, 4);

  cout << "Square: " << square << endl;
  cout << "Cube: " << cube << endl;
  cout << "Fourth: " << fourth << endl;

  return 0;
}
