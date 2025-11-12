#include <iostream>
#include <vector>
using namespace std;

vector<int> cleaned_counts(const vector<int>& data)
{
   vector<int> res = {data[0]};

   int n = data.size();
   int biggest = data[0];
   for (int i = 0; i < n-1; i++)
   {
      if (biggest > data[i+1])
      {
         res.push_back(biggest);
      }
      else if (data[i+1] > biggest)
      {
         biggest = data[i+1];
         res.push_back(biggest);
      }
      else
      {
         res.push_back(data[i+1]);
      }
      
   }

   return res;
}

int main()
{

   return 0;
}
