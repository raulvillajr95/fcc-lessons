#include <iostream>
#include <algorithm>

using namespace std;

int main() {
  cout << "Enter the number of movie rentals: ";
  int movies;
  cin >> movies;
  cout << "Enter the number of members referred to the video club: ";
  int members_ref;
  cin >> members_ref;

  cout << "The discount is equal to: " << min(movies + members_ref, 75) << ".00 percent." << endl;

  return 0;
}
