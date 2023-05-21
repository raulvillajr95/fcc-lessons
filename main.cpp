#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  float height = 11;
  float width = 8.5;
  
  float perimeter = 2*height + 2*width;
  float diagonal = sqrt((height * height) + (width * width));

  cout << "Perimeter: " << perimeter << "in" << endl;
  cout << "Diagonal: " << diagonal << "in" << endl;
  
  return 0;
}
