#include <iostream>
#include <map>
using namespace std;

string wordPattern(const string &word)
{
   string wordLow = "";

   // Lower letters;
   int n = word.size();
   for (int i = 0; i < n; i++)
   {
      wordLow += tolower(word[i]);
   }

   // cout << wordLow << endl;

   string res = "0.";
   map<char, int> myMap;
   // If 1 letter, return "0"
   if(n == 1)
   {
      return "0";
   }
   else if (n == 0)
   {
      return "";
   }

   // Check if
   int num = 0;
   for(int i = 1; i < n; i++)
   {
      // cout << word[i] << " " << word[i-1] << endl;
      if(wordLow[i] != wordLow[i-1])
      {
         // cout << "DIFF" << endl;
         num++;
         res += to_string(num);
      }
      else
      {
         res += to_string(num);
      }

      if (i < n-1)
      {
         res += ".";
      }
   }

   return res;
}

int main()
{
   cout << wordPattern("") << endl;
   cout << wordPattern("hello") << endl;
   cout << wordPattern("helLo") << endl;
   cout << wordPattern("helLo") << endl;

   return 0;
}

/*
need to make it faster

possibly find a k + k+1 type pattern to get final result

*/