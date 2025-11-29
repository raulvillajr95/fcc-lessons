#include <iostream>
#include <vector>
using namespace std;

int get_section_id(int n, vector<int> a)
{

   int Na = a.size();
   int res = 0;
   int count = 0;
   for (int i = 0; i < Na; i++)
   {
      count += a[i];
      if (n >= count)
      {
         res++;
      }

      if(i == Na-1)
      {
         if(n >= count)
         {
            res = -1;
         }
      }
   }

   return res;
}

int main()
{

   return 0;
}

/*

*/