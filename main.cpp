#include <iostream>
#include <vector>
using namespace std;

vector<string> towerBuilder(unsigned num)
{
   int length = 2*num + 1;
   vector<string> res;

   for (int i = 0; i < num; i++)
   {
      string strip = "";
      for (int j = 0; j < num-1-i; j++)
      {
         strip += " ";
      }

      for (int j = 0; j < 2*i+1; j++)
      {
         strip += "*";
      }

      for (int j = 0; j < num-1-i; j++)
      {
         strip += " ";
      }
      res.push_back(strip);
   }

   return res;
}

int main()
{


   return 0;
}
