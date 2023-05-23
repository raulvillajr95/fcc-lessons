#include <iostream>

using namespace std;

int main() {
  cout << "Gallons of gas in tank: "; 
  float gallons_in_tank;
  cin >> gallons_in_tank;
  cout << "Miles per gallon: "; 
  float miles_per_gallon;
  cin >> miles_per_gallon;
  cout << "Price of gallons of gas: "; 
  float price_of_gallon;
  cin >> price_of_gallon;

  // Cost per 100 miles
  float gallons_per_mile = 1 / miles_per_gallon;
  cout << "g p mil" << gallons_per_mile << endl;
  float cost_per_mile = gallons_per_mile * price_of_gallon;
  cout << "c p m" << cost_per_mile << endl;
  float cost_per_100miles = 100 * cost_per_mile;
  cout << "Price per 100 miles: " << cost_per_100miles << endl;

  // Length of travel with gas in tank
  float miles_from_tank = miles_per_gallon * gallons_in_tank;
  cout << "Length of travel with gas in tank: " << miles_from_tank << endl;

  cout << gallons_in_tank << " " << miles_per_gallon << " " << price_of_gallon << endl;

  return 0;
}
