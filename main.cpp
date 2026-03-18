#include <iostream>
#include <vector>
using namespace std;

int countSmileys(vector<string> arr)
{
   int count = 0;
   int n = arr.size();
   for(int i = 0; i < n; i++)
   {
      int sizeL = arr[i].size();
      if(sizeL==2)
      {
         char f = arr[i][0];
         char s = arr[i][1];
         if(f == ':' || f == ';')
         {
            if(s == ')' || s == 'D')
            {
               count++;
            }
         }
      } else if (sizeL==3)
      {
         char f = arr[i][0];
         char s = arr[i][1];
         char t = arr[i][2];
         if(f == ':' || f == ';')
         {
            if(s == '-' || s == '~')
            {
               if(t == ')' || t == 'D')
               {
                  count++;
               }
            }
         }
      }
   }

   return count;
}

int main(int argc, char* argv[])
{
   vector<string> test = {":D", ":~)", ";~)", ":)"};
   cout << countSmileys(test) << endl;
   return 0;
}

/*


*/