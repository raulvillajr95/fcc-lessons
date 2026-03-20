#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

bool inArr(vector<int> arr, int n)
{
   bool in = false;
   for(int i = 0; i < arr.size(); i++)
   {
      if(arr[i] == n)
      {
         in = true;
         break;
      }
   }

   return in;
}

vector<int> uniqueInt(vector<int> arr)
{
   vector<int> res;

   for(int i = 0; i < arr.size(); i++)
   {
      if(!inArr(res,arr[i]))
      {
         res.push_back(arr[i]);
      }
   }

   return res;
}

unsigned long power2(int cnt)
{
   unsigned long res = 1;
   for(int i = 0; i < cnt; i++)
   {
      res *= 2;
   }

   return res;
}

unsigned long binToDec(const string &str)
{
   unsigned long n = str.size();

   unsigned long res = 0;
   
   int count = 0;
   for(int i = n-1; i >= 0; i--)
   {
      if(str[i] == '1')
      {
         res += power2(count);
      }
      count ++;
   }

   return res;
}

vector<int> deletNth(vector<int> arr, int n)
{
   vector<int> uni = uniqueInt(arr);
   vector<int> res;


   return {};
}



int main(int argc, char* argv[])
{
   cout << binToDec("0") << endl;
   cout << binToDec("1") << endl;
   cout << binToDec("10") << endl;
   cout << binToDec("11") << endl;
   cout << binToDec("110") << endl;
   cout << binToDec("1111111111111111111111111111111111111111111111111111111111111111") << endl;


unsigned long int i = -1;
std::cout << i;

   return 0;
}

/*


*/