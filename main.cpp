#include <iostream>
#include <string>

using namespace std;

int main()
{
  string s = "Hello";
  string t = "World";

  cout << s.length() + t.length() << endl;
  cout << s.substr(1, 2) << endl;
  cout << s.substr(s.length() / 2, 1) << endl;
  cout << s + t << endl;
  cout << t + s << endl;

  return 0;
}
