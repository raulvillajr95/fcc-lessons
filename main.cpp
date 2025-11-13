#include <iostream>
#include <map>
using namespace std;

map<char, unsigned> count(const string& str)
{
   map<char, unsigned> chars;

   int n = str.size();
   for(int i = 0; i < n; i++)
   {
      chars[str[i]]++;
   }

   return chars;
}

int main()
{


   return 0;
}
