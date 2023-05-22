#include <iostream>
#include <cmath>
#include <algorithm>

using namespace std;

int main()
{
  cout << "Enter radius: ";
  float radius;
  cin >> radius; 

  const float PI = 3.14159;

  float circle_area = PI * pow(radius, 2);
  float circle_circumference = 2 * PI * radius;
  float sphere_volume = (4.0 / 3) * PI * pow(radius, 3.0);
  float sphere_surface_area = 4 * PI * pow(radius, 2.0);

  cout << "Circle area: " << circle_area << endl;
  cout << "Circle circumference: " << circle_circumference << endl;
  cout << "Sphere volume: " << sphere_volume << endl;
  cout << "Sphere surface area: " << sphere_surface_area << endl;

  return 0;
}
