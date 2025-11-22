#include <iostream>
using namespace std;

string speedify(const string &wrd)
{
   string res = "";

   int n = wrd.size();
   for(int i = 0; i < n; i++)
   {
      int spaces = wrd[i] - 'A';

      if(res.size() <= i+spaces+1)
      {
         for (int k = res.size(); k < i+spaces+1; k++)
         {
            res += " ";
         }
         res[i+spaces] = wrd[i];
      }
      else
      {
         res[i+spaces] = wrd[i];
      }
   }

   return res;
}

int main()
{
   cout  << "|" << speedify("AZ") << "|" << endl;
   cout  << "|" << speedify("ABC") << "|" << endl;
   cout  << "|" << speedify("ACE") << "|" << endl;
   cout  << "|" << speedify("CBA") << "|" << endl;
   cout  << "|" << speedify("HELLOWORLD") << "|" << endl;
   
   return 0;
}

/*


*/