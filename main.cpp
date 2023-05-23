#include <iostream>
#include <string>

using namespace std;

int main() 
{
  cout << "Path: ";
  string path;
  cin >> path;
  cout << "File name: ";
  string file_name;
  cin >> file_name;
  cout << "Extension: ";
  string extension;
  cin >> extension;
  
  cout << "Full path: " << path << "/" << file_name << "." << extension << endl;

  return 0;
}
