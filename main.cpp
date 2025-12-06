#include <iostream>
#include <vector>
using namespace std;

void dispStr(vector<string> arr)
{
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      cout << "|" << arr[i] << "| ";
   }
   cout << endl;
}

vector<string> sepBySpace(string sentence)
{
   vector<string> res;

   int n = sentence.size();
   string temp = "";
   for(int i = 0; i < n; i++)
   {
      if(sentence[i] != ' ' && i == n-1)
      {
         temp += sentence[i];
         res.push_back(temp);
         temp = "";
      }
      else if (sentence[i] != ' ')
      {
         temp += sentence[i];
      }
      else if (sentence[i] == ' ')
      {
         res.push_back(temp);
         temp = "";
      }
   }

   return res;
}

vector<string> expandPoss(vector<string> arr)
{
   vector<string> res;

   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      for(int j = 0; j < n; j++)
      {
         if(i == j)
         {
            continue;
         }
         else
         {
            res.push_back(arr[i] + arr[j]);
         }
      }
   }

   return res;
}

unsigned solve(const string &nums, unsigned k)
{
   // Seperate by space
   vector<string> numsSep = sepBySpace(nums);

   // Expansion of combos
   vector<string> numsExp = expandPoss(numsSep);

   int count = 0;
   int n = numsExp.size();
   for (int i = 0; i < n; i++)
   {
      int numInt = stoi(numsExp[i]);
      if(numInt % k == 0)
      {
         count++;
      }
   }

   return count;
}

int main()
{

   return 0;
}

/*
separate as string✅
expand to string combinations✅
turn to integers
check divisibility



check for negative bit
check for exponents
check for mantissa

*/