#include <iostream>
#include <cmath>

using namespace std;

int main() {
  cout << "XA: ";
  int xA;
  cin >> xA;
  cout << "YA: ";
  int yA;
  cin >> yA;
  cout << "XB: ";
  int xB;
  cin >> xB;
  cout << "YB: ";
  int yB;
  cin >> yB;
  cout << "XC: ";
  int xC;
  cin >> xC;
  cout << "yC: ";
  int yC;
  cin >> yC;

  // length of sides
  float a = sqrt( pow(xB - xC, 2) + pow(yB - yC, 2));
  float b = sqrt( pow(xC - xA, 2) + pow(yC - yA, 2));
  float c = sqrt( pow(xA - xB, 2) + pow(yA - yB, 2));

  // angles at corners
  float A = acos((pow(b,2)+pow(c,2)-pow(a,2))/(2*b*c)) * (180/(atan(1)*4));
  float B = acos((pow(a,2)+pow(c,2)-pow(b,2))/(2*a*c)) * (180/(atan(1)*4));
  float C = acos((pow(a,2)+pow(b,2)-pow(c,2))/(2*a*b)) * (180/(atan(1)*4));

  // perimeter
  float perimeter = a + b + c;

  // area
  float area = 0.5 * a * b * sin(c);

  cout << "Coordinates: " << "A(" << xA << ", " << yA << ")" << ", " << "B(" << xB << ", " << yB << ")" << ", " << "C(" << xC << ", " << yC << ")" << endl;
  cout << "Lengths: " << "a: " << a << " units, b: " << b << " units, c: " << c << " units" << endl;
  cout << "A: " << A << "deg" << endl;
  cout << "B: " << B << "deg" << endl;
  cout << "C: " << C << "deg" << endl;
  cout << "Perimeter: " << perimeter << " units" << endl;
  cout << "Area: " << area << " units squared" << endl;

  return 0;
}
