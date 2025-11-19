#include <iostream>
using namespace std;

string uncensor(const string& word, const string& cens)
{
   if (cens.size() == 0)
   {
      return word;
   }

   int n = word.size();
   int pos = 0;
   string res = "";
   for(int i = 0; i < n; i++)
   {
      if (word[i] == '*')
      {
         res += cens[pos];
         pos++;
      }
      else
      {
         res += word[i];
      }
   }

   return res;
}

int main()
{
   cout << uncensor("A**Z*N*", "MAIG") << endl;

   return 0;
}

/*

find position of negatives
get sum of nums

*/