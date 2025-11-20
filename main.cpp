#include <iostream>
#include <array>
using namespace std;

array<int, 3> burner(int c, int h, int o)
{
   array<int, 3> molecules = {0,0,0};

   // Get H2O
   while(h >= 2 && o >= 1)
   {
      h -= 2;
      o--;
      molecules[0]++;
   }

   // Get CO2
   while(c >= 1 && o >= 2)
   {
      c--;
      o -= 2;
      molecules[1]++;
   }

   // Get CH4
   while(c >= 1 && h >= 4)
   {
      c--;
      h -= 4;
      molecules[2]++;
   }

   return molecules;
}

int main()
{
   // C, H, O
   int c = 45;
   int h = 11;
   int o = 100;

   // H2O, CO2, CH4
   array<int, 3> molecules = {0,0,0};

   // Get H2O
   while(h >= 2 && o >= 1)
   {
      h -= 2;
      o--;
      molecules[0]++;
   }

   // Get CO2
   while(c >= 1 && o >= 2)
   {
      c--;
      o -= 2;
      molecules[1]++;
   }

   // Get CH4
   while(c >= 1 && h >= 4)
   {
      c--;
      h -= 4;
      molecules[2]++;
   }

   cout << molecules[0] << " ";
   cout << molecules[1] << " ";
   cout << molecules[2] << endl;

   return 0;
}

/*

find position of negatives
get sum of nums

*/