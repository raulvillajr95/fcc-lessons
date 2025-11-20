#include <iostream>
#include <vector>
using namespace std;

int main()
{
   // C, H, O
   vector<int> elements = {45,11,100};

   // H2O, CO2, CH4
   vector<int> molecules = {0,0,0};

   // Get H2O
   while (elements[1] >= 2 && elements[2] >= 1)
   {
      elements[1] -= 2;
      elements[2]--;
      molecules[0]++;
   }

   // Get CO2
   while (elements[0] >= 1 && elements[2] >= 2)
   {
      elements[0]--;
      elements[2] -= 2;
      molecules[1]++;
   }

   // Get CH4
   

   return 0;
}

/*

find position of negatives
get sum of nums

*/