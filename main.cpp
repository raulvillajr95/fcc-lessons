#include <iostream>

int main()
{
  std::cout << "Enter earth weight: ";
  double e_weight;
  std::cin >> e_weight;

  std::cout << "Enter planet: ";
  int planet;
  std::cin >> planet;

  double multiplier;
  
  switch (planet) {
    case 1 :
      multiplier = 0.38;
      break;
    case 2 :
      multiplier = 0.91;
      break;
    case 3 :
      multiplier = 0.38;
      break;
    case 4 :
      multiplier = 2.34;
      break;
    case 5 :
      multiplier = 1.06;
      break;
    case 6 :
      multiplier = 0.92;
      break;
    case 7 :
      multiplier = 1.19;
      break;
  }

  std::cout << "Your weight will be: " << e_weight * multiplier << "\n";

}
