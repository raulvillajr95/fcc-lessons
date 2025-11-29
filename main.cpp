#include <iostream>
#include <vector>
using namespace std;

vector<int> Pendulum(vector<int> arr)
{
   sort(arr.begin(), arr.end());
   int n = arr.size();
   int pos = 0;
   vector<int> res;

   while(n > 0)
   {
      if (n > 0)
      {
         res.insert(res.begin(), arr[pos]);

         n--;
         pos++;
      }

      if (n > 0)
      {
         res.push_back(arr[pos]);

         n--;
         pos++;
      }
   }

   return res;
}

void dispInt(vector<int> arr)
{
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

int main()
{

   vector<int> arr = {6, 6, 8 ,5 ,10};
   sort(arr.begin(), arr.end());
   int n = arr.size();
   int count = n;
   int posB = 0;
   int posE = n-1;
   vector<int> res;

   while(n > 0)
   {
      if (n > 0)
      {
         res.insert(res.begin(), arr[posB]);

         n--;
         posB++;
      }

      if (n > 0)
      {
         res.push_back(arr[posB]);

         n--;
         posB++;
      }
   }

   dispInt(res);

   return 0;
}

/*

*/