#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

void dispInt(vector<int> arr)
{
   int n = arr.size();
   for (int i = 0; i < n; i++)
   {
      cout << arr[i] << " ";
   }
   cout << endl;
}

vector<int> solution(const vector<int>& arrayA, const vector<int>& arrayB)
{

   bool ran = false;
   int pos = 0;
   vector<int> res;
   // for(int i = 0; i < 5; i++)
   while(pos != 0 || ran != true)
   {
      cout << "added: " << arrayA[pos] << endl;
      res.push_back(arrayA[pos]);

      ran = true;

      pos = arrayA[pos];
      cout << "first: " << pos << endl;

      pos = arrayB[pos-1] - 1;
      cout << "second: " << pos << endl;

      cout << "----------" << endl;
   }

   return res;
}


//////////////////

unordered_map<string, vector<string>> conjugate(string verb)
{
   unordered_map<string, vector<string>> res;
   vector<string> conj;

   string part = verb.substr(0,verb.size()-2);
   string suff = verb.substr(verb.size()-3);

   if(suff == "ar")
   {
      conj.push_back(part + "o");
      conj.push_back(part + "as");
      conj.push_back(part + "a");
      conj.push_back(part + "amos");
      conj.push_back(part + "áis");
      conj.push_back(part + "an");
   } else if (suff == "er")
   {
      conj.push_back(part + "o");
      conj.push_back(part + "es");
      conj.push_back(part + "e");
      conj.push_back(part + "emos");
      conj.push_back(part + "éis");
      conj.push_back(part + "en");
   } else if (suff == "ir")
   {
      conj.push_back(part + "o");
      conj.push_back(part + "es");
      conj.push_back(part + "e");
      conj.push_back(part + "imos");
      conj.push_back(part + "ís");
      conj.push_back(part + "en");
   }

   res[verb] = conj;
   return res;
}

int main()
{
   // vector<int> arrA = {1,3,2,5,4};
   // vector<int> arrB = {5,4,3,2,1};
   // dispInt(solution(arrA, arrB));

   ////////////

   unordered_map<string, int> res;
   res["key"] = 3;
   cout << res["key"] << endl;


   return 0;
}

/*



/////////////


*/