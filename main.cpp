#include <iostream>
#include <vector>
#include <utility>
using namespace std;

vector<string> openOrSenior(vector<pair<int, int>>& data)
{
   vector<string> res;

   int n = data.size();
   for(int i = 0; i < n; i++)
   {
      if (data[i].first >= 55 && data[i].second > 7)
      {
         res.push_back("Senior");
      }
      else
      {
         res.push_back("Open");
      }
      
   }

   return res;
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