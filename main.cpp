#include <iostream>

using namespace std;

int main() {
  cout << "Cost of new car: ";
  int cost_new_car;
  cin >> cost_new_car;
  cout << "Estimated miles driven per year: ";
  int miles_per_year;
  cin >> miles_per_year;
  cout << "Gas price: ";
  float gas_price;
  cin >> gas_price;
  cout << "Resale value after 5 years: ";
  int resale_value;
  cin >> resale_value;

  float gas_price_per_mile = gas_price / 30.0;

  float total_gas_cost = gas_price_per_mile * miles_per_year;
  float total_car_cost = cost_new_car - resale_value;
  float total_cost = total_gas_cost + total_car_cost;
  cout << "Total cost: " << total_cost << endl;

  return 0;
}
