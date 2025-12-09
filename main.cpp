#include <iostream>
using namespace std;

bool redacted(const string &doc1, const string &doc2)
{
   bool res = true;

   int n1 = doc1.size();
   int n2 = doc2.size();
   if(n1 != n2)
   {
      return false;
   }

   for(int i = 0; i < n1; i++)
   {
      if(doc2[i] == '\n' && doc1[i] != '\n')
      {
         res = false;
         break;
      }

      if(doc1[i] != 'X' && (doc1[i] != doc2[i]))
      {
         res = false;
         break;
      }

   }

   return res;
}

int main()
{
   return 0;
}

/*


check for negative bit
check for exponents
check for mantissa

*/