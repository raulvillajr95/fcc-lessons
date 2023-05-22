#include <iostream>
#include <cmath>
#include <algorithm>

using namespace std;

int main()
{
  cout << "Enter distance(meters): ";
  float meters;
  cin >> meters; 

  float meter_to_in = 39.370139;
  float meter_to_feet = 3.28084;
  float meter_to_miles = 0.000621371;

  float miles = meters * meter_to_miles;
  float feet = meters * meter_to_feet;
  float inches = meters * meter_to_in;

  cout << "Miles: " << miles << endl;
  cout << "Feet: " << feet << endl;
  cout << "Inches: " << inches << endl;

  return 0;
}
