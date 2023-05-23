#include <iostream>
#include <cmath>

using namespace std;

int main()
{
  cout << "Enter length: ";
  float length;
  cin >> length; 
  cout << "Enter width: ";
  float width;
  cin >> width; 

  float area = length * width;
  float perimeter = length * 2 + width * 2;
  float diagonal = sqrt(length * length + width * width);

  cout << "Area: " << area << endl;
  cout << "Perimeter: " << perimeter << endl;
  cout << "Diagonal: " << diagonal << endl;


  return 0;
}
