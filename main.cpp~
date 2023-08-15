#include <iostream>

int main()
{
  std::cout << "Enter year: ";
  int year;
  std::cin >> year;

  bool is_leap_year;



  if(year < 10000 && year > 999) {
    if (year % 4 == 0) {
      if (year % 100 == 0 && !(year % 400 == 0)) {
        std::cout << "Is not a leap year ❌\n";
      }
      else {
        std::cout << "Is leap year 👍\n";
      }
    }
  }
  else {
    std::cout << "Enter a 4 digit number\n";
  }
}
