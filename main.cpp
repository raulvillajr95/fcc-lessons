#include <iostream>
#include <vector>
using namespace std;

void dispInt(vector<int> arr)
{
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

vector<int> Pendulum(vector<int> arr)
{
   sort(arr.begin(), arr.end());
   int n = arr.size();
   int pos = 0;
   vector<int> res;
   vector<int> pB;
   vector<int> pF;

   while(n > 0)
   {
      if (n > 0)
      {
         res.insert(res.begin(), arr[pos]);
         pF.push_back(arr[pos]);

         n--;
         pos++;
      }

      if (n > 0)
      {
         // res.push_back(arr[pos]);
         pB.push_back(arr[pos]);

         n--;
         pos++;
      }
   }

   int nF = pF.size();
   for(int i = nF-1; i >= 0; i--)
   {
      res.push_back(pF[i]);
   }

   int nB = pB.size();
   for(int i = 0; i < nB; i++)
   {
      res.push_back(pB[i]);
   }

   return res;
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