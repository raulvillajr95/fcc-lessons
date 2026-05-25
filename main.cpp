#include <iostream>
using namespace std;

// Computes rectangle area
//    prints it, & returns it
int* area3(int, int);

int main()
{
   int wid = 8, len = 5, *a;
   a = area3(wid,len);
   cout << *a << endl; // 40
   delete a;
   return 0;
}

int* area3(int w, int l)
{
   int* ans = new int;
   *ans = w * l;
   return ans;
}