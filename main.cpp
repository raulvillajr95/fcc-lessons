#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

vector<int> bin(unsigned long long num)
{
   vector<int> res;

   int n = to_string(num).size();

   unsigned long long two = 0;
   int power = 0;
   while(true)
   {
      two = pow(2, power);
      power++;
   }
   
   cout << two << endl;

   // for (int i = 0; i < n; i++)
   // {
   //    int n = pow(2, i);
   //    if (num % n == 0)
   // }
   
   return res;
}

bool interlockable(unsigned long long a, unsigned long long b)
{

   return false;
}

int main()
{
   bin(9);

   return 0;
}

/*
turn to binary
find shortest
loop through shortest
   compare from right to left
   if both 1's exit
*/