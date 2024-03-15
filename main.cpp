#include <iostream>
#include <string>
#include <vector>
using namespace std;


class PermutationIterator
{
public:
    PermutationIterator(string s)
    {

    }

    string next_permutation()
    {

    }

    bool has_more_permutations()
    {

    }
};

vector<string> permutations(string word)
{
    vector<string> result;
    if (word.length() == 0)
    {
        result.push_back(word);
        return result;
    }
   
    for (int i = 0; i < word.length(); i++)
    {
        string shorter = word.substr(0, i) + word.substr(i + 1);
        vector<string> shorter_permutations = permutations(shorter);
        for (string s : shorter_permutations)
        {
            result.push_back(word[i] + s);
        }
    }
    return result;
}

int main()
{
    cout << "Enter a string: ";
    string input;
    getline(cin, input);   
    vector<string> v = permutations(input);
    for (int i = 0; i < v.size(); i++)
    {
        cout << v[i] << endl;
    }

    return 0;
}

/* Ideas:
- 
*/
