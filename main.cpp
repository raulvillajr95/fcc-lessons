#include <iostream>
#include <vector>
using namespace std;

int barista(const vector<int>& v)
{
   vector<int> coff = v;
   int n = coff.size();

   if(n == 0)
   {
      return 0;
   }
   else if (n == 1)
   {
      return coff[0];
   }

   sort(coff.begin(), coff.end());

   int tot = coff[0];
   int temp = coff[0];
   for (int i = 1; i < n; i++)
   {
      tot += (temp + 2 + coff[i]);
      temp += 2 + coff[i];
   }

   return tot;
}

int main()
{

   vector<int> coff = {4,3,2};
   int n = coff.size();

   if(n == 0)
   {
      cout << 0 << endl;
   }
   else if (n == 1)
   {
      cout << coff[0] << endl;
   }

   sort(coff.begin(), coff.end());

   int tot = coff[0];
   int temp = coff[0];
   cout << "start: " << tot << endl << endl;
   for (int i = 1; i < n; i++)
   {
      cout << tot << " " << 2 << " " << coff[i] << endl;
      tot += (temp + 2 + coff[i]);
      temp += 2 + coff[i];
      cout << "after: " << i << ", tot: " << tot << endl << endl;
   }

   cout << "res: " << tot << endl;

   return 0;
}

/*
per coffee:
   make coffee + 2 min to clean

if 0, then 0
if 1, then that 1 wait time
else,
   sort

*/